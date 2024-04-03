import React from 'react';
import logo from './images/logo.jpg';

const TopBar = () => {
    const title = 'Flavor Finder';

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="top-bar">
            <div className="image">
            <button><img src = {logo} width = {115} height = {115} alt = "logo" onClick={refreshPage}/></button>
            </div>
            <h1>{ title }</h1>
        </div>
    );
}

export default TopBar;