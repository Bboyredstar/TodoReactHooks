import React, { useState } from 'react';
import styles from './AddPanel.module.css';
import cn from 'classnames';

const AddPanel = ( {onAdded} ) => {
  const [inputValue,setValue] = useState('');

  
  const inputHandler = (e) => {
    const input = e.target;
    let value = input.value.toLowerCase();
    setValue(value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onAdded(inputValue);
    setValue('');
  }
    
  
  return (
    <form className={styles.addPanel}
    onSubmit = { (e) => onSubmit(e) } >
      <input type='text' 
        placeholder='Input todo item '
        className={cn('form-control',styles.addInput)}
        onChange = { e => inputHandler(e) }
        value={inputValue}/>
      <button className={cn('btn', 'btn-outline-secondary')}>Add item</button>
    </form>)
}

export default AddPanel;