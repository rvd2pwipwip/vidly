import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, handlePageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  // const esPages = [...Array(pagesCount).keys()]; es6 array with keys

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(p => (
          <li
            key={p}
            className={currentPage === p ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => handlePageChange(p)}>
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
