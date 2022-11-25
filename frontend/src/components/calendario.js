import React from "react"
import Calendar from 'react-calendar'
import './../../node_modules/react-calendar/dist/Calendar.css'

function Calendario(){
    const [date, setDate] = React.useState(new Date())
    return(
        <div className="app">
            <h1 className="text-center">Calendario de carreras</h1>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date}/>
            </div>
            <p className="text-center">
                <span className="bold">Fecha seleccionada:</span>{'  '}
                {date.toDateString()}
            </p>
        </div>
    )
}
export default Calendario