import React from 'react';
import logo from './images/logo.jpg';

const TopBar = () => {
    const title = 'Flavor Finder';

    return (
        <div className="top-bar">
            <div className="image">
                <img src = {logo} width = {125} height = {125} alt = "logo" /> 
            </div>
            <h1>{ title }</h1>
        </div>
    );
}

export default TopBar;