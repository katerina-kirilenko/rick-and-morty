import React, { ReactElement } from 'react';
import ReactPagination from 'react-paginate';
import { PaginationType } from './types';
import { useClasses } from './styles';

const Pagination = ({
  pageCount,
  marginPagesDisplayed,
  pageRangeDisplayed,
  initialPage,
  onPageChange,
}: PaginationType): ReactElement => {
  const classes = useClasses();

  return (
    <ReactPagination
      previousLabel={'< prev'}
      nextLabel={'next >'}
      breakLabel={'...'}
      breakClassName={classes.paginationItem}
      breakLinkClassName={classes.paginationItemLink}
      pageClassName={classes.paginationItem}
      pageLinkClassName={classes.paginationItemLink}
      activeClassName={classes.current}
      previousClassName={classes.paginationItem}
      nextClassName={classes.paginationItem}
      previousLinkClassName={classes.paginationItemLink}
      nextLinkClassName={classes.paginationItemLink}
      containerClassName={classes.pagination}
      disabledClassName={classes.inactive}
      pageCount={pageCount}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onPageChange}
      initialPage={initialPage}
    />
  );
};

export default Pagination;
