import React, { useState } from 'react';
import SearchBar from './SearchBar';
import DropDown from './DropDown';

const Home = () => {

    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
    };

    const [food, setFood] = React.useState('fruit');
    const [drink, setDrink] = React.useState('water');

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
                  value={food}
            />

            <DropDown 
                label = "Do you have any dietary restrictions?"
                options={[
                    { label: 'None', value: 'none' },
                    { label: 'Keto', value: 'keto' },
                    { label: 'Vegetarian', value: 'vegetarian' },
                    { label: 'Vegan', value: 'vegan' },
                  ]}
                  value={food}
            />

            <DropDown 
                label = "How many ingredients are you willing to work with?"
                options={[
                    { label: '0-5 ingredients', value: '0-5' },
                    { label: '5-10 ingredients', value: '5-10' },
                    { label: '10-20 ingredients', value: '10-20' },
                    { label: '20+ ingredients', value: '20+' },
                  ]}
                  value={food}
            />

            <DropDown 
                label = "What cuisine would you prefer?"
                options={[
                    { label: 'No Preference', value: 'none' },
                    { label: 'American', value: 'american' },
                    { label: 'Asian', value: 'asian' },
                    { label: 'Indian', value: 'indian' },
                    { label: 'Middle Eastern', value: 'middle eastern' },
                    { label: 'Mexican', value: 'mexican' },
                  ]}
                  value={food}
            />

            <DropDown 
                label = "How much time are you willing to spend?"
                options={[
                    { label: '10-20 minutes', value: '10-20' },
                    { label: '20-40 minutes', value: '20-40' },
                    { label: '40-60 minutes', value: '40-60' },
                    { label: 'Over 60 minutes', value: '60+' },

                  ]}
                  value={food}
            />

            <button>Generate Recipes</button>
        </div>
    );
}
 
export default Home;