import styles from "./header.module.scss";
import PromoLogo from "../../assets/PromoLogo.svg?react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>
            <PromoLogo className={styles.logoSvg}></PromoLogo>
            <h2>Promo Delivery </h2>
          </div>
        </Link>
        <div className={styles.cart}>
          <span>0 ₽</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
