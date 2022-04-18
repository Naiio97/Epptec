import React from "react";
import "../comment/comment.css";

const TheComment = ({ comment }) => {
  return (
    <div className="the-comment">
      <h2 className="title-com">Comment title</h2>
      <span className="email">{comment.email}</span>
      <p className="com-text">
        Comment body <br />
        {comment.body}
      </p>
    </div>
  );
};

export default TheComment;
