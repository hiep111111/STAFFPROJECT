import express from 'express';
import purchaseRequestController from '../controller/purchaseRequestController.js';

const purchaseRequestRouter = express.Router();


purchaseRequestRouter.get('/getPurchaseRequest', purchaseRequestController.getRequestController);
purchaseRequestRouter.get('/getPurchaseRequest/:id', purchaseRequestController.getPurchaseRequestByIdController);
purchaseRequestRouter.post('/postPurchaseRequest', purchaseRequestController.postRequestController);
purchaseRequestRouter.put('/putStatePurchaseRequest/:id', purchaseRequestController.putStateRequestController);
purchaseRequestRouter.put('/putPurchaseRequest/:id', purchaseRequestController.putRequestController);
purchaseRequestRouter.delete('/deletePurchaseRequest/:id', purchaseRequestController.deleteRequestController);

export default purchaseRequestRouter;

