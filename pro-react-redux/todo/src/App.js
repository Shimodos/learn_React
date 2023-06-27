import React, { Component } from 'react';

import ToDoList from './components/todo-list/todo-list';
import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';

import './index.css';

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Build React App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}
