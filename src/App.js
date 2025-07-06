import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Newhomepage from './Newhomepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cyber from './Cyber';
import Klinfo from './Klinfo';
import Upload from './Upload';
import Collegeinfo from './Klu/Collegeinfo';
import Courses from './Klu/Courses';
import Details from './Details';
import ProtectedRoute from './Protectedroute';
import Unauthorized from './Unauthorized';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/Newhomepage" element={<Newhomepage />} />
        <Route path="/Cyber" element={<Cyber />} />
        <Route path="/Klu/Collegeinfo" element={<Collegeinfo />} />
        <Route path="/Klu/Courses" element={<Courses />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Klinfo" element={<Klinfo />} />
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
