import type React from "react";
import styles from "./header.module.scss";
import PromoLogo from "../../assets/PromoLogo.svg?react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, type IRootState } from "../../Redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addItemsFromLocalStorage } from "../../Redux/cartSlice/cartSlice";
import SearchInput from "../searchInput/SearchInput";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, CircularProgress } from "@mui/material";

const Header: React.FC = () => {
  const { items } = useSelector((state: IRootState) => state.cartSlice);
  const { logout, loginWithRedirect, isLoading, user } = useAuth0();

  const dispatch = useAppDispatch();
  const location = useLocation();
  const totalCount = items.reduce((sum: number, item) => {
    return sum + item.count;
  }, 0);

  useEffect(() => {
    const products = localStorage.getItem("cart");
    if (products) {
      dispatch(addItemsFromLocalStorage(JSON.parse(products)));
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem("cart", json);
  }, [items]);

  return (
    <header>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>
            <PromoLogo className={styles.logoSvg}></PromoLogo>
            <h2>Promo Delivery </h2>
          </div>
        </Link>
        {location.pathname === "/" && <SearchInput />}
        <div className={styles.cartAuthContainer}>
          {isLoading && (
            <CircularProgress size="25px" className={styles.loading} />
          )}
          {!isLoading && !user && (
            <button onClick={() => loginWithRedirect()} className={styles.Auth}>
              Log in
            </button>
          )}
          {!isLoading && user && (
            <div className={styles.userLogin}>
              <Avatar
                className={styles.userPhoto}
                alt="User Photo"
                src={user.picture}
              />
              <button onClick={() => logout()} className={styles.Auth}>
                Log out
              </button>
            </div>
          )}

          {location.pathname !== "/cart" && (
            <Link to="/cart" className={styles.cartBtn}>
              Корзина
              <div className={styles.cartBtn__razdel}></div>
              <div className={styles.cartBtn__amount}>{totalCount}</div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
