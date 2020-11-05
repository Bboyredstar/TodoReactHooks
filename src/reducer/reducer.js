import {
  updateLocalStorage,
  deleteItem,
  addItem,
  toggleProperty,
  initItems,
  searchItems,
} from '../helpers'

export const reducer = (state, action) => {
  const { id } = action.payload
  switch (action.type) {
    case 'ADD_ITEM':
      updateLocalStorage([...state.todos, addItem(action.payload)])
      return {
        ...state,
        todos: [...state.todos, addItem(action.payload)],
      }
    case 'DELETE_ITEM':
      return {
        ...state,
        todos: deleteItem(id, state.todos),
      }
    case 'TOGGLE_DONE':
    case 'TOGGLE_IMPORTANT':
      const { prop } = action.payload
      return {
        ...state,
        todos: toggleProperty(state.todos, id, prop),
      }
    case 'TOGGLE_ACTIVE_BTN':
      return {
        ...state,
        todos: initItems().filter(el => !el.done),
      }
    case 'TOGGLE_DONE_BTN':
      return {
        ...state,
        todos: initItems().filter(el => el.done),
      }
    case 'TOGGLE_ALL_BTN':
    case 'RESET':
      return {
        ...state,
        todos: initItems(),
      }
    case 'SEARCH':
      return {
        ...state,
        todos: searchItems(initItems(), action.payload),
      }
  }
}
