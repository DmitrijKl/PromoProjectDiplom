import styles from "./header.module.scss";
import PromoLogo from "../../assets/PromoLogo.svg?react";
import { Link } from "react-router-dom";
import type { IRootState } from "../../Redux/store";
import { useSelector } from "react-redux";

const Header = () => {
  const { items } = useSelector((state: IRootState) => state.cartSlice);

  const totalCount = items.reduce((sum: number, item) => {
    return sum + item.count;
  }, 0);

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
          <div className={styles.cartBtn__amount}>{totalCount}</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
