const getItem = name => (localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : [])
const setItem = (name, values = []) => localStorage.setItem(name, JSON.stringify(values))
const removeItem = name => localStorage.removeItem(name)

export { getItem, setItem, removeItem }
