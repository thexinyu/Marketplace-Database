const {Link, useHistory} = window.ReactRouterDOM;

import itemService from "./item-service"
const { useState, useEffect } = React;
const ItemList = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        findAllItems()
    }, [])

    const findAllItems = () =>
        itemService.findAllItems()
            .then(items => setItems(items))

    const history = useHistory()

    return(
        <div>
            <h2>Item List</h2>
            <button onClick={() => history.push("/items/new")}>
                Add Item
            </button>

            <ul className="list-group">
                {
                    items.map(item =>
                        <li key={item.id}>
                            <Link to={`/items/${item.id}`}>
                            {item.name},
                            {item.inventory},
                            {item.category}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ItemList;