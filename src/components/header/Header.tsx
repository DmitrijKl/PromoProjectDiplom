import styles from "./header.module.scss";
import PromoLogo from "../../assets/PromoLogo.svg?react";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <PromoLogo className={styles.logoSvg}></PromoLogo>
        <h2>Promo Delivery </h2>
      </div>
      <div className={styles.cart}>
        <span>0 ₽</span>
      </div>
    </header>
  );
};

export default Header;
