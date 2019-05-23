import React, {Component} from 'react';
import './search-panel.css'
import ItemStatusFilter from "../item-status-filter";

export default class SearchPanel extends Component{

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render () {
        return (
            <div className='form-panel'>
                <input type="text" placeholder="search" onChange={this.onSearchChange} value={this.state.term}/>
            </div>

        );
    }

};


