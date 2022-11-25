import {React } from "react"
import {useNavigate} from "react-router-dom"
import "./navbar.css"
import logo from "./logo.png"

function NavAdmin(){
    const navigate = useNavigate()
    const rutearHome = () => {
        navigate('/admin-home')
    }
    const cerrarSesion = () => {
        navigate('/')
    }
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
                <h1 className="logo"> <img src={logo} className="logotipo" alt="img" onClick={rutearHome}></img> </h1>
                <div className="seccion-boton">
                    <button className="boton-cs" onClick={cerrarSesion}>Cerrar sesión</button>
                </div>
                
            </div>
            <div className="navbar-frame">
                <nav className="navbar">
                    <a className="nav-a" onClick={administrarCarreras} href="/administrar-carreras">Administrar carreras</a>
                    <a className="nav-a" onClick={administrarCorrales} href="/administrar-corrales">Administrar corrales</a>
                    <a className="nav-a" onClick={administrarPreparadores} href="administrar-preparadores">Administrar preparadores</a>
                </nav>
            </div>
        </div>
    )
}

export default NavAdmin;