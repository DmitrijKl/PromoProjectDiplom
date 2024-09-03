import type React from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";
import { useAppDispatch } from "../../Redux/store";
import { setCurrentPage } from "../../Redux/filterSlice/filterSlice";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type PaginationProps = {
  currentPage: number;
};

const PaginationProducts: React.FC<PaginationProps> = ({ currentPage }) => {
  const dispatch = useAppDispatch();

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel={<MdKeyboardArrowRight className={styles.nextArrow} />}
      previousLabel={<MdKeyboardArrowLeft className={styles.prevArrow} />}
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default PaginationProducts;
