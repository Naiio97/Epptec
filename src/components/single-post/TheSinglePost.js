import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../single-post/singlePost.css";

const TheSinglePost = () => {
  const [single, setSingle] = useState({});
  const [author, setAuthor] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts/" + path)
      .then((res) => setSingle(res.data))
      .catch((err) => console.error(err));

    axios("https://jsonplaceholder.typicode.com/users/" + path)
      .then((res) => setAuthor(res.data))
      .catch((err) => console.error(err));
  }, [path]);

  return (
    <div className="the-single-post">
      <Link to={"/"}> Back to main page</Link>
      <h1 className="single-title">{single.title}</h1>
      <Link to={"/"}> {author.name}</Link>
      <p className="single-text">
        Whole text <br />
        {single.body}
      </p>
      <h2 className="com-title">Comments</h2>
    </div>
  );
};

export default TheSinglePost;
