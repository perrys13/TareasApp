import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({listaTarea,setListaTarea,setEdicion,setDescripcion,setId,id,descripcion,edicion}) => {
    
    return (  
    <div className="caja-lista-tareas">
        <ul className="lista-tareas">
            {listaTarea.map((item)=>(
               <Tarea 
               edicion={edicion}
               setEdicion={setEdicion}
               key={item.id}
               tarea={item}
               listaTarea={listaTarea}
               setListaTarea={setListaTarea}
               setDescripcion={setDescripcion}
               setId={setId}
               id={id}
               descripcion={descripcion}
               />
            ))}
        </ul>
    </div>)
}


export default ListaTareas;