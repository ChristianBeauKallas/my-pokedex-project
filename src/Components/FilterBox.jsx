import React from 'react';
import Select from 'react-select';
import './FilterBox.css'; 

function FilterBox({ allTypes, allWeaknesses, selectedTypes, setSelectedTypes, selectedWeaknesses, setSelectedWeaknesses }) {

    const optionsFromList = (list) => list.map(item => ({ value: item, label: item }));

    const handleTypeChange = (selectedOptions) => {
        setSelectedTypes(selectedOptions.map(option => option.value));
    };

    const handleWeaknessChange = (selectedOptions) => {
        setSelectedWeaknesses(selectedOptions.map(option => option.value));
    };

    return (
        <div className='filterBox'>
            <h2>Filter By:</h2>
            <div className='filterContainer'>
                <div>
                    <h3>Type</h3>
                    <Select
                    isMulti
                    onChange={handleTypeChange}
                    options={optionsFromList(allTypes)}
                    />
                </div>
                <div>
                    <h3>Weakness</h3>
                    <Select
                    isMulti
                    onChange={handleWeaknessChange}
                    options={optionsFromList(allWeaknesses)}
                    />
                </div>
            </div>
        </div>
    );
    
}

export default FilterBox;

