import { useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./TaskManager.module.css";

function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState("");

  const { theme } = useTheme();

  const addTask = () => {
    if (!task.trim()) return;

    dispatch({
      type: "add",
      payload: task,
    });

    setTask("");
  };

  return (
    <div
      className={`${styles.container} ${
        theme === LIGHT_THEME
          ? styles.light
          : styles.dark
      }`}
    >
      <h2>Task Manager</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.text}

            <button
              onClick={() =>
                dispatch({
                  type: "remove",
                  payload: t.id,
                })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;