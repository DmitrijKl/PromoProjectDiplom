import type React from "react";
import styles from "./Product.module.scss";
import { IoIosStar } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { useAppDispatch } from "../../Redux/store";
import { addItem } from "../../Redux/cartSlice/cartSlice";
import type { CartItem } from "../../Redux/cartSlice/cartSlice";

interface ProductProps {
  description: string;
  price: string;
  img: string;
  rating: number;
  amount: number;
  category: string;
}

const Product: React.FC<ProductProps> = ({
  img,
  description,
  price,
  rating,
  amount,
  category,
}) => {
  const dispatch = useAppDispatch();

  const onClickAdd = () => {
    const item: CartItem = {
      description,
      price,
      img,
      category,
      rating,
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
        <button onClick={onClickAdd}>
          <IoMdCart className={styles.cart} />
        </button>
      </div>
    </li>
  );
};

export default Product;
