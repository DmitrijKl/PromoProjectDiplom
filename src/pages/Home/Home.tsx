import Products from "../../components/products/Products";
import SwiperSlider from "../../components/swiper/SwiperSlider";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <SwiperSlider />
      <Products />
    </>
  );
};

export default Home;
