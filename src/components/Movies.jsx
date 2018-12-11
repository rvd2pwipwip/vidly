import React, { Component } from "react";
import _ from "lodash";
import MoviesTable from "./MoviesTable";
import Pagination from "./common/Pagination";
import FilterGroup from "./common/FilterGroup";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { sort: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "AllGenres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sort => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.sort === sort) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.sort = sort;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.sort],
      [sortColumn.order]
    );

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <FilterGroup
            items={this.state.genres}
            handleItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {filteredMovies.length} movies in the database.</p>
          <MoviesTable
            movies={movies}
            handleDelete={this.handleDelete}
            handleLiked={this.handleLiked}
            handleSort={this.handleSort}
          />
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            handlePageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
