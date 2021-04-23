import React from "react";

const Form = ({descripcion,setDescripcion,listaTarea,setListaTarea,edicion}) =>{

       
    const agregarTarea = (e) =>
    {
        e.preventDefault();
        if (descripcion===""){
            alert('ingrese algo')
        }
        else{
        const tarea = {
           descripcion,
           completado:false,
           id:Math.random()*10000,
           editado:false
        }

        setListaTarea([...listaTarea,tarea]);
        setDescripcion("");
        }
    }



    return(
        <div>
            <form className="form">
                <input
                value={descripcion}
                onChange={(e)=>{setDescripcion(e.target.value)}} 
                type="text" className="text" placeholder="Ingrese tarea"  required/>

                 {edicion ? "" : <button className="submit" 
                 onClick={agregarTarea}><i className="fas fa-plus-square"></i></button>} 
  
             </form>
        </div>
    )
}


export default Form;