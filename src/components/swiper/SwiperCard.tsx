import styles from "./SwiperCard.module.scss";
import type React from "react";

interface IswiperCard {
  img: string;
}

const SwiperCard: React.FC<IswiperCard> = ({ img }) => {
  return (
    <div className={styles.cardSwiper}>
      <img src={img} alt="Not_Found"></img>
    </div>
  );
};

export default SwiperCard;
