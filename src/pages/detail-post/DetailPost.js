import React, { useState, useEffect } from "react";
import axios from "axios";
import TheComments from "../../components/comments/TheComments";
import TheSinglePost from "../../components/single-post/TheSinglePost";

const DetailPost = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComments(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <TheSinglePost />
      <TheComments comments={comments} />
    </div>
  );
};

export default DetailPost;
