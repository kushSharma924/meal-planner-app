import React from 'react';

const Card = ({ title, imageUrl, ingredients, link }) => {

    const listItems = ingredients.map((ingredient) =>
    <li key={ingredient}>
      {ingredient}
    </li>
  );

    return (
        <div className="card" style={{backgroundImage: `url(${imageUrl.url})`}}>
            <div className="card-content">
                <h3>{title}</h3>
                <ul>{listItems}</ul>
                <a href={link} target="_blank" rel="noopener noreferrer">View Recipe</a>
            </div>
        </div>
    );
}

export default Card;
