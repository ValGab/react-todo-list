import { useState } from "react";
import trash from "../assets/img/trash.png";

const Task = ({ index, tasks, setTasks }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="task">
      <input
        type="checkbox"
        id={tasks[index]}
        onChange={() => {
          if (checked) {
            setChecked(false);
          } else if (!checked) {
            setChecked(true);
          }
        }}
      />
      {/* Si la checkbox est cochée, la tâche s'affiche barrée  */}
      {checked ? (
        <label className="line-through" htmlFor={tasks[index]}>
          {tasks[index]}
          <img
            src={trash}
            alt={`trash ${index}`}
            onClick={() => {
              const newTab = [...tasks];
              newTab.splice(index, 1);
              setTasks(newTab);
            }}
          />
        </label>
      ) : (
        <label htmlFor={tasks[index]}>
          {tasks[index]}
          <img
            src={trash}
            alt={`trash ${index}`}
            onClick={() => {
              const newTab = [...tasks];
              newTab.splice(index, 1);
              setTasks(newTab);
            }}
          />
        </label>
      )}
    </div>
  );
};

export default Task;
