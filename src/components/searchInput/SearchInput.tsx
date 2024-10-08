import type React from "react";
import styles from "./SeatchInput.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../Redux/store";
import { setSearchValue } from "../../Redux/filterSlice/filterSlice";

const SearchInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputElement = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleClickForScroll = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };

  useEffect(() => {
    return () => {
      dispatch(setSearchValue(""));
    };
  }, [dispatch]);

  const clearInputValue = () => {
    setInputValue("");
    inputElement.current?.focus();
    dispatch(setSearchValue(""));
  };

  const debounce = (
    callBack: (searchValue: string) => void,
    delay: number = 300,
  ) => {
    let timeout: number;
    return (arg: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => callBack(arg), delay);
    };
  };

  const updateSeatchValue = useCallback(
    debounce((searchValue: string) => {
      dispatch(setSearchValue(searchValue));
    }, 300),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
    updateSeatchValue(event.target.value);
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
