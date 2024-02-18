
import './App.css';
// import { Button, CardBody } from 'reactstrap';
// import { Card } from 'reactstrap';
// import Base from './components/Base';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Test from './pages/Test';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Routing of the Url */ }
      <Route path="/" element={<Home />/*Sending jsx and it will gwt parsed*/ } />
      <Route path="/login" element={<Login />/*Sending jsx and it will gwt parsed*/ } />
      <Route path="/signup" element={<Signup />/*Sending jsx and it will gwt parsed*/ } />
      <Route path="/about" element={<About />/*Sending jsx and it will gwt parsed*/ } />
      <Route path="/test" element={<Test />/*Sending jsx and it will gwt parsed*/ } />
      <Route path="/services" element={<Services />} />
    </Routes>
    </BrowserRouter>
    // <Base>
    // <h1> This is app js</h1>
    // </Base>
    
  //   <BrowserRouter>
  //   <Routes>
  //   <Route path="home" element={<h1>This is Home Page</h1>} />
  //   </Routes>
  // </BrowserRouter>
  
  );
}

export default App;
