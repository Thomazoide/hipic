
import './App.css';
import {Routes, Route} from "react-router-dom"
import NavAdmin from "./components/nav_admin"
import Home from './components/home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin-home" element={<NavAdmin/>}/>
    </Routes>
    
  );
}

export default App;
