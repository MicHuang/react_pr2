import React, {useState} from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import {v4 as uuid} from 'uuid';

import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: 'Take out the trash',
      completed: true
    }, {
      id: uuid(),
      title: 'Dinner with wife',
      completed: false
    }, {
      id: uuid(),
      title: 'Meeting with Boss',
      completed: false
    }
  ]);

  const markComplete = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }))
  };

  const deletItem = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    setTodos([
      newTodo, ...todos
    ]);
  }

  return (<div className="App">
    <div className='container'>
      <Header/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} markComplete={markComplete} deletItem={deletItem}/>
    </div>
  </div>);
}

export default App;
