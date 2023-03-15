import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalPages, handlePageClick }) => {
  return (
    <>
      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      )}
    </>
  );
};

export default Pagination;
