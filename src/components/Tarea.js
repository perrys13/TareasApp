import React from "react";


const Tarea = ({texto,setTareas,tareas,tarea}) =>{
    
    const eliminarTareaHandler = () => {
         setTareas(tareas.filter((elem)=>elem.id !== tarea.id));
        
    }

    const completadoTareaHandler = () => {
        setTareas(tareas.map((elem) =>{
            if (elem.id === tarea.id){
                return {...elem, completado:!elem.completado}
            }
            return elem;
        }))
    }
    
    
    
    return (
    <div className="contenedor-tarea">   
        <li className={`item-tareas ${tarea.completado ? "completado" : ""}`}>{texto}</li> 

        <button onClick={completadoTareaHandler} className={`btn-completado ${tarea.completado ? "completado-boton" : ""}`}><i className="fas fa-check"></i></button>

        <button onClick={eliminarTareaHandler} className="btn-eliminar"><i className="fas fa-trash"></i></button>
    </div>
    )
}

export default Tarea;