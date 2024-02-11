import React, { useState } from 'react';

const DropDown = ({ label, value, options }) => {
    return (
        <div className="drop-down">
            <label>
                {label}
                <select value={value}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
                </select>
            </label>
        </div>
    );
};

export default DropDown;