
import './App.css';
import {Routes, Route} from "react-router-dom"
import AdminHome from './components/admin_home'
import Home from './components/home'
import SolicitarRegistro from './components/solicitarRegistro';
import LoginErr from './components/login_err'
import AdminCarreras from './components/admin_ad_carreras';
import AdminCorrales from './components/admin_ad_corrales';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin-home" element={<AdminHome/>}/>
      <Route path='/solicitar-registro' element={<SolicitarRegistro/>}/>
      <Route path='/login-error' element={ <LoginErr/> }/>
      <Route path='/administrar-carreras' element={<AdminCarreras/>}/>
      <Route path='/administrar-corrales' element={<AdminCorrales/>}/>
    </Routes>
    
  );
}

export default App;
