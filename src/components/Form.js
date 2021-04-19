import React from "react";

const Form = (props) =>{
    const inputTextHandler = (e) =>{
        props.setInputText(e.target.value);
    }

    
    return(
        <div>
            <header><h1>Hola mundo!</h1></header>
            <form>
                <input onChange={inputTextHandler} type="text" className="todo-input" />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="select">Select</option>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
             </form>
        </div>
    )
}


export default Form;