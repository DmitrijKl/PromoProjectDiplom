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
        <Link to="/cart" className={styles.cartBtn}>
          Корзина
          <div className={styles.cartBtn__razdel}></div>
          <div className={styles.cartBtn__amount}>0</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
