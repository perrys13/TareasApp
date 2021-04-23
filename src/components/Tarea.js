import React from "react";


const Tarea = ({setTareas,tareas,tarea,setInputText, inputText}) => {
    
    const eliminarTarea = () => {
         setTareas(tareas.filter((elem)=>elem.id !== tarea.id));
        
    }

    const completadoTarea = () => {
        setTareas(tareas.map((elem) =>{
            if (elem.id === tarea.id){
                return {...elem, completado:!elem.completado}
            }
            return elem;
        }))
    }



    return (
    <div className="contenedor-tarea">   
        <li className={`item-tareas ${tarea.completado ? "completado" : ""}`}>{tarea.texto}</li> 

        <button onClick={completadoTarea} className={`btn-completado ${tarea.completado ? "completado-boton" : ""}`}><i className="fas fa-check"></i></button>

        <button className="btn-editar"><i className="fas fa-edit"></i></button>

        <button onClick={eliminarTarea} className="btn-eliminar"><i className="fas fa-trash"></i></button>

        
    </div>
    )
}

export default Tarea;