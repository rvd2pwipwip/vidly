import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <>
      <h1>Movie Form</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </>
  );
};

export default MovieForm;
