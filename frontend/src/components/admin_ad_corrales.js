import React from "react";
import NavAdmin from "./nav_admin";
import './admin_ad_corrales.css'
function AdminCorrales(){
    return(
        <div className="bloque">
            <div className="top">
                <NavAdmin/>
            </div>
            <div className="contenido">
                <span className="bloque-botones">
                    <button className="boton">corral 1</button>
                </span>
                <span className="corrales">
                    <h1 className="texto">Cuadro corrales</h1>
                </span>
            </div>
        </div>
    )
}
export default AdminCorrales