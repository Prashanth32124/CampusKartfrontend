import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Newhomepage from './Newhomepage';
import Cyber from './Cyber';
import Klinfo from './Klinfo';
import Upload from './Upload';
import Collegeinfo from './Klu/Collegeinfo';
import Courses from './Klu/Courses';
import Details from './Details';
import Unauthorized from './Unauthorized';
import ProtectedRoute from './Protectedroute';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import Feedback from './Feedback';
import Predict from './Predict';
import MainHome from './MainHome';
import Vitupload from './vit/Vitupload';
import Klulifescore from './Klulifescore';
import Klupielifescore from './Klupielifescore';
import MMhome from './MMhome';

function App() {
  const [loginUsername, setLoginUsername] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/login" element={<Login setLoginUsername={setLoginUsername} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/Vitupload" element={<Vitupload />} />
        <Route path="/Klulifescore" element={<Klulifescore />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/MMhome" element={<MMhome loginUsername={loginUsername} />} />
          <Route path="/Klupielifescore" element={<Klupielifescore />} />
          <Route path="/Predict" element={<Predict />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/Newhomepage" element={<Newhomepage />} />
          <Route path="/Cyber" element={<Cyber />} />
          <Route path="/Klu/Collegeinfo" element={<Collegeinfo />} />
          <Route path="/Klu/Courses" element={<Courses />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Klinfo" element={<Klinfo />} />
          <Route path="/details" element={<Details />} />
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
