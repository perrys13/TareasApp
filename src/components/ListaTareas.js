import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas , setTareas , setInputText , inputText}) => {
    
    return (  
    <div className="caja-lista-tareas">
        <ul className="lista-tareas">
            {tareas.map(tarea => (
            <Tarea
             inputText={inputText}
             setInputText={setInputText}
             tareas={tareas}
             setTareas={setTareas}
             key={tarea.id}   
             tarea={tarea}
             
                />))}
        </ul>
    </div>)
}


export default ListaTareas;