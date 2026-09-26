import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import { useTheme } from "./context/ThemeContext";
import { LIGHT_THEME } from "./constants/theme";
import "./App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={
        theme === LIGHT_THEME
          ? "app light-app"
          : "app dark-app"
      }
    >
      <Navbar />
      <TaskManager />
    </div>
  );
}

export default App;