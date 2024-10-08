// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import type React from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import SwiperCard from "./SwiperCard";
import Xleb from "../../assets/SwiperImg/bread.webp";
import Arbuz from "../../assets/SwiperImg/watermelonWithMelon.webp";
import Dzin from "../../assets/SwiperImg/ginTonic.webp";
import Vipusk from "../../assets/SwiperImg/graduation.webp";
import Super from "../../assets/SwiperImg/superPrice.webp";
import Malina from "../../assets/SwiperImg/raspberry.webp";
import styles from "./SwiperSlider.module.scss";
import "swiper/css";

const SwiperSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={"auto"}
      navigation={{
        prevEl: `.prevSlide`,
        nextEl: ".nextSlide",
      }}
    >
      <button className={`${styles.slide} ${styles.prevSlide} prevSlide`}>
        <GoChevronLeft className={styles.prevArrow} />
      </button>
      <button className={`${styles.slide} ${styles.nextSlide} nextSlide`}>
        <GoChevronRight className={styles.nextArrow} />
      </button>
      <SwiperSlide className={styles.swiperSlide}>
        <SwiperCard img={Xleb} />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <SwiperCard img={Arbuz} />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <SwiperCard img={Malina} />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <SwiperCard img={Dzin} />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <SwiperCard img={Vipusk} />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <SwiperCard img={Super} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
