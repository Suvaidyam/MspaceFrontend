import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
        <Route index element={<Login/>} />
          <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
      
    </>
  );
}

export default App;
