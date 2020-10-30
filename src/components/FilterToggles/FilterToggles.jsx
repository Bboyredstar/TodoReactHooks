import React from 'react';
import styles from './FilterToggles.module.css'
const FilterToggles = () => {
  return (
    <div className={styles.filterToggles}>
        <button type='button'
           className='btn btn-info'>All</button>
        <button type='button'
           className='btn btn-outline-secondary'>Active</button>
        <button type='button'
           className='btn btn-outline-secondary'>Done</button>
    </div>
  )
}

export default FilterToggles;