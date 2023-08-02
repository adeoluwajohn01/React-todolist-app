import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import storage from './libs/storage';
import { todosKey } from './utils/constants';
import { getUniqid } from './utils/helpers';
import TodoItem from './components/TodoItem';

/**
 * @typedef  {{
 *   id: string;
 *   content: string;
 *   done: boolean;
 * }} Todo
 */

/**
 *
 * @returns {Array<Todo>}
 */

const getLocallySavedTodos = () => {
  const savedData = storage.get(todosKey);
  if (savedData) {
    return savedData;
  }
  return [];
};

function App() {
  const savedTodos = getLocallySavedTodos();
  const [todos, setTodos] = useState([...savedTodos]);

  let addList = (inputText) => {
    if (inputText !== '') {
      const newId = getUniqid();
      setTodos((d) => [
        ...d,
        {
          id: newId,
          content: inputText,
          done: false,
        },
      ]);
    }
  };

  const deleteItem = React.useCallback(
    (id) => {
      let newListTodo = [...todos];
      const indexOfTodo = todos.findIndex((d) => d.id === id);
      newListTodo.splice(indexOfTodo, 1);

      setTodos([...newListTodo]);
    },
    [todos]
  );

  const toggleItemStatus = React.useCallback(
    (id) => {
      let newListTodo = [...todos];
      const currentTodo = newListTodo.find((d) => d.id === id);
      if (currentTodo) {
        currentTodo.done = !currentTodo.done;
        setTodos([...newListTodo]);
      }
    },
    [todos]
  );

  useEffect(() => {
    storage.set(todosKey, todos);
  }, [todos]);

  return (
    <div className='container'>
      <div className='container2'>
        <Input addList={addList} />
        <h3 className='head'>What Are You Doing Today?</h3>
        <hr />
        {todos.map((todoItem, i) => {
          return (
            <>
              <TodoItem
                key={i}
                item={todoItem}
                remove={() => deleteItem(todoItem.id)}
                toggle={() => toggleItemStatus(todoItem.id)}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
