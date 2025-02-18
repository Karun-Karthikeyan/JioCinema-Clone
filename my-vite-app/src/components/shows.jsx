import React from "react";
import "../components/shows.css";
import Show from "../components/show.jsx";

const Shows = ({ title, movies }) => {
  return (
    <section className='shows'>
      <h1>{title}</h1>
      <div className="showsparent">
        {movies.map((movie, index) => (
          <Show key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Shows;
