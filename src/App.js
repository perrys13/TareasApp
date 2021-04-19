
import './App.css';
import Form from './components/Form';
import ToDoList from  './components/ToDoList';
import React,{useState} from "react";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <Form setInputText={setInputText} />
      <ToDoList />
    </div>
  );
}

export default App;
