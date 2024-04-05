import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useUser();

    if (!currentUser) {
        // User not logged in, redirect to login page
        return <Navigate to="/login" replace />;
    }

    return children; // User is logged in, render the children components
};

export default ProtectedRoute; // Ensure this is a default export
