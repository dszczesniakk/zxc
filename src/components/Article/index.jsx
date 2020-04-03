import React from 'react';

const Article = ({image, title, description, date}) => {
  return (
    <div className="article">
      <img src={image} alt="image"/>
      <div className="details">
        <p className="title">{title}</p>
        <p className="date">{date}</p>
        <div className="description">{description}</div>
      </div>
    </div>
  )
}

export default Article;