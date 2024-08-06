import { useEffect, useRef } from "react";
import styles from "./Products.module.scss";
import type React from "react";
import Product from "./Product";
import { fetchProducts } from "../../Redux/productsSlice/productSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import Categories from "../categories/Categories";
import SceletonProduct from "../sceletonProduct/SceletonProduct";
import PaginationProducts from "../Pagination/Pagination";
import { filterSliceState } from "../../Redux/filterSlice/filterSelectors";
import { productSliceState } from "../../Redux/productsSlice/productsSelectors";
import { useNavigate } from "react-router-dom";
import qs from "qs";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isMounted = useRef(false);

  const { items: products, status } = useAppSelector(productSliceState);

  const { currentPage, categoryName, searchValue } =
    useAppSelector(filterSliceState);

  useEffect(() => {
    dispatch(fetchProducts({ currentPage, categoryName, searchValue }));
  }, [currentPage, categoryName, searchValue]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryName,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryName, searchValue, currentPage]);

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
