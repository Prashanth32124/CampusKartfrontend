import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('token');

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/unauthorized" />;
  }
};

export default ProtectedRoute;
