import React, { useContext } from 'react'
import styles from './TodoItem.module.css'
import { ItemContext } from '../../context/ItemContext'
import cn from 'classnames'

const TodoItem = ({ id, label, important, done }) => {
  const { dispatch } = useContext(ItemContext)
  return (
    <div className={styles.todoListItem}>
      <span
        className={cn(styles.itemName, {
          [styles.done]: done,
          [styles.important]: important,
        })}
        onClick={() =>
          dispatch({ type: 'TOGGLE_DONE', payload: { id, prop: 'done' } })
        }
      >
        {label}
      </span>
      <button
        type='button'
        className={cn('btn', 'btn-outline-success', 'btn-sm', 'float-right')}
        onClick={() =>
          dispatch({ type: 'TOGGLE_DONE', payload: { id, prop: 'important' } })
        }
      >
        <i className='fa fa-exclamation' />
      </button>

      <button
        type='button'
        className={cn('btn', 'btn-outline-danger', 'btn-sm', 'float-right')}
        onClick={() => dispatch({ type: 'DELETE_ITEM', payload: { id } })}
      >
        <i className='fa fa-trash-o' />
      </button>
    </div>
  )
}

export default TodoItem
