import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Authentication</h1>
      <Link to="/auth" ><button className="btn">Login</button></Link>
    </div>
  )
}

export default Home;
