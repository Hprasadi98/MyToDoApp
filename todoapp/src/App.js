import React from 'react';
import './App.css';
import todo from './images/todo.png';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo'>
      <div className='header'>
      <p>To-Do List</p>
      <img src={todo} alt=''></img>
      
      </div>
      <TodoList/>
      
      
    </div>
  );
}
export default App;
