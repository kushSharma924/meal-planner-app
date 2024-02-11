import React, { useState } from 'react';

const DropDown = ({ label, value, options, onChange }) => {
    return (
        <div className="drop-down">
            <label>
                {label}
                <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
                </select>
            </label>
        </div>
    );
};

export default DropDown;