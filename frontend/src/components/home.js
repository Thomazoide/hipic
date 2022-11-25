import React from "react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import logo from './logo.png'
import './home.css'

function Home(){
    
    const [rut, setRut] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [users, setUsers] = React.useState('')
    const navigate = useNavigate();
    const solicitarRegistro = ()=>{
        navigate('/solicitar-registro')
    }
    const rutearHome = ()=>{
        navigate("/")
    }
    const getUsers = async () => {
        const datos = await axios.get('http://localhost:4000/api/login')
        setUsers(datos.data)
    }
    const log_in = (e) => {
        e.preventDefault()
        getUsers()
        let token = null
        for(let objeto of users){
            if(rut === objeto.rut && pass === objeto.pass){
                token = objeto
            }
        }
        if(token){
            navigate('admin-home')
        }
        
    }

    return(
        <div className="bloque">
            <div className="cabecera">
                <h1 className="logo"> <img src={logo} className="logotipo" onClick={rutearHome} alt="img"></img></h1>
                
            </div>
            <div className="cuerpo">
                <form className="formulario" onSubmit={log_in}>
                    <h3 className="titulo">Inicio de sesión</h3>
                    <p className="texto">RUT</p>
                    <input type="text" className="t-input" placeholder="Ingrese Rut" id="rut" onChange={(e)=>setRut(e.target.value)}></input>
                    <p className="texto">Clave</p>
                    <input type="password" className="t-input" placeholder="Ingrese clave" id="pass" onChange={(e)=>setPass(e.currentTarget.value)}></input>
                    <div className="fila-botones">
                        <button type="submit" className="boton" >Iniciar sesión</button>
                        <button className="boton" onClick= {solicitarRegistro}>Solicitar registro</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home