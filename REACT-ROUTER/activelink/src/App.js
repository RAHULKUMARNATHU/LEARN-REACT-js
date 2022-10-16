import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
     
     <Router>
      <NavBar/>
      <Routes>

        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<Home/>}/>
      </Routes>
     </Router>
     <h2>
      Working With Active Link
     </h2>
    </div>
  );
}

export default App;
