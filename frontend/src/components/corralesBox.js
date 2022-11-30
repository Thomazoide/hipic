import React from "react"
import axios from "axios"
import './corralesBox.css'

class CorralesBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            corrales: [],
            jinetes: [],
            caballos: [],
        }
    }
    async componentDidMount(){
        const corrales = (await axios.get('http://localhost:4000/api/corrales')).data
        const jinetes = (await axios.get('http://localhost:4000/api/jinetes')).data
        const caballos = (await axios.get('http://localhost:4000/api/caballos')).data
        this.setState({
            corrales: corrales,
            jinetes: jinetes,
            caballos: caballos,
        })
    }
    render(){
        return(
            <div className="container">
                <span className="bloque-datos">
                    <div className="corrales">
                        <ul className="lista-corrales">
                            {
                                this.state.corrales.map(corral => <li className="corral">
                                    <div className="datos-corral">
                                        <span className="data">
                                            <p className="texto">Codigo de corral: {corral.cod_corral}</p>
                                            <p className="texto">Capacidad de caballos: {corral.capacidad_caballos} </p>
                                            <p className="texto">Carreras corridas: {corral.carreras_corridas}</p>
                                        </span>
                                        <span className="data">
                                            <p className="texto">Victorias: {corral.victorias} </p>
                                            <p className="texto">Porcentaje de victoria: {corral.ratio_victorias} </p>
                                            <p className="texto">Balance mensual: {corral.balance_mensual} </p>
                                        </span>
                                    </div>
                                    <div className="barra-divisoria">
                                        <h1 className="texto-bd">---------------</h1>
                                    </div>
                                </li>)
                            }
                        </ul>
                    </div>
                </span>
            </div>
        )
    }
}

export default CorralesBox