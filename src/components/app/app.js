import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import AddItem from '../add-item';

import './app.css'
import ItemStatusFilter from "../item-status-filter/item-status-filter";

export  default class App extends Component {

    maxId = 100;

    state = {
        todoData : [
            this.createToDOItem('DrinkCoffee'),
            this.createToDOItem('Drink Bear'),
            this.createToDOItem('Make dinner'),
            this.createToDOItem('Drink Milk')
        ],
        term: '',
        filter: 'all' // active, all, done
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

    search (items, term) {

        if ( term.length === 0) {
            return items;
        }

       return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        })
    };

    onSearchChange = (term) => {
        this.setState({ term });
    };


    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    };
    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    render () {

        const {todoData, term, filter} = this.state;

        const visibleItems = this.filter(
            this.search(todoData, term), filter) ;

        const doneCount = todoData.filter( (el) => el.done).length;
        const toDoCount = todoData.length - doneCount;

        return (
            <div className='content'>
                <AppHeader toDo={toDoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange = {this.onSearchChange} />
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
                <ToDoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem onAddItem={this.addItem}/>
            </div>
        );
    }


};
