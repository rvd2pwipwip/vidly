import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";

class Movies extends Component {
  state = { movies: getMovies(), pageSize: 4 };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLiked = movie => {
    // 1. copy state
    const movies = [...this.state.movies];
    // 2. find movie index and update its liked property
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    // 3. update state
    this.setState({ movies });
  };

  handlePageChange = page => {
    console.log(page);
  };

  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(m => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={m.liked}
                    handleLiked={() => this.handleLiked(m)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      this.handleDelete(m);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          handlePageChange={this.handlePageChange}
        />
      </>
    );
  }
}

export default Movies;
