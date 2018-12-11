import React from "react";
import Like from "./common/Like";

const MoviesTable = props => {
  const { movies, handleDelete, handleLiked, handleSort } = props;
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort("title")}>Title</th>
            <th onClick={() => handleSort("genre.name")}>Genre</th>
            <th onClick={() => handleSort("numberInStock")}>Stock</th>
            <th onClick={() => handleSort("dailyRentalRate")}>Rate</th>
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
};

export default MoviesTable;
