// src/contexts/UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import JoblyApi from '../services/JoblyApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('jobly-token');
        if (token) {
            JoblyApi.token = token;
            // Optionally, fetch user details using the token here and update currentUser
        }
    }, []);

    const login = async (username, password) => {
        const { token } = await JoblyApi.login({ username, password });
        localStorage.setItem('jobly-token', token);
        JoblyApi.token = token;
        // Fetch user details and update currentUser
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('jobly-token');
        JoblyApi.token = null;
    };

    return (
        <UserContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};


export const useUser = () => useContext(UserContext);
