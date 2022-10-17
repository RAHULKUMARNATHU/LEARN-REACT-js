import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import NavBar from './components/NavBar';
import User from './components/User';
import Filter from './components/Filter';
import Company from './components/Company';
import Channel from './components/Channel';
import Others from './components/Others';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>


        <h2>
        Working With SearchParams Hook :)
      </h2>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          
          <Route path="/user" element={<User/>}/>
          <Route path="/filter" element={<Filter/>}/>
          <Route path="/about/:name" element={<About/>}/>
          <Route path="/*" element={<Home/>}/>
          <Route path="/contact/" element={<Contact/>}>
          <Route path="company" element={<Company/>}/>
          <Route path="channel" element={<Channel/>}/>
          <Route path="other" element={<Others/>}/>
          </Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
