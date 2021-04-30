import ShopList from "./shops/shop-list";
import ShopFormEditor from "./shops/shop-form-editor";
import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import ItemList from "./items/item-list";
import ItemFormEditor from "./items/item-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                                    <UserList/>
                                </Route>
                                <Route path="/users/:id" exact={true}>
                                    <UserFormEditor/>
                                </Route>
                <Route path={["/shops", "/"]} exact={true}>
                                    <ShopList/>
                                </Route>
                                <Route path="/shops/:id" exact={true}>
                                    <ShopFormEditor/>
                                </Route>
                <Route path={["/items", "/"]} exact={true}>
                                    <ItemList/>
                                </Route>
                                <Route path="/items/:id" exact={true}>
                                    <ItemFormEditor/>
                                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
