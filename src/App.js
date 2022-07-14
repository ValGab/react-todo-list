import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (value) {
              let task = { task: value, isDone: false };
              const newTab = [task, ...tasks];
              setTasks(newTab);
              setValue("");
            }
          }}
        >
          <input
            className="input-text-task"
            type="text"
            placeholder="Quelle tâche ?"
            value={value}
            onChange={handleChange}
          />
          <button type="submit">Add task</button>
        </form>
        <div className="tasks">
          {/* Je passe en revue mon tableau des tâches pour retourner toutes les tâches */}
          {tasks.map((task, index) => {
            return (
              <Task
                task={task.task}
                isDone={task.isDone}
                key={index}
                index={index}
                setValue={setValue}
                tasks={tasks}
                setTasks={setTasks}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
