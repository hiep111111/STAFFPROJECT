import express from 'express';
import staffIformationModel from '../models/staffIformationModel.js';

const staffController = express.Router();

// Route Get
const getStaffController = async (req, res) => {
    try {
        const staffs = await staffIformationModel.find();
        return res.status(200).json(staffs);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};

// Route Get by Id
const getStaffByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const staff = await staffIformationModel.findById(id);

        if (!staff) {
            return res.status(404).json({ message: 'Request not found' });
        }

        return res.status(200).json(staff);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Create
const postStaffController = async (req, res) => {
    try {
        if (!req.body.UserName ||
            !req.body.BirthDay ||
            !req.body.StartDay ||
            !req.body.EndDay ||
            !req.body.Position ||
            !req.body.CompanyName ||
            !req.body.DepartmentName
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        if (req.body.ProductID) {
            const existingStaff = await staffIformationModel.findOne({
                UserName: req.body.UserName,
                BirthDay: req.body.BirthDay,
                StartDay: req.body.StartDay,
                EndDay: req.body.EndDay,
                Position: req.body.Position,
                CompanyName: req.body.CompanyName,
                DepartmentName: req.body.DepartmentName,
            });
            if (existingStaff) {
                return res.status(400).send({ message: 'Staff already exists' });
            }
        }

        const newStaff = {
            UserName: req.body.UserName,
            BirthDay: req.body.BirthDay,
            StartDay: req.body.StartDay,
            EndDay: req.body.EndDay,
            Position: req.body.Position,
            CompanyName: req.body.CompanyName,
            DepartmentName: req.body.DepartmentName,
        };

        const Stafff = await staffIformationModel.create(newStaff);
        return res.status(201).send(Stafff);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Update
const putStaffController = async (req, res) => {
    try {
        if (!req.body.Department ||
            !req.body.orderCompany ||
            !req.body.PurchaseRequisitionType ||
            !req.body.RequestedBy ||
            !req.body.SupportedBy ||
            !req.body.Customer ||
            !req.body.ProductName ||
            !req.body.Quantity ||
            !req.body.UnitPrice ||
            !req.body.IntoMonneyNoVAT ||
            !req.body.VAT ||
            !req.body.IntoMonney
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const { id } = req.params;

        const result = await staffIformationModel.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Staff not found to update' });
        }

        return res.status(200).send({ message: 'Staff information updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Delete
const deleteStaffController = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await staffIformationModel.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Staff not found' });
        }

        return res.status(200).send({ message: 'Deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

export default {
    getStaffController,
    getStaffByIdController,
    postStaffController,
    putStaffController,
    deleteStaffController
};
