import React, { Component } from 'react';
import './todo-list-item.css';


export default class ToDoListItem extends Component {

    render () {

        const { label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

        let classNames = 'todo-list-item';

        if(done) {
            classNames += ' done';
        };

        if(important) {
            classNames += ' important';
        }



        return (
            <span className={classNames}>
                <span
                    className='todo-list-item-label'
                    onClick={onToggleDone}>
                      {label}
                </span>

                 <div className="list-buttons">
                    <button type="button" className="btn btn-outline-danger" onClick={onDeleted}>
                        <i className="fa fa-trash"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success" onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                </div>
            </span>
        )
    }
}

