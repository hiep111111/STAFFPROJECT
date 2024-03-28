import express from 'express';
import stockAdvaneModel from '../models/stockAdvaneModel.js';

const stockReturnController = express.Router();

// Route Get
const getStockAdvaneController = async (req, res) => {
    try {
        const purchaseRequests = await stockAdvaneModel.find();
        return res.status(200).json(purchaseRequests);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};
// Route Get by Id
const getStockAdvaneByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const purchaseRequest = await stockAdvaneModel.findById(id);

        if (!purchaseRequest) {
            return res.status(404).json({ message: ' not found' });
        }

        return res.status(200).json(purchaseRequest);
    } catch (error) {
        console.log('dddddddddddddddddddddd');
        res.status(500).send({ message: error.message });
    }
};

// Route Create
const postStockAdvaneController = async (req, res) => {
    try {
        if (!req.body.DocumentNo ||
            !req.body.SourceStoreCode ||
            !req.body.SourceStoreName||
            !req.body.DestinationStoreCode||
            !req.body.DestinationStoreName||
            !req.body.Recipientant
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        if (req.body.DocumentNo) {
            const existingRequest = await stockAdvaneModel.findOne({ DocumentNo: req.body.DocumentNo });
            if (existingRequest) {
                return res.status(400).send({ message: 'DocumentNo already exists' });
            }
        }

        const newRequest = {
            DocumentNo: req.body.DocumentNo,
            SourceStoreCode: req.body.SourceStoreCode,
            SourceStoreName : req.body.SourceStoreName ,
            DestinationStoreCode: req.body.DestinationStoreCode,
            DestinationStoreName: req.body.DestinationStoreName,
            Recipientant: req.body.Recipientant,
            State: req.body.State
        };

        const Request = await stockAdvaneModel.create(newRequest);
        return res.status(201).send(Request);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Update
const putStockAdvaneController = async (req, res) => {
    try {
        if (!req.body.DocumentNo ||
            !req.body.SourceStoreCode  ||
            !req.body.SourceStoreName ||
            !req.body.DestinationStoreCode ||
            !req.body.DestinationStoreName ||
            !req.body.Recipientant ||
            !req.body.State 

        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const { id } = req.params;

        const result = await stockAdvaneModel.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Request not found to update' });
        }

        return res.status(200).send({ message: 'Request updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Delete
const deleteStockAdvaneController = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await stockAdvaneModel.findByIdAndDelete(id);

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
    getStockAdvaneController,
    getStockAdvaneByIdController,
    postStockAdvaneController,
    putStockAdvaneController,
    deleteStockAdvaneController,
};
