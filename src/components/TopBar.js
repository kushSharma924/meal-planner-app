import React from 'react';
import logo from './images/logo.jpg';

const TopBar = () => {
    const title = 'Flavor Finder';
    const slogan = 'Find new recipes from any cuisine in seconds!'

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="top-bar">
            <div className="image">
            <button><img src = {logo} width = {115} height = {115} alt = "logo" onClick={refreshPage}/></button>
            </div>
            <h1>{ title }</h1>
            <p>{ slogan }</p>
        </div>
    );
}

export default TopBar;