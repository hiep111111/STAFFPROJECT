import express from 'express';
import staffController from '../controller/staffController.js';

const StaffRouter = express.Router();


StaffRouter.get('/getStaff', staffController.getStaffController);
StaffRouter.get('/getStaffById/:id', staffController.getStaffByIdController);
StaffRouter.post('/postStaff', staffController.postStaffController);
StaffRouter.put('/UpdateStaff/:id', staffController.putStaffController);
StaffRouter.delete('/deleteStaff/:id', staffController.deleteStaffController);

export default StaffRouter;
