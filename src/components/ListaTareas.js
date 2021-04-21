import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas , setTareas}) => {
    
    return (  
    <div className="caja-lista-tareas">
        <ul className="lista-tareas">
            {tareas.map(tarea => (
            <Tarea
             key={tarea.id}
             texto={tarea.text}
             setTareas={setTareas}
             tareas={tareas}
             tarea={tarea}
                />))}
        </ul>
    </div>)
}


export default ListaTareas;