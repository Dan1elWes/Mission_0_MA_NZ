import React from "react";
import styles from "./Home.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.homePage}>
        <h1 className={styles.loremTitle}>Lorem ipsum dolor sit amet</h1>
      </div>
    </div>
  );
}
