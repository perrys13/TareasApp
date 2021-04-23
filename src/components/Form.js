import React from "react";

const Form = ({setInputText,tareas,setTareas,inputText}) =>{

    const agregarInput = (e) =>{
        setInputText(e.target.value);
    }
    
    const agregarTarea = (e) =>{
        e.preventDefault();
        if (inputText===""){
            alert("ingrese algo");
        }
        else{
            
        setTareas([...tareas, {texto:inputText , completado:false , id: Math.random()*10000 ,editado:false}]);
        setInputText("");
        }
    }

  
 
    return(
        <div>
            <form className="form">
                <input value={inputText} onChange={agregarInput} type="text" className="text" placeholder="Ingrese tarea"  required/>

                 <button className="submit" onClick={agregarTarea}><i className="fas fa-plus-square"></i></button> 
  
             </form>
        </div>
    )
}


export default Form;