// TODO: declare URL where server listens for HTTP requests
const SHOPS_URL = "http://localhost:8080/api/shops"

// TODO: retrieve all shops from the server
export const findAllShops = () =>
    fetch(SHOPS_URL)
        .then(response => response.json())


// TODO: retrieve a single shop by their ID
export const findShopById = (id) =>
    fetch(`${SHOPS_URL}/${id}`)
        .then(response => response.json())


// TODO: delete a shop by their ID
export const deleteShop = (id) =>
    fetch(`${SHOPS_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new shop
export const createShop = (shop) =>
    fetch(SHOPS_URL, {
        method: 'POST',
        body: JSON.stringify(shop),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a shop by their ID
export const updateShop = (id, shop) =>
    fetch(`${SHOPS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(shop),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllShops,
    findShopById,
    deleteShop,
    createShop,
    updateShop
}