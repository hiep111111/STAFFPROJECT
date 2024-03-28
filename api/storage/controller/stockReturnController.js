import express from 'express';
import stockReturnModel from '../models/stockReturnModel.js';

const stockReturnController = express.Router();

// Route Get
const getStockReturnController = async (req, res) => {
    try {
        const purchaseRequests = await stockReturnModel.find();
        return res.status(200).json(purchaseRequests);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};

// Route Get by Id
const getStockReturnByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const purchaseRequest = await stockReturnModel.findById(id);

        if (!purchaseRequest) {
            return res.status(404).json({ message: ' not found' });
        }

        return res.status(200).json(purchaseRequest);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Create
const postStockReturnController = async (req, res) => {
    try {
        if (!req.body.StockReturnNumber ||
            !req.body.ReturnByUserName ||
            !req.body.CreatedBy
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        if (req.body.StockReturnNumber) {
            const existingRequest = await stockReturnModel.findOne({ StockReturnNumber: req.body.StockReturnNumber });
            if (existingRequest) {
                return res.status(400).send({ message: 'StockReturnNumber already exists' });
            }
        }

        const newRequest = {
            StockReturnNumber: req.body.StockReturnNumber,
            ReturnByUserName: req.body.ReturnByUserName,
            CreatedBy : req.body.CreatedBy ,
            State: req.body.State,
            Description: req.body.Description
        };

        const Request = await stockReturnModel.create(newRequest);
        return res.status(201).send(Request);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Update
const putStockReturnController = async (req, res) => {
    try {
        if (!req.body.StockReturnNumber ||
            !req.body.ReturnByUserName  ||
            !req.body.CreatedBy ||
            !req.body.State ||
            !req.body.Description 
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const { id } = req.params;

        const result = await stockReturnModel.findByIdAndUpdate(id, req.body);

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
const deleteStockReturnController = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await stockReturnModel.findByIdAndDelete(id);

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
    getStockReturnController,
    getStockReturnByIdController,
    postStockReturnController,
    putStockReturnController,
    deleteStockReturnController
};
