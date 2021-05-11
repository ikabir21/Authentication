import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  return (
    <div className="container">
      <h1>You can see the posts here...</h1>
      <Link to="/" ><button className="btn">Back to homepage</button></Link>
    </div>
  )
}

export default Posts;
