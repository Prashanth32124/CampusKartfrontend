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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home/>} />
        <Route path="/Newhomepage" element={<Newhomepage/>}/>
        <Route path="/Cyber" element={<Cyber/>}/>
        <Route path="/Klinfo" element={<Klinfo/>}/>
        <Route path="/Upload" element={<Upload/>}/>
        <Route path="/Klu/Collegeinfo" element={<Collegeinfo/>}></Route>
        <Route path="/details" element={<Details/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
