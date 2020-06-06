import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About'
// import {v4 as uuid} from 'uuid';
import axios from 'axios';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(res => setTodos(res.data))
  }, []);

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
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    }).then(res => setTodos([
      res.data, ...todos
    ]));
  }

  return (<Router>
    <div className="App">
      <div className='container'>
        <Header/>
        <Route exact={true} path="/" render={props => (<React.Fragment>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} markComplete={markComplete} deletItem={deletItem}/>
          </React.Fragment>)}/>
        <Route path="/about" component={About}/>
      </div>
    </div>
  </Router>);
}

export default App;
