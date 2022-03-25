import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

import ReactPaginate from 'react-paginate';

import './styles.css';

export const Pagination = () => {
    return(
        <ReactPaginate 
            pageCount={3}
            pageRangeDisplayed={3}
            containerClassName="pagination-container"
            pageLinkClassName="pagination-item"
            
            activeLinkClassName="pagination-item-active"
            previousLabel={
                <div><ArrowIcon /></div>
            }


            nextLabel={
                <div><ArrowIcon /></div>
            }

            nextClassName="arrow-next"
        />
    )
}