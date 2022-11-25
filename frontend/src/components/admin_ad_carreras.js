import React from "react"
import NavAdmin from "./nav_admin"
import Calendario from "./calendario"
import './admin_ad_carreras.css'
function AdminCarreras(){
    return(
        <div className="bloque">
            <div className="top">
                <NavAdmin/>
            </div>
            <div className="seccion-input">
                <h5 className="texto">Nombre de evento</h5>
                <input type="text" className="input" placeholder="Ingrese nombre de evento"/>
            </div>
            <div className="contenido-home">
                <span className="calendario">
                    <Calendario/>
                </span>
                <span className="seccion-botones">
                    <button className="boton-cs">Guardar carrera</button>
                    <button className="boton-cs">Eliminar seleccionado</button>
                </span>
            </div>
        </div>
    )
}
export default AdminCarreras