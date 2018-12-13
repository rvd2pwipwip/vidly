import React, { Component } from "react";
import Like from "./common/Like";
import Table from "./common/Table";

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
    const { movies, handleSort, sortColumn } = this.props;
    return (
      <>
        <Table
          data={movies}
          handleSort={handleSort}
          sortColumn={sortColumn}
          columns={this.columns}
        />
      </>
    );
  }
}

export default MoviesTable;
