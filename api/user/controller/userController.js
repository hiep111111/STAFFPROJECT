import express from 'express';
import UserModel from '../models/UserModel.js';

const userController = express.Router();

// Route Get
const getUserController = async (req, res) => {
    try {
        const users = await UserModel.find();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};

// Route Get by Id
const getUserByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserModel.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

//check email
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Route Create
const postUserController = async (req, res) => {
    try {
        if (!req.body.Email || !req.body.Username || !req.body.Password) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const existingEmail = await UserModel.findOne({ Email: req.body.Email  });
        const existingName = await UserModel.findOne({ Username: req.body.Username });
        if (existingEmail || existingName) {
            return res.status(400).send({
                message: 'User already exists',
            });
        }

        const newUser = {
            Username: req.body.Username,
            Password: req.body.Password,
            Email: req.body.Email,
        };

        if (req.body.Isadmin !== undefined) {
            newUser.Isadmin = req.body.Isadmin;
        } else {
            newUser.Isadmin = false;
        }

        const createdUser = await UserModel.create(newUser);
        return res.status(201).send(createdUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Update
const putUserController = async (req, res) => {
    try {
        if (!req.body.Email ||
            !req.body.Username ||
            !req.body.Password ||
            !req.body.Isadmin
        ) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const { id } = req.params;

        const result = await UserModel.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'User not found to update' });
        }

        return res.status(200).send({ message: 'User information updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Delete
const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await UserModel.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).send({ message: 'Deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
};

// Route Login
const loginController = async (req, res) => {
    try {
        if (!req.body.Username || !req.body.Password) {
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }

        const checkuser = await UserModel.findOne({ Username: req.body.Username });

        if (!checkuser) {
            return res.status(404).send({
                message: 'User not found',
            });
        }

        if (checkuser.Password !== req.body.Password) {
            return res.status(401).send({
                message: 'Incorrect password',
            });
        }

        return res.status(200).send({
            message: 'Ready to login',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: 'Internal Server Error',
        });
    }
};



export default {
    getUserController,
    getUserByIdController,
    postUserController,
    putUserController,
    deleteUserController,
    loginController
};
