import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ element }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;

    if (!isAuthenticated && !loading) {
        return <Navigate to="/login" />;
    }

    return element;
};

export default PrivateRoute;
