import React from 'react';

const Card = ({ title, imageUrl, ingredients, link }) => {

    console.log(imageUrl);

    return (
        <div className="card" style={{backgroundImage: `url(${imageUrl.url})`}}>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{ingredients.join(', ')}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">View Recipe</a>
            </div>
        </div>
    );
}

export default Card;
