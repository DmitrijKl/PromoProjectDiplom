import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import Product from "./Product";
import axios from "axios";

interface IResponse {
  description: string;
  price: string;
  img: string;
  id: string;
  rating: number;
  amount: number;
}

const Products = () => {
  const [products, setProducts] = useState<IResponse[]>([]);

  useEffect(() => {
    const dataAsync = async () => {
      const products = await axios.get(
        "https://promodelivery-b94a3-default-rtdb.firebaseio.com/products.json",
      );
      const loadedMeals = [];

      for (const key in products.data) {
        loadedMeals.push({
          id: key,
          img: products.data[key].img,
          description: products.data[key].description,
          price: products.data[key].price,
          rating: products.data[key].rating,
          amount: products.data[key].amount,
        });
      }
      setProducts(loadedMeals);
    };
    dataAsync();
  }, []);

  return (
    <section>
      <h2 className={styles.titleProducts}>Все продукты</h2>
      <ul className={styles.items}>
        {products.map((element) => (
          <Product
            key={element.id}
            description={element.description}
            price={element.price}
            img={element.img}
            rating={element.rating}
            amount={element.amount}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
