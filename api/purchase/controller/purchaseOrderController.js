import express from 'express';
import purchaseOrderModel from '../models/purchaseOrderModel.js'

const purchaseOrderController = express.Router();

const getPurchaseOrdersController = async (req, res) => {
    try {
        const purchaseOrders = await purchaseOrderModel.find();
        return res.status(200).json(purchaseOrders);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};

const getPurchaseOrderByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const purchaseOrder = await purchaseOrderModel.findById(id);

        if (!purchaseOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(200).json(purchaseOrder);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

const postPurchaseOrderController = async (req, res) => {
    try {
        const requiredFields = [
            'ProductID', 'Department', 'OrderCompany', 'Supplier', 
            'ProductType', 'RequestedBy', 'SupportedBy', 'Customer', 
            'ProductName', 'Quantity', 'UnitPrice', 'IntoMonneyNoVAT', 
            'VAT', 'IntoMonney'
        ];

        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).send({
                message: `Missing required fields: ${missingFields.join(', ')}`,
            });
        }

        const existingOrder = await purchaseOrderModel.findOne({ ProductID: req.body.ProductID });
        if (existingOrder) {
            return res.status(400).send({
                message: 'ProductID already exists',
            });
        }

        const newOrder = {
            ...req.body,
            State: req.body.State || 'pending', 
        };

        const Order = await purchaseOrderModel.create(newOrder);
        return res.status(201).send(Order);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: 'Internal Server Error' });
    }
};

const putStatePurchaseOrderController = async (req, res) => {
    try {
        if (
            !req.body.State
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const { id } = req.params;

        const result = await purchaseOrderModel.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'State not found to update' });
        }

        return res.status(200).send({ message: 'State updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

const deletePurchaseOrderController = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await purchaseOrderModel.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(200).send({ message: 'Deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

export default {
    putStatePurchaseOrderController,
    getPurchaseOrdersController,
    postPurchaseOrderController,
    deletePurchaseOrderController,
    getPurchaseOrderByIdController
};
