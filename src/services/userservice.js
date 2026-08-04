import API from '../api/items'

export const getItems = () => API.get('/items')
export const addItemList = (item) => API.post('/items',item)
export const updateItem = (id,check) => API.put(`/items/${id}`,check)
export const deleteItem = (id) => API.delete(`/items/${id}`)