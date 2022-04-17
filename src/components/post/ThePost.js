import React from 'react';
import { Link } from 'react-router-dom';
import '../post/post.css';

const ThePost = ({ post }) => {

  return (
    <div className="the-post">
      <h1 className="post-title">{post.title}</h1>
      <Link to={"/"}>Author Name</Link>
      <p>{post.body}</p>
      <div className="footer-links">
        <Link to={`/post/${post.id}`}>Show more...</Link>
        <Link className="right-link" to={"/"}>Comments</Link>
      </div>
    </div> 
  );
};

export default ThePost;
