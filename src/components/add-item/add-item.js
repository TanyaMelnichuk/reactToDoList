import React, { Component } from 'react';

import './add-item.css'

export  default class AddItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState( {
            label: ''
        })
    };

    render () {

        return (
            <form className='form-panel input-group' onSubmit={this.onSubmit}>
                <input type="text" placeholder="add new item" className="form-control" onChange={this.onLabelChange} value={this.state.label}/>
                <button type="button" className="btn btn-outline-warning" onClick={this.onSubmit}>Add</button>
            </form>
        );
    }

};
