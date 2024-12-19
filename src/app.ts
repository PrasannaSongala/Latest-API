// src/app.ts
import 'dotenv/config';
import 'reflect-metadata';
import * as path from 'path';
import express from 'express';
import { useExpressServer, getMetadataArgsStorage, useContainer } from 'routing-controllers';
import swaggerUi from 'swagger-ui-express';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import errorMiddleware from './middlewares/error.middleware';
import morgan from 'morgan';
import { logStream } from './utils/logger';
import config from 'config';
import { AutoMapperManager } from './mapper-profiles/mapper';
import Container from 'typedi';
import { UserController } from './controllers/userController';
import  sequelize  from '../config/sequelizeConfig';
class App {
  public app: express.Application;
  public port: string | number;
  public env: string;

  constructor(Controllers: Function[]) {  
    this.app = express();
    this.port = process.env.PORT || 3200;
    
    useContainer(Container);  
    new AutoMapperManager().setUpAutoMapper();
    
    this.initializeMiddlewares();
    this.initializeRoutes(Controllers);  
    this.initializeSwagger(Controllers); 
    this.initializeErrorHandling();
    this.initializeDatabase()
  }

  private initializeMiddlewares() {
    this.app.use(morgan(config.get('log.format'), { stream: logStream }));
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(controllers: Function[]) {
    useExpressServer(this.app, {
      cors: {
        origin: config.get('cors.origin'),
        credentials: config.get('cors.credentials'),
      },
      controllers: controllers,  // Ensure controllers are passed here
      defaultErrorHandler: false,
    });
  }

  private initializeSwagger(controllers: Function[]) {
    const { defaultMetadataStorage } = require('class-transformer/cjs/storage');
    const schemas: any = validationMetadatasToSchemas({
      classTransformerMetadataStorage: defaultMetadataStorage,
      refPointerPrefix: '#/components/schemas/',
    });

    const storage = getMetadataArgsStorage();
    const spec = routingControllersToSpec(storage, { controllers }, {
      components: {
        schemas,
      },
      info: {
        title: 'API Documentation',
        version: '1.0.0',
      },
    });

    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
  }
  private async initializeDatabase() {
    try {
      await sequelize.authenticate();  
      console.log('Database connection established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      process.exit(1);  
    }
  }


  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on PORT ${this.port}`);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
