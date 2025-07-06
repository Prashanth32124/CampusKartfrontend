import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  console.log("✅ [ProtectedRoute] Token:", token);

  if (token) {
    return <Outlet />;
  } else {
    console.log("❌ No token found. Redirecting to /unauthorized");
    return <Navigate to="/unauthorized" replace />;
  }
};

export default ProtectedRoute;
