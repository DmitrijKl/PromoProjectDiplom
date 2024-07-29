import type React from "react";
import styles from "./ProductFull.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import type { ProductItem } from "../../Redux/productsSlice/productSlice";
import Rating from "@mui/material/Rating";
import { FaCartShopping } from "react-icons/fa6";
import { addItem } from "../../Redux/cartSlice/cartSlice";
import type { CartItem } from "../../Redux/cartSlice/cartSlice";
import { useAppDispatch } from "../../Redux/store";
import type { IRootState } from "../../Redux/store";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const ProductFull: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItem = useSelector((state: IRootState) =>
    state.cartSlice.items.find((item: CartItem) => item.id === id),
  );

  const [product, setProduct] = useState<ProductItem>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://663df0f4e1913c476795f5cc.mockapi.io/products/${id}`,
        );
        setProduct(data);
      } catch (error) {
        alert("Ошибка при получении продукта");
        navigate("/");
      }
    };
    fetchProduct();
  }, []);

  const onClickAdd = () => {
    if (cartItem) {
      dispatch(addItem({ id } as CartItem));
    } else {
      if (product) dispatch(addItem({ ...product, count: 0 }));
    }
  };

  if (!product) {
    return (
      <div className={styles.loading}>
        <CircularProgress />
        <h2>Загрузка...</h2>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.imgProduct}>
        <img src={product.img} alt="Not_found" />
      </div>
      <div className={styles.productDescription}>
        <h2>{product.description}</h2>
        <div className={styles.rating}>
          <Rating
            className={styles.starsRating}
            name="read-only"
            value={product.rating}
            precision={0.5}
            readOnly
          />
          <p>{product.rating}</p>
        </div>
        <div className={styles.cart}>
          <h4>{product.price} ₽</h4>
          <button onClick={onClickAdd} className={styles.addCart}>
            <FaCartShopping />В корзину
            <div className={styles.countProduct}>
              {cartItem?.count ? ` (${cartItem?.count} шт.)` : ""}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFull;
