import { Outlet } from "react-router-dom";
import styles from "./MainLayouts.module.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Mainlayot = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayot;
