import type React from "react";
import styles from "./PopUpConfident.module.scss";

interface PopUpConfidentProps {
  popUpActive: boolean;
}

const PopUpConfident: React.FC<PopUpConfidentProps> = ({ popUpActive }) => {
  return (
    <div className={`${styles.popUp} ${popUpActive ? styles.active : ""}`}>
      <div className={styles.popUpContent}>Привет</div>
    </div>
  );
};

export default PopUpConfident;
