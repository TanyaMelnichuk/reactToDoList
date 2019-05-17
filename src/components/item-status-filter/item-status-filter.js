import React, { Component } from 'react';
import './item-status-filter.css';


export default class ItemStatusFilter extends Component {

    render () {
        return (
            <div className='list-buttons'>
                <button type="button" className="btn btn-info">All</button>
                <button type="button" className="btn btn-outline-info">Active</button>
                <button type="button" className="btn btn-outline-info">Done</button>
            </div>
        )
    }

}

