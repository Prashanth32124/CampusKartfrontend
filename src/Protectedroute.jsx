import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('token'); // or your logic

  return isAuthenticated ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
