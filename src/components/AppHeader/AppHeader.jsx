import React from 'react'
import InfoBar from '../InfoBar'
import styles from './AppHeader.module.css'

const AppHeader = ( {items}) => {

    const countFilteredTodos = (param) => {
      const filteredList = items.filter( el=> el[param])
      return filteredList
    }
    const done = countFilteredTodos('done');
    const all = items.length
    let todo = all - done.length
    return (
      <div className={styles.appHeader}>
        <h1 className='header'>ToDo List</h1>
        <InfoBar todo={todo} done={ done.length }/>
      </div>
      );
}

export default AppHeader;