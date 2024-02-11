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

    const handleFoodChange = (event) => {
        setFood(event.target.value);
    };

    const handleDrinkChange = (event) => {
        setDrink(event.target.value);
    };
    

    return (
        <div className="home">
            <SearchBar />
            <DropDown 
                label = "What do we eat?"
                options={[
                    { label: 'Fruit', value: 'fruit' },
                    { label: 'Vegetable', value: 'vegetable' },
                    { label: 'Meat', value: 'meat' },
                  ]}
                  value={food}
                  onChange={handleFoodChange}
            />
        </div>
    );
}
 
export default Home;