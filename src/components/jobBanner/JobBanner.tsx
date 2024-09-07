import type React from "react";
import img from "../../assets/teamPromo.png";
import styles from "./JobBanner.module.scss";

const JobBanner: React.FC = () => {
  return (
    <section className={styles.jobBanner}>
      <div className={styles.description}>
        <h2 className={styles.jobTitle}>Работа в «Promo»</h2>
        <p className={styles.jobSubtitle}>
          Делай то, что любишь, люби то, что делаешь! Стань частью большой
          команды.
        </p>
        <a
          className={styles.jobLink}
          href="https://promo-z.ru/vacancies"
          target="blank"
        >
          Найти вакансию
        </a>
      </div>
      <div className={styles.jobImg}>
        <img src={img} alt="Not_found" />
      </div>
    </section>
  );
};

export default JobBanner;
