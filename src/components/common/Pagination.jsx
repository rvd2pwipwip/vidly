import React from "react";
import _ from "lodash";

const Pagination = props => {
  // [1, 2, 3].map(p => <li>)
  const { itemsCount, pageSize } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  // const esPages = [...Array(pagesCount).keys()]; es6 array with keys

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(p => (
          <li key={p} className="page-item">
            <a className="page-link" href="#">
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
