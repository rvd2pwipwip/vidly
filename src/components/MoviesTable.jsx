import React, { Component } from "react";
import TableHeader from "./common/TableHeader";
import TableBody from "./common/TableBody";
import Like from "./common/Like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: m => (
        <Like liked={m.liked} handleLiked={() => this.props.handleLiked(m)} />
      )
    },
    {
      key: "delete",
      content: m => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            this.props.handleDelete(m);
          }}
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const {
      movies,
      handleDelete,
      handleLiked,
      handleSort,
      sortColumn
    } = this.props;
    return (
      <>
        <table className="table">
          <TableHeader
            columns={this.columns}
            sortColumn={sortColumn}
            handleSort={handleSort}
          />
          <TableBody data={movies} columns={this.columns} />
        </table>
      </>
    );
  }
}

export default MoviesTable;
