import { Outlet } from "react-router-dom";
import styles from "./MainLayouts.module.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Mainlayot = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <div className="container">
          <div className={styles.contentMain}>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mainlayot;
