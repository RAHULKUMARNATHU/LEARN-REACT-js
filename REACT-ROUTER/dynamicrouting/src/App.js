import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
     <h2>Welcome to Dynamic Routing</h2>
     <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/user/:name" element={<Users/>}/>
      <Route path="/*" element={<Navigate to = "/" />}/>
        
      </Routes>
     </Router>
    </div>
  );
}

export default App;
