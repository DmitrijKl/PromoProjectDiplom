import { useEffect } from "react";
import styles from "./Products.module.scss";
import type React from "react";
import Product from "./Product";
import { fetchProducts } from "../../Redux/productsSlice/productSlice";
import { useAppDispatch } from "../../Redux/store";
import type { IRootState } from "../../Redux/store";
import { useSelector } from "react-redux";
import Categories from "../categories/Categories";
import SceletonProduct from "../sceletonProduct/SceletonProduct";
import PaginationProducts from "../Pagination/Pagination";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items: products, status } = useSelector(
    (state: IRootState) => state.productSlice,
  );

  const { currentPage, categoryName, searchValue } = useSelector(
    (state: IRootState) => state.filterSlice,
  );
  useEffect(() => {
    console.log(searchValue);
    dispatch(fetchProducts({ currentPage, categoryName, searchValue }));
  }, [currentPage, categoryName, searchValue]);

  return (
    <section id="products">
      <h2 className={styles.titleProducts}>Все продукты</h2>
      <Categories categoryName={categoryName} />
      {status === "error" ? (
        <h1>Ошибка при получении данных...</h1>
      ) : (
        <ul className={styles.items}>
          {status === "loading"
            ? [...new Array(4)].map((_, index) => (
                <SceletonProduct key={index} />
              ))
            : products.map((element) => (
                <Product
                  key={element.id}
                  description={element.description}
                  price={element.price}
                  img={element.img}
                  rating={element.rating}
                  amount={element.amount}
                  category={element.category}
                  id={element.id}
                />
              ))}
        </ul>
      )}
      <PaginationProducts currentPage={currentPage} />
    </section>
  );
};

export default Products;
