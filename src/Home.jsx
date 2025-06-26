import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './CSS/Home.css'
function Home() {
    const navigate = useNavigate();
    const handleredirect=()=>{
      navigate('/signup');
    }
  return (
    <div>
       <button id ="bt1" onClick={handleredirect}>Welcome to the website</button>
    </div>
  )
}

export default Home
