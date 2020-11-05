export const countFilteredTodos = (param, arr) => {
  const filteredList = arr.filter(el => el[param])
  return filteredList.length
}
