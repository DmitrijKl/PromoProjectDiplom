import React from "react";
import { cartSelector } from "../../Redux/cartSlice/cartSelectors";
import CartItem from "../../components/cartItem/CartItem";
import CartEmpty from "../../components/cartEmpty/CartEmpty";
import styles from "./Cart.module.scss";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { clearItems } from "../../Redux/cartSlice/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoBackspaceSharp } from "react-icons/io5";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { setError } from "../../Redux/errorSlice/errorSlice";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useAppSelector(cartSelector);
  const [errorAuth, setErrorAuth] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  const totalCount = items.reduce((sum: number, item) => {
    return sum + item.count;
  }, 0);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    dispatch(clearItems());
  };

  const fetchPostOrder = async () => {
    try {
      const responce = await axios.post(
        `https://promodelivery-b94a3-default-rtdb.firebaseio.com/orders.json`,
        {
          Products: items,
          TotalPriceOrder: +totalPrice.toFixed(2),
          userName: user?.name,
          date: new Date().toLocaleString(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (responce.statusText === "OK") {
        handleClickOpenDialog();
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }
  };

  const submitOrderHandler = () => {
    if (isAuthenticated) {
      fetchPostOrder();
    } else {
      setErrorAuth(true);
    }
  };

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
      <div className={styles.cartOrder}>
        <Link to="/">
          <button className={styles.backHome}>
            <IoBackspaceSharp className={styles.iconBack} />
            Вернуться назад
          </button>
        </Link>
        <button onClick={submitOrderHandler} className={styles.btnOrder}>
          Оформить заказ
        </button>
      </div>
      {errorAuth && (
        <p className={styles.notAuth}>
          <span
            className={styles.btnAuth}
            onClick={() => {
              loginWithRedirect();
            }}
          >
            Авторизуйтесь
          </span>{" "}
          для того чтобы сделать заказ.
        </p>
      )}
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Уважаемый ${user?.nickname}!`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Спасибо за ваш заказ. Мы надеемся вскоре увидеть вас снова!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            Закрыть окно
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
