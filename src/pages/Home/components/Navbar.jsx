import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>My Company</div>
      <div className={styles.navbarLinks}>
        <p>Menu1</p>
        <p>Menu2</p>
        <p>Menu3</p>
        <button className={styles.loginBtn}>Login</button>
      </div>
    </nav>
  );
}
