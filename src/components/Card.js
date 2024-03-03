import React from 'react';

const Card = ({ title, imageUrl, ingredients, link }) => {
    return (
        <div className="card" style={{backgroundImage: `url(${imageUrl})`}}>
            <h3>{title}</h3>
            <p>{ingredients.join(', ')}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Recipe</a>
        </div>
    );
}

export default Card;