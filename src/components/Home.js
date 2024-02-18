import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import DropDown from './DropDown';

const Home = () => {

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
                    { label: 'Breakfast', value: 'breakfast' },
                    { label: 'Lunch', value: 'lunch' },
                    { label: 'Snack', value: 'snack' },
                    { label: 'Dinner', value: 'dinner' },
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
                    { label: 'American', value: 'american' },
                    { label: 'Asian', value: 'asian' },
                    { label: 'Indian', value: 'indian' },
                    { label: 'Middle Eastern', value: 'middle-eastern' },
                    { label: 'Mexican', value: 'mexican' },
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

            <button>Generate Recipes</button>
        </div>
    );
}
 
export default Home;