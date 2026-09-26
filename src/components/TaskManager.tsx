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
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      return;
    }

    dispatch({
      type: "add",
      payload: trimmedTask,
    });

    setTask("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <main
      className={`${styles.container} ${
        theme === LIGHT_THEME
          ? styles.light
          : styles.dark
      }`}
    >
      <h2 className={styles.title}>Task Manager</h2>

      <div className={styles.inputSection}>
        <input
          className={styles.input}
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter task"
        />

        <button
          className={styles.addButton}
          onClick={addTask}
          disabled={!task.trim()}
        >
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className={styles.emptyMessage}>
          No tasks yet. Add a task above.
        </p>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map((currentTask) => (
            <li
              className={styles.taskItem}
              key={currentTask.id}
            >
              <span>{currentTask.text}</span>

              <button
                className={styles.removeButton}
                onClick={() =>
                  dispatch({
                    type: "remove",
                    payload: currentTask.id,
                  })
                }
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default TaskManager;