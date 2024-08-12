import { Outlet } from "react-router-dom";
import type React from "react";
import styles from "./MainLayouts.module.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Error from "../components/Error/Error";

const Mainlayot: React.FC = () => {
  return (
    <div id="wrapper" className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <div className="container">
          <div className={styles.contentMain}>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
      <Error />
    </div>
  );
};

export default Mainlayot;
