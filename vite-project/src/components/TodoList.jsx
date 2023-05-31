import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/TodoList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function TodoList() {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
    toast("Tâche ajoutée!");
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    toast("Tâche supprimée!");
  };

  const toggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <ul>
        <TransitionGroup component={null}>
          {tasks.map((task, index) => (
            <CSSTransition key={index} timeout={500} classNames="item">
              <li>
                <div className={task.completed ? "completed-task" : ""}>
                  <input
                    id={`task-${index}`}
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleCompletion(index)}
                  />
                  <label htmlFor={`task-${index}`}></label>
                  {task.text}
                </div>
                <button onClick={() => deleteTask(index)} className="delete">
                  Supprimer
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask} className="add">
        Ajouter une tâche
      </button>
      <ToastContainer />
    </div>
  );
}

export default TodoList;
