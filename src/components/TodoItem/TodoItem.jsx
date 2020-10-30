import React from 'react';
import styles from './TodoItem.module.css';
import cn from 'classnames';

const TodoItem = ( { label, important, 
                     done, onDeleted,
                     onToggleImportant,
                     onToggleDone} ) => {

    

    return (
      <div className={styles.todoListItem}>
        <span className={cn(styles.itemName,{[styles.done]:done,[styles.important]:important})}
            onClick={ onToggleDone }>
            { label }
            
        </span> 
        <button type="button"
            className={cn('btn', 'btn-outline-success' ,'btn-sm', 'float-right')}
          onClick={ onToggleImportant  }>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className={cn('btn', 'btn-outline-danger' ,'btn-sm', 'float-right')}
          onClick={ onDeleted }
          >
          <i className="fa fa-trash-o" />
        </button>
      </div>
		) 
};

export default TodoItem;  