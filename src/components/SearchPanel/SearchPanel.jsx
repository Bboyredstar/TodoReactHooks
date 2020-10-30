import React from 'react';
import FilterToggles from '../FilterToggles';
import './SearchPanel.css'
import cn from 'classnames'

const SearchPanel = () => {
    return ( 
    <div className={cn('search-panel')}>
        <input type='text' 
        className={cn('form-control','search-input')} 
        placeholder='search' />
		<FilterToggles />
    </div>
    )
}

export default SearchPanel;