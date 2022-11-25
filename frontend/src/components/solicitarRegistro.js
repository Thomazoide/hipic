import React from "react"
import { useNavigate } from "react-router-dom"
import logo from './logo.png'
import './solicitarRegistro.css'

function SolicitarRegistro(){
    const navigator = useNavigate()
    const rutearHome = ()=>{
        navigator("/")
    }
    return(
        <div className="bloque">
            <div className="cabecera">
                <h1 className="logo"> <img src={logo} className="logotipo" onClick={rutearHome} alt="img"></img></h1>
            </div>
            <div className="cuerpo">
                <form className="formulario">
                    <h3 className="titulo">Ingrese sus datos para el registro</h3>
                    <p className="texto">Nombre</p>
                    <input type="text" className="t-input"></input>
                    <p className="texto">Apellido</p>
                    <input type='text' className="t-input"></input>
                    <p className="texto">RUT (sin puntos y con guión)</p>
                    <input type="text" className="t-input"></input>
                    <p className="texto">Correo electrónico</p>
                    <input type="email" className="t-input"></input>
                    <p className="texto">Número celular</p>
                    <span className="texto">+56 - </span>
                    <input type='tel' className="t-input"></input>
                    <div className="fila-botones">
                        <button className="boton">Enviar datos</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SolicitarRegistro