import { UserController } from './controllers/userController'; 
import App from './app';  

const controllers = [UserController]; 

const app = new App(controllers);
app.listen();  
