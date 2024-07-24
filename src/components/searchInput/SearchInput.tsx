import type React from "react";
import styles from "./SeatchInput.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { useRef, useState } from "react";

const SearchInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputElement = useRef<HTMLInputElement>(null);

  const handleClickForScroll = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };

  const clearInputValue = () => {
    setInputValue("");
    inputElement.current?.focus();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <div onClick={handleClickForScroll} className={styles.inputIcon}>
        <AiFillProduct className={styles.Icon} />
        <h3>Каталог</h3>
      </div>
      <input
        ref={inputElement}
        onChange={(event) => onChangeInput(event)}
        value={inputValue}
        placeholder="Поиск по каталогу"
        type="text"
      />
      <IoCloseOutline onClick={clearInputValue} className={styles.clearInput} />
    </div>
  );
};

export default SearchInput;
