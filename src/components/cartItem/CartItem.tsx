import type React from "react";
import styles from "./CartItem.module.scss";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useAppDispatch } from "../../Redux/store";
import { addItem, minusItem } from "../../Redux/cartSlice/cartSlice";
import type { CartItem as CartItemType } from "../../Redux/cartSlice/cartSlice";

interface CartItemProps {
  amount: number;
  description: string;
  price: number;
  img: string;
  category: string;
  rating: number;
  id: string;
  count: number;
}

const CartItem: React.FC<CartItemProps> = ({
  amount,
  description,
  price,
  img,
  category,
  rating,
  id,
  count,
}) => {
  const dispatch = useAppDispatch();

  const priceProduct = (price * count).toFixed(2);

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItemType),
    );
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartContent}>
        <div className={styles.img}>
          <img src={img} alt="Not_found" />
        </div>
        <div className={styles.productName}>{description}</div>
        <div className={styles.cartAdditional}>
          <div className={styles.cartCounter}>
            <FaCircleMinus
              onClick={onClickMinus}
              className={`${styles.counter} ${styles.itemMinus}`}
            />
            <div className={styles.itemCounts}>{count}</div>
            <FaCirclePlus
              onClick={onClickPlus}
              className={`${styles.counter} ${styles.itemPlus}`}
            />
          </div>
        </div>
        <div className={styles.cartItemPrice}>{priceProduct} ₽</div>
        <div>
          <IoMdCloseCircleOutline className={styles.productClear} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
