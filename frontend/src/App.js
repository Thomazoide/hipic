
import './App.css';
import {Routes, Route} from "react-router-dom"
import NavAdmin from "./components/nav_admin"
import Home from './components/home'
import SolicitarRegistro from './components/solicitarRegistro';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin-home" element={<NavAdmin/>}/>
      <Route path='/solicitar-registro' element={<SolicitarRegistro/>}/>
    </Routes>
    
  );
}

export default App;
