import React from "react";

const Like = props => {
  let classes = "fa fa-heart";
  return (
    <i
      className={props.liked ? classes : `${classes}-o`}
      aria-hidden="true"
      onClick={props.handleLiked}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
