import styles from "./SwiperCard.module.scss";

interface IswiperCard {
  img: string;
}

const SwiperCard = ({ img }: IswiperCard) => {
  return (
    <div className={styles.cardSwiper}>
      <img src={img} alt="Not_Found"></img>
    </div>
  );
};

export default SwiperCard;
