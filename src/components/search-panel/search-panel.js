import React from 'react';
import './search-panel.css'
import ItemStatusFilter from "../item-status-filter";

const SearchPanel = () => {
    return (
        <div className='form-panel'>
            <input type="text" placeholder="search" />
            <ItemStatusFilter />
        </div>

    );
};


export default SearchPanel;