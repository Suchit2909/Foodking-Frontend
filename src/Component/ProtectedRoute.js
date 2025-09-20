import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, roles } = useSelector((state) => state.authentication);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(roles)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
