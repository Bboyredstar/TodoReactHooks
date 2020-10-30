import React from 'react';
import TodoItem from '../TodoItem';
import './TodoList.css';

const TodoList = ( { items,onDeleted,
                     onToggleImportant,
                     onToggleDone
                     } ) => {  
    return(
      <ul className='list-group todo-list'>
          {items.map(({id,...otherItems},index) => 
          <li className='list-group-item' key={id} >
            <TodoItem 
             { ...otherItems }
             onDeleted = { () => onDeleted(id) }
             onToggleImportant = { () => onToggleImportant(id)}
             onToggleDone = { () => onToggleDone(id)}
            />
          </li>)
          }
      </ul>);
  }

  export default TodoList;