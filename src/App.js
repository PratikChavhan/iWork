
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Pages/Login';
function App() {
  return (
    
        
        <BrowserRouter>
        
          <Routes>
          <Route path="/login" element={<Login/>}/>
          </Routes>
         
        </BrowserRouter>
        
  );
  }

export default App;
