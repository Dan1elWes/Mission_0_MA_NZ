import styles from "./Navbar.module.css";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>My Company</div>
      <button className={styles.navbarToggle} onClick={toggleMenu}>
      &#9776;
      </button>
      <div className={`${styles.navbarLinks} ${menuOpen ? styles.open : ''}`}>
        <p>Menu1</p>
        <p>Menu2</p>
        <p>Menu3</p>
        <button className={styles.loginBtn}>Login</button>
      </div>
    </nav>
  );
}
