import React from "react";
import styles from "./Home.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.homePage}>
        <h1 className={styles.loremTitle}>Lorem ipsum dolor sit amet</h1>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Type Here..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>
      <div className={styles.moreImages}>
        <div>
          <img
            className={styles.catOne}
            src="./Images/cat1.jpg"
            alt="placeholder"
          />
          <h2 className={styles.imageTitles}>Lorem ipsum</h2>
          <p className={styles.imageText}>Est venenatls</p>
        </div>
        <div>
          <img
            className={styles.catTwo}
            src="./Images/cat2.jpg"
            alt="placeholder"
          />
          <h2 className={styles.imageTitles}>Lorem ipsum</h2>
          <p className={styles.imageText}>Est venenatls</p>
        </div>
        <div>
          <img
            className={styles.catHug}
            src="./Images/catHug.jpg"
            alt="placeholder"
          />
          <h2 className={styles.imageTitles}>Lorem ipsum</h2>
          <p className={styles.imageText}>Est venenatls</p>
        </div>
      </div>
    </div>
  );
}
