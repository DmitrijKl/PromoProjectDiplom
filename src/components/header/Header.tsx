import styles from "./header.module.scss";
import PromoLogo from "../../assets/PromoLogo.svg?react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <PromoLogo className={styles.logoSvg}></PromoLogo>
          </Link>
          <h2>Promo Delivery </h2>
        </div>
        <div className={styles.cart}>
          <span>0 ₽</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
