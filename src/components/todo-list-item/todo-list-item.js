import React from 'react';
import './todo-list-item.css'

const ToDoListItem = ( {label, important = false } ) => {

    const style = {
        color: important ? 'red' : 'black'
    };

    return <span
        className='todo-list-item'
        style={style}>
            {label}
        </span>
};

export default ToDoListItem;