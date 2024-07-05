import React from "react";
import styles from "./Product.module.scss";
import { IoIosStar } from "react-icons/io";
import { IoMdCart } from "react-icons/io";

interface ProductProps {
  description: string;
  price: string;
  img: string;
  rating: number;
  amount: number;
}

const Product = (props: ProductProps) => {
  return (
    <li className={styles.cardProduct}>
      <div>
        <img className={styles.imgProduct} src={props.img} alt="Not_Found" />
      </div>
      <div className={styles.ratingProduct}>
        <div className={styles.ratingProduct__container}>
          <IoIosStar className={styles.rating} /> {props.rating}
        </div>
        <div>{props.amount} шт</div>
      </div>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.cartAdd}>
        <p className={styles.price}>{props.price} ₽</p>
        <button>
          <IoMdCart className={styles.cart} />
        </button>
      </div>
    </li>
  );
};

export default Product;
