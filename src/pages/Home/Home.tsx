import type React from "react";
import Products from "../../components/products/Products";
import SwiperSlider from "../../components/swiper/SwiperSlider";
import styles from "./Home.module.scss";
import { useEffect } from "react";
import img from "../../assets/КомандаPromo.png";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SwiperSlider />
      <Products />
      <img
        style={{ objectFit: "cover", width: "100%" }}
        src={img}
        alt="Not_fOUND"
      />
    </>
  );
};

export default Home;
