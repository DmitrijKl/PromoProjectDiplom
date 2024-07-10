import { useEffect } from "react";
import styles from "./Products.module.scss";
import Product from "./Product";
import { fetchProducts } from "../../Redux/productsSlice/productSlice";
import { useAppDispatch } from "../../Redux/store";
import type { IRootState } from "../../Redux/store";
import { useSelector } from "react-redux";
import Categories from "../categories/Categories";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useSelector((state: IRootState) => state.productSlice.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section>
      <h2 className={styles.titleProducts}>Все продукты</h2>
      <Categories />
      <ul className={styles.items}>
        {products.map((element) => (
          <Product
            key={element.id}
            description={element.description}
            price={element.price}
            img={element.img}
            rating={element.rating}
            amount={element.amount}
            category={element.category}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
