import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
