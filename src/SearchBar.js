import React, { useState } from 'react';

const SearchBar = () => {

    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="What's on your plate today? (chicken and rice, steamed veggies, toast, etc)"
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
}
 
export default SearchBar;