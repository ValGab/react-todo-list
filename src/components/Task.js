import trash from "../assets/img/trash.png";

const Task = ({ index, tasks, setTasks, task, isDone }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        id={task}
        checked={isDone ? true : false}
        onChange={() => {
          const newTab = [...tasks];
          if (isDone) {
            newTab[index].isDone = false;
          } else {
            newTab[index].isDone = true;
            let newTask = newTab[index];
            newTab.splice(index, 1);
            newTab.push(newTask);
          }
          // newTab[index].isDone = !isDone; // !isDone pour passer à l'inverse
          setTasks(newTab);
        }}
      />
      {/* Si la checkbox est cochée, la tâche s'affiche barrée  */}
      {isDone ? (
        <div className="line-through">
          {task}
          <img
            src={trash}
            alt={`trash ${index}`}
            onClick={() => {
              const newTab = [...tasks];
              newTab.splice(index, 1);
              setTasks(newTab);
            }}
          />
        </div>
      ) : (
        <div>
          {task}
          <img
            src={trash}
            alt={`trash ${index}`}
            onClick={() => {
              const newTab = [...tasks];
              newTab.splice(index, 1);
              setTasks(newTab);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Task;
