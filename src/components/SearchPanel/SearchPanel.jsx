import React, { useContext, useRef } from 'react'
import FilterToggles from '../FilterToggles'
import './SearchPanel.css'
import cn from 'classnames'
import { ItemContext } from '../../context/ItemContext'
import debounce from 'lodash.debounce'

const SearchPanel = () => {
  const { dispatch } = useContext(ItemContext)
  const inputRef = useRef(null)
  const searchAction = () => {
    let inputValue = inputRef.current.value
    dispatch({ type: 'SEARCH', payload: inputValue })
  }

  return (
    <div className={cn('search-panel')}>
      <input
        type='text'
        className={cn('form-control', 'search-input')}
        placeholder='search'
        onChange={debounce(searchAction, 500)}
        ref={inputRef}
      />
      <FilterToggles />
    </div>
  )
}

export default SearchPanel
