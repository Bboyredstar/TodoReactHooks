import React, { useContext, useEffect, useState } from 'react'
import TodoItem from '../TodoItem'
import { ItemContext } from '../../context/ItemContext'
import './TodoList.css'

const TodoList = () => {
  const {
    state: { todos, filter },
  } = useContext(ItemContext)

  return (
    <ul className='list-group todo-list'>
      {todos.map(({ id, ...otherItems }) => (
        <li className='list-group-item' key={id}>
          <TodoItem id={id} {...otherItems} />
        </li>
      ))}
    </ul>
  )
}

export default TodoList
