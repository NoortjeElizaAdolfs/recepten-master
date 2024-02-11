import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    const login = async (credentials) => {
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', credentials);
            if (response.status === 200) {
                const data = response.data;
                setToken(data.accessToken);
                setErrorMessage('');
            } else {
                handleLoginError(response);
            }
        } catch (error) {
            handleLoginError(error.response);
        }
    };

    const register = async (credentials) => {
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', credentials);
            if (response.status === 200) {
                const data = response.data;
                setToken(data.accessToken);
                setErrorMessage('');
            } else {
                handleRegisterError(response);
            }
        } catch (error) {
            handleRegisterError(error.response);
        }
    };

    const handleLoginError = (response) => {
        if (response && response.status === 401) {
            setErrorMessage('Onjuiste gebruikersnaam of wachtwoord.');
        } else {
            setErrorMessage('Er is een probleem opgetreden tijdens het inloggen. Probeer het later opnieuw.');
        }
    };

    const handleRegisterError = (response) => {
        if (response && response.status === 409) {
            setErrorMessage('E-mailadres is al geregistreerd.');
        } else {
            setErrorMessage('Registratie mislukt. Probeer het later opnieuw.');
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        
        
    };

    const contextData = {
        token: token,
        errorMessage: errorMessage,
        login,
        register,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;