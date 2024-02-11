import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Home = () => {

const [query, setQuery] = useState('');

const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
};
    

    return (
        <div className="home">
            <SearchBar />
            
        </div>
    );
}
 
export default Home;