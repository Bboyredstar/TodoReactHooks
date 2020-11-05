import React, { useContext, useEffect, useState } from 'react'
import { ItemContext } from '../../context/ItemContext'
import InfoBar from '../InfoBar'
import styles from './AppHeader.module.css'
import { countFilteredTodos } from './filter'

const AppHeader = () => {
  const {
    state: { todos },
  } = useContext(ItemContext)
  const [done, setDone] = useState(0)
  const [todo, setTodo] = useState(0)

  useEffect(() => {
    setDone(countFilteredTodos('done', todos))
  }, [todos])
  useEffect(() => {
    setTodo(todos.length - done)
  }, [done, todos])

  return (
    <div className={styles.appHeader}>
      <h1 className='header'>ToDo List</h1>
      <InfoBar todo={todo} done={done} />
    </div>
  )
}

export default AppHeader
