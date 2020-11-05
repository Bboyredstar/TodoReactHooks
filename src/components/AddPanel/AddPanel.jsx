import React, { useContext, useRef } from 'react'
import styles from './AddPanel.module.css'
import cn from 'classnames'
import { ItemContext } from '../../context/ItemContext'

const AddPanel = () => {
  const { dispatch } = useContext(ItemContext)
  const inputEl = useRef(null)
  const onSubmit = e => {
    e.preventDefault()
    let inputValue = inputEl.current.value
    if (!!inputValue && inputValue.trim() !== '') {
      dispatch({ type: 'ADD_ITEM', payload: inputValue })
      inputEl.current.value = ''
    }
  }

  return (
    <form className={styles.addPanel} onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Input todo item '
        className={cn('form-control', styles.addInput)}
        ref={inputEl}
      />
      <button className={cn('btn', 'btn-outline-secondary')}>Add item</button>
    </form>
  )
}

export default AddPanel
