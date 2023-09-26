import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/Auth/Signup/Signup';
import Login from './Components/Auth/Login/Login';
function App() {
  return (
   
    <div className="App">
 <Router>
  <Routes>
  <Route path='/' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
 </Router>
    </div>
  );
}

export default App;
