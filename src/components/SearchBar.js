import React, { useState } from 'react';

const SearchBar = ({onChange}) => {

    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter some keywords to describe your meal"
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
}
 
export default SearchBar;