import type React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.description}>
        К сожалению, данная страница не найдена, вы сможете найти вкусняшки в
        нашем каталоге
      </h2>
      <Link to="/">
        <div className={styles.backHome}>Каталог</div>
      </Link>
    </div>
  );
};

export default NotFound;
