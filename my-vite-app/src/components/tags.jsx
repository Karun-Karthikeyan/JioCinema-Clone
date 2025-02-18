import React from 'react';
import "../components/tags.css";

const Tags = () => {
  let tags = ["Action", "Drama", "Sci-fi", "Comedy", "Horror", "Thriller", "Fantasy", "Romance", "Animation", "Documentary","Mystery","Adventure","Crime"];
  return (
    <>
      <div className="tags">
        {tags.map((tag, index) => (
          <p key={index} className='tags-name'>{tag}</p>
        ))}
      </div>
    </>
  );
}

export default Tags;
