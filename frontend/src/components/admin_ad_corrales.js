import React from "react";
import NavAdmin from "./nav_admin";
import CorralesBox from "./corralesBox"
import './admin_ad_corrales.css'
function AdminCorrales(){
    

    return(
        <div className="bloque">
            <div className="top">
                <NavAdmin/>
            </div>
            <div className="contenido">
                <CorralesBox/>
            </div>
        </div>
    )
}
export default AdminCorrales