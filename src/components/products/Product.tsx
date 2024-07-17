import type React from "react";
import styles from "./Product.module.scss";
import { IoIosStar } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import type { IRootState } from "../../Redux/store";
import { useAppDispatch } from "../../Redux/store";
import { addItem } from "../../Redux/cartSlice/cartSlice";
import type { CartItem } from "../../Redux/cartSlice/cartSlice";
import { useSelector } from "react-redux";

interface ProductProps {
  description: string;
  price: number;
  img: string;
  rating: number;
  amount: number;
  category: string;
  id: string;
}

const Product: React.FC<ProductProps> = ({
  img,
  description,
  price,
  rating,
  amount,
  category,
  id,
}) => {
  const dispatch = useAppDispatch();

  const cartItem = useSelector((state: IRootState) =>
    state.cartSlice.items.find((item: CartItem) => item.id === id),
  );
  const addedCount: number = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      description,
      price,
      img,
      category,
      rating,
      id,
      amount,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <li className={styles.cardProduct}>
      <div className={styles.img}>
        <img className={styles.imgProduct} src={img} alt="Not_Found" />
      </div>
      <div className={styles.ratingProduct}>
        <div className={styles.ratingProduct__container}>
          <IoIosStar className={styles.rating} /> {rating}
        </div>
        <div>{amount} шт</div>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.cartAdd}>
        <p className={styles.price}>{price} ₽</p>
        <div className={styles.cardAddContainer}>
          {addedCount > 0 ? (
            <div className={styles.addedCount}>{addedCount} шт.</div>
          ) : (
            ""
          )}
          <button className={styles.cartAdd} onClick={onClickAdd}>
            <IoMdCart className={styles.cart} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Product;
