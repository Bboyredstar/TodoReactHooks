import { nanoid } from 'nanoid'
const updateLocalStorage = items => {
  const jsonTodoItems = JSON.stringify(items)
  localStorage.setItem('todos', jsonTodoItems)
}

const findItemIndex = (id, arr) => {
  return arr.findIndex(el => el.id === id)
}

const deleteItem = (id, arr) => {
  const indx = findItemIndex(id, arr)
  const newTodoItems = [...arr.slice(0, indx), ...arr.slice(indx + 1)]
  updateLocalStorage(newTodoItems)
  return newTodoItems
}

const addItem = label => {
  if (label !== '') {
    const item = createTodoItem(label)
    return item
  }
}

const createTodoItem = label => {
  const id = nanoid(3)
  return { label, id, important: false, done: false }
}

const toggleProperty = (arr, id, prop = 'done') => {
  const indx = findItemIndex(id, arr)
  let oldItem = arr[indx]
  const newItem = { ...oldItem, [prop]: !oldItem[prop] }
  const newTodoItems = [...arr.slice(0, indx), newItem, ...arr.slice(indx + 1)]
  updateLocalStorage(newTodoItems)
  return newTodoItems
}

const initItems = () => {
  const todoItems = JSON.parse(localStorage.getItem('todos')) || [
    { label: 'learn React', id: 'ln', important: false, done: false },
    { label: 'practice React', id: 'pr', important: false, done: false },
    { label: 'create React app', id: 'cr', important: false, done: false },
  ]
  return todoItems
}

const initialState = () => {
  return {
    todos: initItems(),
    filter: 'ALL',
  }
}

const searchItems = (arr, value) => {
  if (!!value && value.trim().length > 0) {
    return arr.filter(el =>
      el.label.toLowerCase().includes(value.toLowerCase())
    )
  }
  return arr
}

export {
  updateLocalStorage,
  findItemIndex,
  deleteItem,
  addItem,
  createTodoItem,
  toggleProperty,
  initialState,
  initItems,
  searchItems,
}
