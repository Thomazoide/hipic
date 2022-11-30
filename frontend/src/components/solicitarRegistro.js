import React from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles'
import logo from './logo.png'
import './solicitarRegistro.css'

function SolicitarRegistro(){
    const navigator = useNavigate()
    const [datos, setDatos] = React.useState({
        nombre: "",
        apellido: "",
        rut: "",
        email: "",
        cell: "",
    })
    const rutearHome = ()=>{
        navigator("/")
    }
    const styles = {
        input: {
            '&:invalid': {
                border: 'red solid 2px'
            }
        }
    }
    const crearSolicitud = async () => {
        const objeto = {
            nombre: (datos.nombre+' '+datos.apellido),
            rut: datos.rut,
            email: datos.email,
            cell: datos.cell,
        }
        try{
            const res = await axios.post('http://localhost:4000/api/solicitudes/crear-solicitud', objeto)
            console.log(res)
            alert('solicitud enviada!')
        }catch(error){
            console.error(error);
        }
    }

    return(
        <div className="bloque">
            <div className="cabecera">
                <h1 className="logo"> <img src={logo} className="logotipo" onClick={rutearHome} alt="img"></img></h1>
            </div>
            <div className="cuerpo">
                <form className="formulario" onSubmit={crearSolicitud}>
                    <h3 className="titulo">Ingrese sus datos para el registro</h3>
                    <p className="texto">Nombre</p>
                    <input type="text" className="t-input" pattern="/^[A-Za-z]/" title='Solo letras' required='true' errorMessage={'solo debe contener letras'} onChange={(e)=>setDatos({nombre: e.target.value})} ></input>
                    <p className="texto">Apellido</p>
                    <input type='text' className="t-input" onChange={(e)=>setDatos({apellido: e.target.value})} ></input>
                    <p className="texto">RUT (sin puntos y con guión)</p>
                    <input type="text" className="t-input"  onChange={(e)=>setDatos({rut: e.target.value})} ></input>
                    <p className="texto">Correo electrónico</p>
                    <input type="email" className="t-input" onChange={(e)=>setDatos({email: e.target.value})} ></input>
                    <p className="texto">Número celular</p>
                    <span className="texto">+56 - </span>
                    <input type='tel' className="t-input" onChange={(e)=>setDatos({cell: e.target.value})} ></input>
                    <div className="fila-botones">
                        <button type="submit" className="boton">Enviar datos</button>
                        <button className="boton" onClick={rutearHome}>Volver</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SolicitarRegistro