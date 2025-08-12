import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Unauthorized() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');  
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div>
      <h1>Access denied, please login first</h1>
    </div>
  );
}

export default Unauthorized;
