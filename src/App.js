import React, { Fragment } from "react"
import logo from './logo.svg';
import './App.css';
import InputTodo from "./components/InputTodo";
import ListToDos from "./components/ListToDos";

function App() {
  return (
    <Fragment>
      <div className="container">
      <InputTodo />
      <ListToDos />
      </div>
      
    </Fragment>
  );
}

export default App;
