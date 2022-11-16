import {React } from "react"
import {useNavigate} from "react-router-dom"
import "./navbar.css"
import logo from "./logo.png"

function NavAdmin(){
    const navigate = useNavigate()
    const administrarCarreras = ()=>{
        navigate("/administrar-carreras")
    }
    const administrarCorrales = ()=>{
        navigate("/administrar-corrales")
    }
    const administrarPreparadores = ()=>{
        navigate("/administrar-corrales")
    }
    return (
        <div className="bloque">
            <div className="cabecera">
                <h1 className="logotipo"> <img src={logo} className="logo"></img> </h1>
            </div>
            <div className="navbar-frame">
                <nav className="navbar">
                    <a className="nav-a" onClick={administrarCarreras}>Administrar carreras</a>
                    <a className="nav-a" onClick={administrarCorrales}>Administrar corrales</a>
                    <a className="nav-a" onClick={administrarPreparadores}>Administrar preparadores</a>
                </nav>
            </div>
            <div className="home-content">
                <h1 className="texto">Contenido del home del admin </h1>
            </div>
        </div>
    )
}

export default NavAdmin;