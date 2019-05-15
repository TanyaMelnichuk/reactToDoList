import React from 'react';
import ItemStatusFilter from './components/item-status-filter';

import './search-panel.css'

const SearchPanel = () => {
    return (
        <div className='search-panel'>
            <input type="text" placeholder="search" />
            <ItemStatusFilter />
        </div>

    );
};


export default SearchPanel;