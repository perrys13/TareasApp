
import './App.css';
import Form from './components/Form';
import ListaTareas from  './components/ListaTareas';
import React,{useState} from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [tareas,setTareas]=useState([]);

  return (

    <div className="App">
      <header><h1>Tareas App </h1></header>
      <Form setInputText={setInputText} inputText={inputText} tareas={tareas} setTareas={setTareas} />
      <ListaTareas tareas={tareas} setTareas={setTareas}/>
    </div>
  );
}

export default App;
