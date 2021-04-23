
import './App.css';
import Form from './components/Form';
import ListaTareas from  './components/ListaTareas';
import React,{useState} from "react";

function App() {
  const [descripcion, setDescripcion] = useState("");
  const [listaTarea,setListaTarea]=useState([]);
  const [id,setId]=useState(0)
  const [edicion,setEdicion]=useState(false);
  
  

  return (

    <div className="App">
      <header><h1>iTareas</h1></header>

      <Form descripcion={descripcion} setDescripcion={setDescripcion} listaTarea={listaTarea} setListaTarea={setListaTarea} setId={setId} edicion={edicion}/>

      <ListaTareas listaTarea={listaTarea} setListaTarea={setListaTarea} edicion={edicion} setEdicion={setEdicion} setDescripcion={setDescripcion} setId={setId} id={id} descripcion={descripcion}/>
    </div>
  );
}

export default App;
