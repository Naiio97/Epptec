import React from "react";
import TheComment from "../comment/TheComment";

const TheComments = ({ comments }) => {
  return (
    <div className="the-comments">
      <div className="comments">
        {comments.map((comment, id) => (
          <TheComment key={id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default TheComments;
