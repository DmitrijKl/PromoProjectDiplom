import type React from "react";
import styles from "./PopUpConfident.module.scss";
import { createPortal } from "react-dom";
import { useEffect } from "react";

interface PopUpConfidentProps {
  handleActivePopUp: () => void;
}

const PopUpConfident: React.FC<PopUpConfidentProps> = ({
  handleActivePopUp,
}) => {
  const containerPopUp = document.getElementById("portal-root");
  useEffect(() => {
    // document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  if (containerPopUp) {
    return createPortal(
      <div onClick={handleActivePopUp} className={styles.popUp}>
        <div
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            event.stopPropagation()
          }
          className={styles.popUpContent}
        >
          Привет
        </div>
      </div>,
      containerPopUp,
    );
  }
};

export default PopUpConfident;
