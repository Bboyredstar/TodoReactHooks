import React, { useContext } from 'react'
import styles from './FilterToggles.module.css'
import { ItemContext } from '../../context/ItemContext'

const FilterToggles = () => {
  const { dispatch } = useContext(ItemContext)
  return (
    <div className={styles.filterToggles}>
      <button
        type='button'
        className='btn btn-info'
        onClick={() => dispatch({ type: 'TOGGLE_ALL_BTN', payload: 'ALL' })}
      >
        All
      </button>
      <button
        type='button'
        className='btn btn-outline-secondary'
        onClick={() =>
          dispatch({ type: 'TOGGLE_ACTIVE_BTN', payload: 'ACTIVE' })
        }
      >
        Active
      </button>
      <button
        type='button'
        className='btn btn-outline-secondary'
        onClick={() => dispatch({ type: 'TOGGLE_DONE_BTN', payload: 'DONE' })}
      >
        Done
      </button>
    </div>
  )
}

export default FilterToggles
