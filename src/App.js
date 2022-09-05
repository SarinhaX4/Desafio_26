import "./styles.css";
import Lista from "./Lista.js";
import Form from "./forms.js";
import { useState } from "react";

export default function App(props) {
  const [tarefa, setTarefa] = useState("");

  const listaTarefas = props.tasks.map((task) => (
    <Lista
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <Form />

      <input
        type="text"
        id="nova-tarefa-input"
        className="input-group rounded"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />

      <div className="filtros btn-group stack-exception">
        <button type="button" className="btn btn-primary ">
          <span className="esconder"> Mostrar </span>
          <span> todas as </span>
          <span className="esconder"> tarefas</span>
        </button>

        <button type="button" className="btn btn-primary">
          <span className="esconder"> Mostrar </span>
          <span className="esconder"> tarefas</span>
          <span> ativas </span>
        </button>

        <button type="button" className="btn btn-primary ">
          <span className="esconder"> Mostrar </span>
          <span className="esconder"> tarefas</span>
          <span> completadas </span>
        </button>
      </div>
      <h2 id="lista-heading">3 Tarefas Restantes</h2>
      <ul className="Lista stack-large stack-exception">
        {tarefa}
        {listaTarefas}

        {/* <Lista name="dormir" id="1" completed="true" />
        <Lista name="acordar" id="2" completed="true" /> */}
      </ul>
    </div>
  );
}
