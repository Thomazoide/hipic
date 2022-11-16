import React from "react"
import {useNavigate} from 'react-router-dom'
import logo from './logo.png'
import './home.css'

function Home(){
    const navigate = useNavigate();
    const solicitarRegistro = ()=>{
        navigate('/solicitar-registro')
    }
    const rutearHome = ()=>{
        navigate("/")
    }
    return(
        <div className="bloque">
            <div className="cabecera">
                <h1 className="logo"> <img src={logo} className="logotipo" onClick={rutearHome}></img></h1>
                
            </div>
            <div className="cuerpo">
                <form className="formulario">
                    <h3 className="titulo">Inicio de sesión</h3>
                    <p className="texto">RUT</p>
                    <input type="text" className="t-input" placeholder="Ingrese Rut"></input>
                    <p className="texto">Clave</p>
                    <input type="password" className="t-input" placeholder="Ingrese clave"></input>
                    <div className="fila-botones">
                        <button className="boton">Iniciar sesión</button>
                        <button className="boton" onClick= {solicitarRegistro}>Solicitar registro</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home