import React from 'react';
import ToDoListItem from './todo-list-item';
import './todo-list.css';

const ToDoList = ({todos}) => {

    const elements = todos.map( (item) => {

        const  { id, ...itemProps} = item;

        return (
            <li key={id} className='list-group-item li-flex'>
                <ToDoListItem {...itemProps} />
                <div className="list-buttons">
                    <button type="button" className="btn btn-outline-danger">
                        <i className="fa fa-trash"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success">
                        <i className="fa fa-star"></i>
                    </button>
                </div>
            </li>
        );
    });

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
};

export default ToDoList;