//src/models/sequelize.ts

// #region IMPORTS
import { Sequelize } from 'sequelize';
import { Service } from 'typedi';
import * as fs from 'node:fs';
// #endregion

@Service()
export class SequelizeConnection {
  private static sequelize: Sequelize;

  constructor() {
    if (!SequelizeConnection.sequelize) {
      SequelizeConnection.initialize();
    }
  }

  public static getSequelize(): Sequelize {
    if (!SequelizeConnection.sequelize) {
      this.initialize();
    }
    return SequelizeConnection.sequelize;
  }

  private static initialize() {
    const dbname = process.env.SSM_DBNAME || 'srikanya';  
    const username = process.env.SSM_USERNAME || 'root';  
    const password = process.env.SSM_PASSWORD || 'Pass123!@#'; 
    const host = process.env.SSM_HOST || 'localhost';  
    const readerHost = process.env.SSM_READER_HOST || 'localhost';  

    if (!dbname || !username || !password || !host || !readerHost) {
      throw new Error('Missing environment variables for DB connection');
    }

    SequelizeConnection.sequelize = new Sequelize(dbname, username, password, {
      ssl: true,
      native: true,
      dialect: 'mysql',
      dialectOptions: {
        ssl: {
          ca: [fs.readFileSync(__dirname + '/ca.pem')],
          rejectUnauthorized: true
        }
      },
      replication: {
        read: [{
          host: readerHost,
          username: username,
          password: password,
        }],
        write: {
          host: host,
          username: username,
          password: password,
        }
      },
      logging: false
    });
  }
}
