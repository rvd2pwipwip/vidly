import React from "react";

const Like = ({ liked, handleLiked }) => {
  let classes = "fa fa-heart";
  return (
    <i
      className={liked ? classes : `${classes}-o`}
      aria-hidden="true"
      onClick={handleLiked}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
