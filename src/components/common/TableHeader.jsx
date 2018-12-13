import React, { Component } from "react";

//columns: array
//sortColumn: object
//handleSort: function

class TableHeader extends Component {
  onSort = sort => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.sort === sort) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.sort = sort;
      sortColumn.order = "asc";
    }
    this.props.handleSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.sort || !column.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(c => (
            <th
              key={c.path || c.key}
              onClick={() => this.onSort(c.path)}
              className="clickable"
            >
              {c.label} {this.renderSortIcon(c)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
