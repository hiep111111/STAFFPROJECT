import express from 'express';
import stockAdvaneController from '../controller/stockAdvaneController.js';

const stockAdvaneRouter = express.Router();

stockAdvaneRouter.get('/getStockAdvantage', stockAdvaneController.getStockAdvaneController);
stockAdvaneRouter.get('/getStockAdvantage/:id', stockAdvaneController.getStockAdvaneByIdController);
stockAdvaneRouter.post('/postStockAdvantage', stockAdvaneController.postStockAdvaneController);
stockAdvaneRouter.put('/putStockAdvantage/:id', stockAdvaneController.putStockAdvaneController);
stockAdvaneRouter.delete('/deleteStockAdvantage/:id', stockAdvaneController.deleteStockAdvaneController);

export default stockAdvaneRouter;
