import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  const isValid = token && token !== 'undefined' && token !== 'null' && token.trim() !== '';

  return isValid ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
