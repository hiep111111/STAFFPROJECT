import express from 'express';
import purchaseRequestModel from '../models/purchaseRequestModel.js'

const purchaseRequestController = express.Router();

// Route Get
const getRequestController = async (req, res) => {
    try {
        const purchaseRequests = await purchaseRequestModel.find();
        return res.status(200).json(purchaseRequests);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};

// Route Get by Id
const getPurchaseRequestByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const purchaseRequest = await purchaseRequestModel.findById(id);

        if (!purchaseRequest) {
            return res.status(404).json({ message: 'Request not found' });
        }

        return res.status(200).json(purchaseRequest);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Create
const postRequestController = async (req, res) => {
    try {
        if (!req.body.Department ||
            !req.body.OrderCompany  ||
            !req.body.PurchaseRequisitionType ||
            !req.body.RequestedBy ||
            !req.body.SupportedBy ||
            !req.body.Customer ||
            !req.body.ProductName || 
            !req.body.Quantity ||
            !req.body.UnitPrice||
            !req.body.IntoMonneyNoVAT ||
            !req.body.VAT||
            !req.body.IntoMonney 
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        if (req.body.ProductID) {
            const existingRequest = await purchaseRequestModel.findOne({ ProductID: req.body.ProductID });
            if (existingRequest) {
                return res.status(400).send({ message: 'ProductID already exists' });
            }
        }

        const newRequest = {
            ProductID: req.body.ProductID,
            Department: req.body.Department,
            OrderCompany : req.body.OrderCompany ,
            PurchaseRequisitionType: req.body.PurchaseRequisitionType,
            RequestedBy: req.body.RequestedBy,
            SupportedBy: req.body.SupportedBy,
            Customer: req.body.Customer,
            ProductName: req.body.ProductName,
            Quantity: req.body.Quantity,
            UnitPrice: req.body.UnitPrice,
            IntoMonneyNoVAT: req.body.IntoMonneyNoVAT,
            VAT: req.body.VAT,
            IntoMonney: req.body.IntoMonney,
            State: req.body.State
        };

        const Request = await purchaseRequestModel.create(newRequest);
        return res.status(201).send(Request);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Update
const putRequestController = async (req, res) => {
    try {
        if (!req.body.Department ||
            !req.body.OrderCompany  ||
            !req.body.PurchaseRequisitionType ||
            !req.body.RequestedBy ||
            !req.body.SupportedBy ||
            !req.body.Customer ||
            !req.body.ProductName ||
            !req.body.Quantity ||
            !req.body.UnitPrice ||
            !req.body.IntoMonneyNoVAT ||
            !req.body.VAT ||
            !req.body.IntoMonney||
            !req.body.State
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const { id } = req.params;

        const result = await purchaseRequestModel.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Request not found to update' });
        }

        return res.status(200).send({ message: 'Request updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

const putStateRequestController = async (req, res) => {
    try {
        if (
            !req.body.State
        ) {
            return res.status(400).send({
                message: 'Send State required fields',
            });
        }

        const { id } = req.params;

        const result = await purchaseRequestModel.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'State not found to update' });
        }

        return res.status(200).send({ message: 'State updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};
// Route Delete
const deleteRequestController = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await purchaseRequestModel.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Request not found' });
        }

        return res.status(200).send({ message: 'Deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

export default {
    putStateRequestController,
    getRequestController,
    postRequestController,
    putRequestController,
    deleteRequestController,
    getPurchaseRequestByIdController
};
