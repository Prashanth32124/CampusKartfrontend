import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');

  console.log("🔐 Checking token:", token);

  // Explicitly check for valid non-empty token
  if (token && token !== 'null' && token !== 'undefined' && token.trim() !== '') {
    return <Outlet />;
  } else {
    return <Navigate to="/unauthorized" replace />;
  }
};

export default ProtectedRoute;
