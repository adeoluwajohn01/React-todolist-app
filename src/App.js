import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';

function App() {
  
  const[ListTodo, setListTodo] = useState([]);
  let addList = (inputText)=>{
    if(inputText !== '')
    setListTodo([...ListTodo,inputText]);
  }
  const deleteItem = (key)=>{
    let newListTodo = [...ListTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
 
  return (
    <div className="container">
      <div className="container2">
          <Input addList ={addList }/>
          <h3 className='head'>What Are You Doing Today?</h3>
          <hr/>
          {ListTodo.map((ListItem, i)=>{
            return (
              <List key={i} index={i} item={ListItem} delete = {deleteItem} />
            ) 
          })}
      </div>
    </div> 
  );
}

export default App;
