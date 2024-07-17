import type React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../Redux/cartSlice/cartSelectors";
import CartItem from "../../components/cartItem/CartItem";
import CartEmpty from "../../components/cartEmpty/CartEmpty";
import styles from "./Cart.module.scss";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useAppDispatch } from "../../Redux/store";
import { clearItems } from "../../Redux/cartSlice/cartSlice";
import { useEffect } from "react";

const Cart: React.FC = () => {
  const { items, totalPrice } = useSelector(cartSelector);
  const dispatch = useAppDispatch();
  const totalCount = items.reduce((sum: number, item) => {
    return sum + item.count;
  }, 0);

  const clearAllProductsCart = () => {
    if (
      window.confirm("Вы уверены что хотите удалить все продукты из корзины?")
    ) {
      dispatch(clearItems());
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!items.length) {
    return <CartEmpty />;
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cartTitle}>
        <h2>Корзина</h2>
        <div className={styles.cartClear}>
          <MdOutlineDeleteForever className={styles.cartClearIcon} />
          <div onClick={clearAllProductsCart}>Очистить корзину</div>
        </div>
      </div>
      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className={styles.cartOrderDescriptipn}>
        <span className={styles.cartProductsCount}>
          Всего продуктов: <b>{totalCount} шт.</b>
        </span>
        <span className={styles.cartProductsPrice}>
          Сумма заказа:
          <b className={styles.cartProductsSum}> {totalPrice.toFixed(2)} ₽</b>
        </span>
      </div>
    </div>
  );
};

export default Cart;
