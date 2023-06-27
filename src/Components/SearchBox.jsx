import React from 'react';
import './SearchBox.css';

function SearchBox({ search, setSearch }) {
    return (
        <div className='SearchBox'>
            <input 
            type="text" 
            placeholder="Search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        </div>
    );
}

export default SearchBox;
