import express from 'express';
import stockReturnController from '../controller/stockReturnController.js';

const stockReturnRouter = express.Router();


stockReturnRouter.get('/getStockReturn', stockReturnController.getStockReturnController);
stockReturnRouter.get('/getStockReturn/:id', stockReturnController.getStockReturnByIdController);
stockReturnRouter.post('/postStockReturn', stockReturnController.postStockReturnController);
stockReturnRouter.put('/putStockReturn/:id', stockReturnController.putStockReturnController);
stockReturnRouter.delete('/deleteStockReturn/:id', stockReturnController.deleteStockReturnController);

export default stockReturnRouter;
