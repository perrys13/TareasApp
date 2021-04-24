import React from "react";


const Tarea = ({edicion,tarea,listaTarea,setListaTarea,setDescripcion,setEdicion,setId,descripcion,id}) => {

    const eliminarTarea = (id) =>{
        const filtro = listaTarea.filter(item => item.id !== id)
        setListaTarea(filtro)}
        

        const completadoTarea = () => 
        {
            if (edicion){
                return 
            }
            else{
            setListaTarea(listaTarea.map((item) =>{
                if (item.id === tarea.id){
                    return {...item, completado:!item.completado}
                }
                return item;
            }))
            }
        }

        const editarTarea = (objeto) => {

            if (objeto.completado){
                return objeto;
            }
            else
            {
            setDescripcion(objeto.descripcion);
            setId(objeto.id)
            setEdicion(true);
            setListaTarea(listaTarea.map((item) =>{
                if (item.id === tarea.id){
                    return {...item, editado:!item.editado}
                }
                return item;
            }))
            }    
        }

        const terminarEdicion = (e) =>{
            e.preventDefault()

            const editado = listaTarea.map(item => item.id === id ? {descripcion,id,completado:false,editado:false} : item)
            setListaTarea(editado);
            setEdicion(false)
            setDescripcion("")
            
        }

    return (
    <div className="contenedor-tarea">   
        
        <li className={`item-tareas ${tarea.completado ?"completado" : edicion ? "item-tareas-editado" : ""}`}>{tarea.descripcion}</li> 

        <button onClick={completadoTarea} className={`btn-completado ${tarea.completado ? "completado-boton" : ""}`}><i className="fas fa-check"></i></button>

        {edicion ? <button onClick={(e)=>{terminarEdicion(e)}}
        className={`btn-editar ${tarea.editado ? "editado" : ""}`}>
        <i className="fas fa-edit"></i></button> : <button onClick={()=>{editarTarea(tarea)}}className="btn-editar"><i className="fas fa-edit"></i></button>}

        <button onClick={()=>{eliminarTarea(tarea.id)}}className="btn-eliminar"><i className="fas fa-trash"></i></button>

        
    </div>
    )
}

export default Tarea;