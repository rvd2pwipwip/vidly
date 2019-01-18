import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  doSubmit = () => {
    // Call the server
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    const { match, history } = this.props;
    return (
      <>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text", true)}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
        {/* <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button> */}
      </>
    );
  }
}

export default MovieForm;

// const MovieForm = ({ match, history }) => {
//   return (
//     <>
//       <h1>Movie Form</h1>
//       <button
//         className="btn btn-primary"
//         onClick={() => history.push("/movies")}
//       >
//         Save
//       </button>
//     </>
//   );
// };

// export default MovieForm;
