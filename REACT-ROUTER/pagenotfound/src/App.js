import './App.css';
import { BrowserRouter as Router , Routes , Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Page404 from './components/Page404';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/about' element={<About/>}/>
        {/* <Route path='/*' element={<Page404/>}/> */}
        {/* Navigate to Home Page */}
        <Route path='/*' element={ <Navigate to="/" />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
