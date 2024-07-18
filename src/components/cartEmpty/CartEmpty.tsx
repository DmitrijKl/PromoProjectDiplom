import type React from "react";
import styles from "./CartEmpty.module.scss";
import { Link } from "react-router-dom";
import Brokoly from "../../assets/Корзина_броколи.svg";

const CartEmpty: React.FC = () => {
  return (
    <div className={styles.cart__empty}>
      <div>
        <img src={Brokoly} alt="Not_found" />
      </div>
      <div className={styles.cart__description}>
        <h2 className={styles.cart__description_title}>
          В корзине пока нет товаров
        </h2>
        <p className={styles.cart__description_paragraf}>
          <Link className={styles.cart__backhome} to="/">
            Перейдите в каталог
          </Link>
          , посмотрите скидки или воспользуйтесь поиском, чтобы найти нужный
          товар
        </p>
        <Link className={styles.cart__btn__backhome} to="/">
          Начать покупки
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
