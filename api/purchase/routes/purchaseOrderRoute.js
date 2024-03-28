import express from 'express';
import purchaseOrderController from '../controller/purchaseOrderController.js';

const purchaseOrderRouter = express.Router();

purchaseOrderRouter.get('/getPurchaseOrder', purchaseOrderController.getPurchaseOrdersController);
purchaseOrderRouter.get('/getPurchaseOrder/:id', purchaseOrderController.getPurchaseOrderByIdController);
purchaseOrderRouter.post('/postPurchaseOrder', purchaseOrderController.postPurchaseOrderController);
purchaseOrderRouter.put('/putStatePurchaseOrder/:id', purchaseOrderController.putStatePurchaseOrderController);
purchaseOrderRouter.put('/putPurchaseOrder/:id', purchaseOrderController.putPurchaseOrderController);
purchaseOrderRouter.delete('/deletepurchaseOrder/:id', purchaseOrderController.deletePurchaseOrderController);

export default purchaseOrderRouter;
