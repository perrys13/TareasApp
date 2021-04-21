import React from "react";

const Form = ({setInputText, tareas , setTareas ,inputText}) =>{
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    }
    
    const submitTareaHandler = (e) =>{
        e.preventDefault();
        setTareas([...tareas, {text:inputText , completado:false , id: Math.random()*10000}]);
        setInputText("");
    }

    
    return(
        <div>
            
            <form className="form">
                <input value={inputText} onChange={inputTextHandler} type="text" className="text" placeholder="Ingrese tarea" />
                <button className="submit" onClick={submitTareaHandler}><i className="fas fa-plus-square"></i></button>
             </form>
        </div>
    )
}


export default Form;