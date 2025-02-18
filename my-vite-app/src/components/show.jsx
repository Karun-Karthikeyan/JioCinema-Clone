import React from 'react';
import "../components/show.css";

const Show = ({ movie }) => {
  return (
    <div className="show">
      <img src={movie.imageURL} alt="" />
    </div>
  );
};

export default Show;
