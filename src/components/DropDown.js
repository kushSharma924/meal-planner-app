import React, { useState } from 'react';

const DropDown = ({ label, value, options }) => {

    const [selectedOption, setSelectedOption] = useState(value);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        console.log(selectedValue);
    };

    return (
        <div className="drop-down">
            <label>
                {label}
                <select
                    value={selectedOption} 
                    onChange={handleChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                ))}
                </select>
            </label>
        </div>
    );
};

export default DropDown;