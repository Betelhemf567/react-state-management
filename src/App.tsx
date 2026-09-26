import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import { useTheme } from "./context/ThemeContext";
import { LIGHT_THEME } from "./constants/theme";
import "./App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          theme === LIGHT_THEME
            ? "#FFFFFF"
            : "#242629",
        color:
          theme === LIGHT_THEME
            ? "#000000"
            : "#FFFFFF",
      }}
    >
      <Navbar />
      <TaskManager />
    </div>
  );
}

export default App;