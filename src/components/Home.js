import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import DropDown from './DropDown';

const Home = () => {

    let url = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=b3790de0&app_key=01c4c2311660639bc36c94acfc136141';

    const getRandomRecipes = async () => {
        const response = await fetch(url);
        const body = await response.json();
        console.log(body);
    }

    const handleClick = () => {
        url += '&ingr=' + ingredients; // 10-20
        if (diet != 'none') {
            url += '&health=' + diet; // vegetarian
        }
        if (cuisine != 'none') {
            url += '&cuisineType=' + cuisine; // Asian
        }
        url += '&mealType=' + mealType; // Dinner
        url += '&time=' + time; // 10-20
        url += '&random=true';
        getRandomRecipes();

    }

    const [mealType, setMealType] = React.useState('breakfast');
    const [diet, setDiet] = React.useState('none');
    const [ingredients, setIngredients] =  React.useState('0-5');
    const [cuisine, setCuisine] = React.useState('none');
    const [time, setTime] = React.useState('10-20');

    useEffect(() => {
        console.log(
          'meal: ' + mealType + '\n' + 
          'diet: ' + diet + '\n' + 
          'ingredients: ' + ingredients + '\n' + 
          'cuisine: ' + cuisine + '\n' + 
          'time: ' + time
        );
    }, [time, mealType, diet, cuisine, ingredients])

    const handleCuisineChanges = (c) => {
        setCuisine(c);
    }

    const handleTimeChanges = (t) => {
        setTime(t);
    }

    const handleIngredientsChanges = (ing) => {
        setIngredients(ing);
    }

    const handleMealTypeChanges = (meal) => {
        setMealType(meal);
    };

    const handleDietChanges = (diet) => {
        setDiet(diet);
    }

    return (
        <div className="home">
            <SearchBar />
            <DropDown 
                label = "What meal are you looking to eat?"
                options={[
                    { label: 'Breakfast', value: 'Breakfast' },
                    { label: 'Lunch', value: 'Lunch' },
                    { label: 'Dinner', value: 'Dinner' },
                  ]}
                  value={mealType}
                  onChange = {handleMealTypeChanges}
            />

            <DropDown 
                label = "Do you have any dietary restrictions?"
                options={[
                    { label: 'None', value: 'none' },
                    { label: 'Keto', value: 'keto' },
                    { label: 'Vegetarian', value: 'vegetarian' },
                    { label: 'Vegan', value: 'vegan' },
                  ]}
                  value={diet}
                  onChange = {handleDietChanges}
            />

            <DropDown 
                label = "How many ingredients are you willing to work with?"
                options={[
                    { label: '0-5 ingredients', value: '0-5' },
                    { label: '5-10 ingredients', value: '5-10' },
                    { label: '10-20 ingredients', value: '10-20' },
                    { label: '20+ ingredients', value: '20+' },
                  ]}
                  value={ingredients}
                  onChange = {handleIngredientsChanges}
            />

            <DropDown 
                label = "What cuisine would you prefer?"
                options={[
                    { label: 'No Preference', value: 'none' },
                    { label: 'American', value: 'American' },
                    { label: 'Asian', value: 'Asian' },
                    { label: 'Mexican', value: 'Mexican' },
                  ]}
                  value={cuisine}
                  onChange = {handleCuisineChanges}
            />

            <DropDown 
                label = "How much time are you willing to spend?"
                options={[
                    { label: '10-20 minutes', value: '10-20' },
                    { label: '20-40 minutes', value: '20-40' },
                    { label: '40-60 minutes', value: '40-60' },
                    { label: 'Over 60 minutes', value: '60+' },
                  ]}
                  value={time}
                  onChange = {handleTimeChanges}
            />

            <button onClick = {handleClick}>Generate Recipes</button>
        </div>
    );
}
 
export default Home;