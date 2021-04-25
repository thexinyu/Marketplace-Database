// TODO: declare URL where server listens for HTTP requests
const ITEMS_URL = "http://localhost:8080/api/items"

// TODO: retrieve all items from the server
export const findAllItems = () =>
    fetch(ITEMS_URL)
        .then(response => response.json())


// TODO: retrieve a single item by their ID
export const findItemById = (id) =>
    fetch(`${ITEMS_URL}/${id}`)
        .then(response => response.json())


// TODO: delete a item by their ID
export const deleteItem = (id) =>
    fetch(`${ITEMS_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new item
export const createItem = (item) =>
    fetch(ITEMS_URL, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a item by their ID
export const updateItem = (id, item) =>
    fetch(`${ITEMS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllItems,
    findItemById,
    deleteItem,
    createItem,
    updateItem
}