//src/index.ts
import { useContainer } from 'routing-controllers';
import { Container } from 'typedi';  
// Register your controller 
import { UserController } from './controllers/userController';

useContainer(Container);  // Use the container with routing-controllers
Container.set(UserController, new UserController());  // Register the controller

// Then start your server (assuming you're using Express)
import { createExpressServer } from 'routing-controllers';

const app = createExpressServer({
  controllers: [UserController], 
});

app.listen(3200);
