import type React from "react";
import Products from "../../components/products/Products";
import SwiperSlider from "../../components/swiper/SwiperSlider";
import styles from "./Home.module.scss";
import { useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SwiperSlider />
      <Products />
    </>
  );
};

export default Home;
