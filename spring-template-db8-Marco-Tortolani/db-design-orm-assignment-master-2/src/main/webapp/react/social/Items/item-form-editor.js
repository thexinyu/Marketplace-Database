import itemService from "./item-service"
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const ItemFormEditor = () => {
        const {id} = useParams()
        const [item, setItem] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findItemById(id)
                }
        }, []);
        const createItem = (item) =>
            itemService.createItem(item)
                .then(() => history.back())


        const findItemById = (id) =>
            itemService.findItemById(id)
                .then(item => setItem(item))

        const deleteItem = (id) =>
            itemService.deleteItem(id)
                .then(() => history.back())

        const updateItem = (id, newItem) =>
            itemService.updateItem(id, newItem)
                .then(() => history.back())


        return (
        <div>
            <h2>Item Editor</h2>
            <label>Id</label>
                <input value={item.id}/><br/>
                <label>Name</label>
                <input onChange={(e) =>
                    setItem(item =>
                        ({...item, name: e.target.value}))}
                                       value={item.name}/><br/>
                <label>Price</label>
                <input                 onChange={(e) =>
                    setItem(item =>
                        ({...item, price: e.target.value}))}
                                       value={item.price}/><br/>
                <label>Inventory</label>
                <input                 onChange={(e) =>
                    setItem(item =>
                        ({...item, inventory: e.target.value}))}
                                       value={item.inventory}/><br/>
                <label>Category</label>
                <input                 onChange={(e) =>
                    setItem(item =>
                        ({...item, category: e.target.value}))}
                                       value={item.category}/><br/>

                <label>Shop</label>
                <input                 onChange={(e) =>
                    setItem(item =>
                        ({...item, shop: e.target.value}))}
                                       value={item.shop}/><br/>




                <br/>
                <button
                    onClick={() => {
                            history.back()}}>
                        Cancel
                </button>
                <button
                    onClick={() => deleteItem(item.id)}>
                        Delete
                </button>

                <button
                    onClick={() => createItem(item)}>
                        Create
                </button>


                <button
                    onClick={() => updateItem(item.id, item)}>
                        Save
                </button>
<br/>
<br/>

<h5>Item's location </h5>
                <Link to={`/shops/${item.shop}`}>
                        ShopId where item is found : {item.shop}
                    </Link>




        </div>
    )
}

export default ItemFormEditor