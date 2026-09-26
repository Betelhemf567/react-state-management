import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME, DARK_THEME } from "../constants/theme";
import styles from "./Navbar.module.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.brand}>React State Manager</h2>

      <button className={styles.button} onClick={toggleTheme}>
        Switch to {theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME}
      </button>
    </nav>
  );
}

export default Navbar;