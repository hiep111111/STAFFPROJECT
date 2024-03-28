import express from 'express';
import userController from '../controller/userController.js';

const UserRouter = express.Router();

UserRouter.get('/getUser', userController.getUserController);
UserRouter.get('/getUserById/:id', userController.getUserByIdController);
UserRouter.post('/postUser', userController.postUserController);
UserRouter.put('/UpdateUser/:id', userController.putUserController);
UserRouter.delete('/deleteUser/:id', userController.deleteUserController);
UserRouter.post('/Login', userController.loginController);

export default UserRouter;
