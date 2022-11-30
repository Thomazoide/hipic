import React from "react"
import {useNavigate} from 'react-router-dom'
import NavAdmin from "./nav_admin"
import Calendar from 'react-calendar'
import './../../node_modules/react-calendar/dist/Calendar.css'
import './admin_ad_carreras.css'
import axios from "axios"
function AdminCarreras(){
    const navigate = useNavigate()
    const [date, setDate] = React.useState(new Date())
    const [evento, setEvento] = React.useState('')
    const [hora, setHora] = React.useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const respuesta = await axios.post('http://localhost:4000/api/carreras', {
            'nombre': evento,
            'fecha': date.toDateString(),
            'hora': hora,
        })
        if(respuesta){
            alert('Carrera creada correctamente')
        }
    }
    return(
        <div className="bloque">
            <div className="top">
                <NavAdmin/>
            </div>
            <div className="seccion-formulario">
                <form className="formulario" onSubmit={handleSubmit}>
                    <div className="seccion-input">
                        <h5 className="texto">Nombre de evento</h5>
                        <input type="text" onChange={(e)=>setEvento(e.target.value)} className="input" placeholder="Ingrese nombre de evento"/>
                        <h5 className="texto">Seleccionar hora</h5>
                        <input type="time" onChange={(e)=>setHora(e.target.value)}></input>
                    </div>
                    <div className="contenido-home">
                        <span className="calendario">
                            <div className="app">
                                <h1 className="text-center">Calendario de carreras</h1>
                                <div className="calendar-container">
                                    <Calendar onChange={setDate} value={date}/>
                                </div>
                                <p className="text-calendar">
                                    <span className="bold">Fecha seleccionada</span>{'   '}{date.toDateString()}
                                </p>
                            </div>
                        </span>
                        <span className="seccion-botones">
                            <button className="boton-cs" type="submit" onClick={(console.log(evento, date, hora))}>Guardar carrera</button>
                            <button className="boton-cs">Eliminar seleccionado</button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AdminCarreras