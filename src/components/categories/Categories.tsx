import type React from "react";
import styles from "./Categories.module.scss";
import { useAppDispatch } from "../../Redux/store";
import { setCategoryName } from "../../Redux/filterSlice/filterSlice";

interface CategoriesProps {
  categoryName: string;
}

const Categories: React.FC<CategoriesProps> = ({ categoryName }) => {
  const categories = ["Все", "Хлеб", "Вода", "Молоко"];
  const dispatch = useAppDispatch();
  return (
    <ul className={styles.categories}>
      {categories.map((category, id) => (
        <li
          className={`${styles.category} ${categoryName === category ? styles.active : ""}`}
          key={id}
          onClick={() => dispatch(setCategoryName(category))}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
