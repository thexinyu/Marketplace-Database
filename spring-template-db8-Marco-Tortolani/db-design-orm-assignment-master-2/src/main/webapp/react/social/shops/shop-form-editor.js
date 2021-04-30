import shopService from "./shop-service"

import itemService from "./item-service"


const {useParams, useHistory, Link} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const ShopFormEditor = () => {
        const {id} = useParams()
        const [shop, setShop] = useState({items: []})
        useEffect(() => {
                if(id !== "new") {
                        findShopById(id)
                        fetch(`http://localhost:8080/api/shops/${id}/items`)
                        .then(response => response.json())
                        .then(items => setShop(oldShop => ({...oldShop, items: items})))
                }
        }, []);

        const createShop = (shop) =>
            shopService.createShop(shop)
                .then(() => history.back())


        const findShopById = (id) =>
            shopService.findShopById(id)
                .then(shop => setShop(shop))

        const deleteShop = (id) =>
            shopService.deleteShop(id)
                .then(() => history.back())

        const updateShop = (id, newShop) =>
            shopService.updateShop(id, newShop)
                .then(() => history.back())


        return (
        <div>
            <h2>Shop Editor</h2>



            <label>Id</label>
                {' '} {' '} {' '} {shop.id} <br/>

                <label>Shop Name</label>
                <input onChange={(e) =>
                    setShop(shop =>
                        ({...shop, shopName: e.target.value}))}
                                       value={shop.shopName}/><br/>
                <br/>
                <button
                    onClick={() => {
                            history.back()}}>
                        Cancel
                </button>
                <button
                    onClick={() => deleteShop(shop.id)}>
                        Delete
                </button>

                <button
                    onClick={() => createShop(shop)}>
                        Create
                </button>


                <button
                    onClick={() => updateShop(shop.id, shop)}>
                        Save
                </button>



<h5>Shop's Items</h5>

{
                shop.items &&
                <ul>
                    {
                        shop.items.map(item =>
                        <li>
                            <Link to={`/items/${item.id}`}>
                            {item.name}
                            </Link>
                        </li>
                        )
                    }
                </ul>
            }

        </div>


    )

}

export default ShopFormEditor