import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

import ReactPaginate from 'react-paginate';

import './styles.css';

type Props = {
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
};

export const Pagination = ({ pageCount, range, onChange }: Props) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={range}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      activeLinkClassName="pagination-item-active"
      previousLabel={
        <div>
          <ArrowIcon />
        </div>
      }
      nextLabel={
        <div>
          <ArrowIcon />
        </div>
      }
      nextClassName="arrow-next"
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
    />
  );
};
