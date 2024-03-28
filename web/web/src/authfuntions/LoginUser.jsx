import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import CONFIG from '../authconfigs/default';

const LoginFunction = () => {
    const navigate = useNavigate(); 
    const [loginData, setLoginData] = useState({
        Username: '', 
        Password: ''
    });
    const [loginResult, setLoginResult] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }; 

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `http://localhost:${CONFIG.PORTACCOUNT}/Auth/Login`,
                loginData
            );

            if (response.status === 200) {
                navigate('/purchase');
            } else {
                setLoginResult('error Login');
            }
        } catch (error) {
            console.error('Error logging in:', error.message);
            setLoginResult('error');
        }
    };
    
    return { loginData, handleInputChange, handleSubmitLogin, loginResult };
};

export default LoginFunction;
