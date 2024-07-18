import type React from "react";
import styles from "./Categories.module.scss";

const Categories: React.FC = () => {
  const categories = ["Все", "Хлеб", "Вода", "Молоко"];
  return (
    <ul className={styles.categories}>
      {categories.map((category, id) => (
        <li className={styles.category} key={id}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
