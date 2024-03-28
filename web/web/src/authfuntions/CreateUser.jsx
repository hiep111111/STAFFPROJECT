import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import "semantic-ui-css/semantic.min.css";
import CONFIG from '../authconfigs/default';

const CreateUserFunction = () => {
    const navigate = useNavigate(); 
    const [formNewUser, setFormNewUser] = useState({
        Username: '',
        Email: '',
        Password: ''
    });
    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormNewUser({ ...formNewUser, [name]: value });
    };

    const handleSubmitNewUser = async (e) => {
        e.preventDefault();
        try {
            if (!isEmailValid(formNewUser.Email)) {
                console.error('error: Email is not valid');
                return;
            }

            const response = await axios.post(
                `http://localhost:${CONFIG.PORTACCOUNT}/Auth/postUser`,
                formNewUser
            );
            console.log('New User created successfully!');
            navigate('/Login');
            setFormNewUser({
                Email: '',
                Username: '',
                Password: ''
            });
        } catch (error) {
            console.error('Error : Username and email exist');
        }
    };

    return { formNewUser, handleInputChange, handleSubmitNewUser };
};

export default CreateUserFunction;
