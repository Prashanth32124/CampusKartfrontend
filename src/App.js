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
function App() {
  return (
    <Router>
      <Routes>
         <Route path="/Home" element={<Home />} />
         <Route path="/" element={<MainHome />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
         <Route path="/Vitupload" element={<Vitupload/>}/>
        <Route element={<ProtectedRoute />}>
        <Route path="/Predict" element={<Predict/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
        <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/Newhomepage" element={<Newhomepage />} />
          <Route path="/Cyber" element={<Cyber />} />
          <Route path="/Klu/Collegeinfo" element={<Collegeinfo />} />
          <Route path="/Klu/Courses" element={<Courses />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Klinfo" element={<Klinfo />} />
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
