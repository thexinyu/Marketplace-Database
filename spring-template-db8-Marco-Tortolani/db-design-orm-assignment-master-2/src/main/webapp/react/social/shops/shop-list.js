const {Link, useHistory} = window.ReactRouterDOM;

import shopService from "./shop-service"
const { useState, useEffect } = React;
const ShopList = () => {
    const [shops, setShops] = useState([])
    useEffect(() => {
        findAllShops()
    }, [])

    const findAllShops = () =>
        shopService.findAllShops()
            .then(shops => setShops(shops))

    const history = useHistory()

    return(
        <div>
            <h2>Shop List</h2>
            <button onClick={() => history.push("/shops/new")}>
                Add Shop
            </button>

            <ul className="list-group">
                {
                    shops.map(shop =>
                        <li key={shop.id}>
                            <Link to={`/shops/${shop.id}`}>
                            {shop.shopName}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ShopList;