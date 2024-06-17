import React, { createContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(localStorage.getItem('token') || null);
    const login = async (username, password) => {

        try {
            const response = await axios.post('http://localhost:5150/api/auth/login', { username, password });
            const token = response.data.token
            setAuth(token);
            localStorage.setItem('token', token);
            Swal.fire({
                icon: 'success',
                title: 'Login Exitoso',
                text: 'Bienvenido!',
                timer: 1000
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor revisa tus datos nuevamente',
            });
        }

    };

    const register = async (username, email, password) => {
        const response = axios.post('http://localhost:5150/api/auth/register', { username, email, password })
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registro Exitoso',
                    text: 'Bienvenido!',
                    timer: 1000
                });
            })
            .catch(error => {
                if (error.response) {
                    Swal.fire({
                        icon: 'error',
                        title: error.response.data[0].code,
                        text: error.response.data[0].description,
                    });
                } else if (error.request) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Por favor revisa tus datos nuevamente',
                    });
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });;

    };

    return (
        <AuthContext.Provider value={{ auth, login, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };