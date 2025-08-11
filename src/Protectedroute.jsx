import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');

  // Debug logs to see what’s happening
  console.log("ProtectedRoute → token in localStorage:", token);

  const isValid = Boolean(token && token !== 'undefined' && token !== 'null' && token.trim() !== '');
  console.log("ProtectedRoute → isValid:", isValid);

  if (!isValid) {
    console.warn("ProtectedRoute → No valid token found, redirecting to /unauthorized");
    return <Navigate to="/unauthorized" replace />;
  }

  console.log("ProtectedRoute → Token is valid, allowing access");
  return <Outlet />;
};

export default ProtectedRoute;
