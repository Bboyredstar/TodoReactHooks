import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';
import AddPanel from './components/AddPanel';
import { nanoid }from 'nanoid';

function App() {

  const initialState = () => {
    const todoItems = JSON.parse(localStorage.getItem('todos'))|| [
      {label:'learn React',id:'ln',important:false,done:false},
      {label:'practice React',id:'pr',important:false,done:false},
      {label:'create React app',id:'cr',important:false,done:false},
    ];
    return todoItems
  }

  const [todoItems,setItems] = useState( ()=>initialState());
    
   
    const updateLocalStorage = (item) => {
      const jsonTodoItems = JSON.stringify(item);
      localStorage.setItem('todos',jsonTodoItems);
    }

    const createTodoItem = (label) => {
        const id = nanoid(3);
        return {label,id, important:false,done:false};    
    }

    const findItemIndex = (id) => {
      return todoItems.findIndex((el) => el.id === id)
    }
    const deleteItem = id => {
      setItems( (todoItems) => {
        const indx = findItemIndex(id);
        const newTodoItems = [...todoItems.slice(0,indx),...todoItems.slice(indx+1)];
        updateLocalStorage(newTodoItems);
        return newTodoItems
      })
    }

    const addItem = label => {
      setItems( (todoIems) => {
        if (label.trim() !=='') {
          const item = createTodoItem(label);
          const newTodoItems = [...todoItems,item];
          updateLocalStorage(newTodoItems);
          return newTodoItems
        }
        return todoItems
      })
    }
     const toggleProperty = ( id,prop='done') => {
      const indx = findItemIndex(id);
      let oldItem = todoItems[indx];
      const newItem = {...oldItem, [prop]: !oldItem[prop]};
      const newTodoItems = [...todoItems.slice(0,indx),newItem,...todoItems.slice(indx+1)];
      return newTodoItems
     }

    const onToggleImportant = (id) => {
      setItems( (todoitems) => {
        const newItems = toggleProperty(id,'important')
        updateLocalStorage(newItems);
        return newItems
      })
    }

    const onToggleDone = (id) => {
      setItems( (todoitems) => {
        const newItems = toggleProperty(id);
        updateLocalStorage(newItems);
        return newItems
      })
    }

    return (
        <div className='container'>
          <AppHeader items= { todoItems }/>
          <SearchPanel />
          <TodoList
           items={ todoItems }
           onDeleted={ deleteItem } 
           onToggleImportant={ onToggleImportant }
           onToggleDone={ onToggleDone }/>
          <AddPanel onAdded={ addItem } />
        </div>
    );
}

export default App;