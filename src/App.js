import React, { useReducer } from 'react'
import AppHeader from './components/AppHeader'
import TodoList from './components/TodoList'
import SearchPanel from './components/SearchPanel'
import AddPanel from './components/AddPanel'
import { reducer } from './reducer/reducer.js'
import { ItemContext } from './context/ItemContext'
import { initialState } from './helpers'
function App() {
  const [state, dispatch] = useReducer(reducer, initialState())

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      <div className='container'>
        <AppHeader />
        <SearchPanel />
        <TodoList />
        <AddPanel />
      </div>
    </ItemContext.Provider>
  )
}

export default App
