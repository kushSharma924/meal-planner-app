import React, { useState } from 'react';

const SearchBar = ({onChange, onEnter}) => {

    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        if (onChange) {
            onChange(value);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('Enter key pressed');
            onEnter();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter some keywords to describe your meal"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
}
 
export default SearchBar;