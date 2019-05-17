import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import AddItem from '../add-item';

import './app.css'

export  default class App extends Component {

    maxId = 100;

    state = {
        todoData : [
            this.createToDOItem('DrinkCoffee'),
            this.createToDOItem('Drink Bear'),
            this.createToDOItem('Make dinner'),
            this.createToDOItem('Drink Milk')
        ]
    };

    createToDOItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
       this.setState( ({ todoData }) => {
           const index = todoData.findIndex((el) => el.id === id);
           const newArray = [
               ...todoData.slice(0, index),
               ...todoData.slice(index + 1)
            ];

           return {
               todoData: newArray
           };
       })
    };

    addItem = (text) => {
        const newItem = this.createToDOItem(text);

        this.setState( ({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArray
            };
        });
    };


    toggleProperty(arr, id, propName) {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];
        const newItem = { ...oldItem, [propName]: !oldItem[propName]};
        return[
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
    }

    onToggleImportant = (id) => {

        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onToggleDone = (id) => {

        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }

        });
    };

    render () {

        const {todoData} = this.state;

        const doneCount = todoData.filter( (el) => el.done).length;
        const toDoCount = todoData.length - doneCount;

        return (
            <div className='content'>
                <AppHeader toDo={toDoCount} done={doneCount} />
                <SearchPanel />
                <ToDoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem onAddItem={this.addItem}/>
            </div>
        );
    }


};
