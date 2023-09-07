import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import todo from './images/todo.png';

function App() {
  return (
    <div className='todo'>
      <div className='header'>
      <p>To-Do List</p>
      <img src={todo} alt=''></img>
      
      </div>
      <TodoForm/>
      
      
    </div>
  );
}
export default App;
