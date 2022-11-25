import React from "react"
import NavAdmin from "./nav_admin"
import Calendario from "./calendario"
import './admin_home.css'

function AdminHome(){
    return(
        <div className="bloque">
            <div className="top">
                <NavAdmin/>
            </div>
            <div className="contenido-home">
                <span className="calendario">
                    <Calendario/>
                </span>
                <span className="bloque-boton">
                    <button className="boton-cs">Eliminar seleccionado</button>
                </span>
            </div>
        </div>
    )
}
export default AdminHome