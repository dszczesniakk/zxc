import React from 'react';

const Article = ({image, title, description, date}) => {
  return (
    <div className="article">
      {
        image
          ? <div className="image" style={{ backgroundImage: `url(${image})`}} />
          : <div className="image"><img alt='image'/></div>
      }
      <div className="details">
        <p className="title">{title}</p>
        <p className="date">{date}</p>
        <div className="description">{description}</div>
      </div>
    </div>
  )
}

export default Article;