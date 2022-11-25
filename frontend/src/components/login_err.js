import React from "react"
import {useNavigate} from 'react-router-dom'
import logo from './logo.png'

function LoginErr(){
    const navigate = useNavigate()
    const rutearHome = () => {
        navigate('/')
    }
    return(
        <div className="bloque">
            <div className="cabecera">
                <h1 className="logo"><img src={logo} alt="img" className="logotipo" onClick={rutearHome} /> </h1>
            </div>
            <div className="cuerpo">
                <div className="formulario">
                    <h3 className="texto">Rut y/o contraseña invalido</h3>
                    <div className="fila-botones">
                        <button type="submit" className="boton" onClick={rutearHome}>Volver</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginErr