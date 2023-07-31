import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';

const getlocalStorage = () => {
  let ListTodo = localStorage.getItem("ListTodo");
  if (ListTodo) {
    return (ListTodo = JSON.parse(localStorage.getItem("ListTodo")));
  } else {
    return [];
  }
};

function App() {
  
  const[ListTodo, setListTodo] = useState(getlocalStorage());
  let addList = (inputText)=>{
    if(inputText !== '')
    setListTodo([...ListTodo,inputText]);
  }
  const deleteItem = (key)=>{
    let newListTodo = [...ListTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  
  useEffect(() => {
    localStorage.setItem("ListTodo", JSON.stringify(ListTodo));
  }, [ListTodo]);

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
