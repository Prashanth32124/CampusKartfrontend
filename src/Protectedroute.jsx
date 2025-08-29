import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = sessionStorage.getItem('token');
  const isValid = Boolean(token && token !== 'undefined' && token !== 'null' && token.trim() !== '');
  if (!isValid) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
