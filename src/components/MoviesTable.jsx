import React, { Component } from "react";
import Like from "./common/Like";

class MoviesTable extends Component {
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

  render() {
    const { movies, handleDelete, handleLiked } = this.props;
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => this.onSort("title")}>Title</th>
              <th onClick={() => this.onSort("genre.name")}>Genre</th>
              <th onClick={() => this.onSort("numberInStock")}>Stock</th>
              <th onClick={() => this.onSort("dailyRentalRate")}>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(m => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like liked={m.liked} handleLiked={() => handleLiked(m)} />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      handleDelete(m);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default MoviesTable;
