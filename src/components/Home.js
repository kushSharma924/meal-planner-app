import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DropDown from './DropDown';
import Card from './Card';

const Home = () => {

    const ID = process.env.REACT_APP_ID;
    const KEY = process.env.REACT_APP_KEY;

    let url = 'https://api.edamam.com/api/recipes/v2?type=public';
    url += '&app_id=' + ID;
    url += '&app_key=' + KEY;

    const [recipeTitles, setRecipeTitles] = useState([]);
    const [recipeImages, setRecipeImages] = useState([]);
    const [recipeIngredients, setRecipeIngredients] = useState([]);
    const [recipeLinks, setRecipeLinks] = useState([]);
    const [recipeIndexes, setRecipeIndexes] = useState([]);
    const [cards, setCards] = useState(false);

    const getRandomRecipes = async () => {
        const response = await fetch(url);
        const body = await response.json();
        const recipeData = body.hits.map(hit => hit.recipe);

        setRecipeTitles(recipeData.map(recipe => recipe.label));
        setRecipeImages(recipeData.map(recipe => recipe.images.REGULAR));
        setRecipeIngredients(recipeData.map(recipe => recipe.ingredientLines));
        setRecipeLinks(recipeData.map(recipe => recipe.shareAs));
        setRecipeIndexes(generateIndexes(recipeData.length));
        
        showCards();
    }

    const generateIndexes = (length) => {
        const randomNumbers = new Set();
        while (randomNumbers.size < 3) {
            const randomNumber = Math.floor(Math.random() * length);
            randomNumbers.add(randomNumber);
        }
        return Array.from(randomNumbers);
    }


    const buildURL = () => {
        let queryString = query === '' ? '' : `&q=${query}`;
        let dietString = diet === 'none' ? '' : `&health=${diet}`;
        let cuisineString = cuisine === 'none' ? '' : `&cuisineType=${cuisine}`;
        url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${ID}&app_key=${KEY}&ingr=${ingredients}${queryString}${dietString}${cuisineString}&mealType=${mealType}&time=${time}&random=true`;
    }

    const showCards = () => {
        setCards(true);
        setTitle('Refresh Recipes');
    }

    const [error, setError] = useState(false);

    const handleClick = async () => {
        buildURL();
        try {
            await getRandomRecipes();
        }
        catch(err) {
            setError(true)
        }
    }

    const [mealType, setMealType] = useState('breakfast');
    const [diet, setDiet] = useState('none');
    const [ingredients, setIngredients] =  useState('0-5');
    const [cuisine, setCuisine] = useState('none');
    const [time, setTime] = useState('10-20');
    const [query, setQuery] = useState('');
    const [title, setTitle] = useState('Generate Recipes');

    return (
        <div className="home">
            <SearchBar 
                onChange = {setQuery}
            />
            <DropDown 
                label = "What meal are you looking to eat?"
                options={[
                    { label: 'Breakfast', value: 'Breakfast' },
                    { label: 'Lunch', value: 'Lunch' },
                    { label: 'Dinner', value: 'Dinner' },
                  ]}
                  value={mealType}
                  onChange = {setMealType}
            />
            <br />

            <DropDown 
                label = "Do you have any dietary restrictions?"
                options={[
                    { label: 'None', value: 'none' },
                    { label: 'Keto', value: 'keto' },
                    { label: 'Vegetarian', value: 'vegetarian' },
                    { label: 'Vegan', value: 'vegan' },
                  ]}
                  value={diet}
                  onChange = {setDiet}
            />
            <br />

            <DropDown 
                label = "How many ingredients are you willing to work with?"
                options={[
                    { label: '0-5 ingredients', value: '0-5' },
                    { label: '5-10 ingredients', value: '5-10' },
                    { label: '10-20 ingredients', value: '10-20' },
                    { label: '20+ ingredients', value: '20+' },
                  ]}
                  value={ingredients}
                  onChange = {setIngredients}
            />
            <br />

            <DropDown 
                label = "What cuisine would you prefer?"
                options={[
                    { label: 'No Preference', value: 'none' },
                    { label: 'American', value: 'American' },
                    { label: 'Asian', value: 'Asian' },
                    { label: 'Mexican', value: 'Mexican' },
                  ]}
                  value={cuisine}
                  onChange = {setCuisine}
            />
            <br />

            <DropDown 
                label = "How much time are you willing to spend?"
                options={[
                    { label: '10-20 minutes', value: '10-20' },
                    { label: '20-40 minutes', value: '20-40' },
                    { label: '40-60 minutes', value: '40-60' },
                    { label: 'Over 60 minutes', value: '60+' },
                  ]}
                  value={time}
                  onChange = {setTime}
            />
            <button onClick = {handleClick}> {title} </button>
            {error && <p>Invalid Credentials</p>}
            {cards && (
                <div className="card">
                    {recipeIndexes.map((index) => (
                        <Card
                            key={index}
                            title={recipeTitles[index]}
                            imageUrl={recipeImages[index]}
                            ingredients={recipeIngredients[index]}
                            link={recipeLinks[index]}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
 
export default Home;