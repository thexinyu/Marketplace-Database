import userService from "./user-service"
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const UserFormEditor = () => {
        const {id} = useParams()
        const [user, setUser] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findUserById(id)
                }
        }, []);
        const createUser = (user) =>
            userService.createUser(user)
                .then(() => history.back())


        const findUserById = (id) =>
            userService.findUserById(id)
                .then(user => setUser(user))

        const deleteUser = (id) =>
            userService.deleteUser(id)
                .then(() => history.back())

        const updateUser = (id, newUser) =>
            userService.updateUser(id, newUser)
                .then(() => history.back())


        return (
        <div>
            <h2>User Editor</h2>

            <label>Id</label>
                {' '} {' '} {' '} {user.id} <br/>


                <label>First Name</label>
                <input onChange={(e) =>
                    setUser(user =>
                        ({...user, firstName: e.target.value}))}
                                       value={user.firstName}/><br/>
                <label>Last Name</label>
                <input                 onChange={(e) =>
                    setUser(user =>
                        ({...user, lastName: e.target.value}))}
                                       value={user.lastName}/><br/>
                <label>Username</label>
                <input                 onChange={(e) =>
                    setUser(user =>
                        ({...user, username: e.target.value}))}
                                       value={user.username}/><br/>
                <label>Password</label>
                <input                 onChange={(e) =>
                    setUser(user =>
                        ({...user, password: e.target.value}))}
                                       value={user.password}/><br/>

                <label>Email</label>
                <input                 onChange={(e) =>
                    setUser(user =>
                        ({...user, email: e.target.value}))}
                                       value={user.email}/><br/>

                <label>Phone</label>
                <input                 onChange={(e) =>
                    setUser(user =>
                        ({...user, phone: e.target.value}))}
                                       value={user.phone}/><br/>

                <label>Shop</label>
                                <input onChange={(e) =>
                                    setUser(user =>
                                        ({...user, shop: e.target.value}))}
                                                       value={user.shop}/><br/>


                <br/>
                <button
                    onClick={() => {
                            history.back()}}>
                        Cancel
                </button>
                <button
                    onClick={() => deleteUser(user.id)}>
                        Delete
                </button>

                <button
                    onClick={() => createUser(user)}>
                        Create
                </button>


                <button
                    onClick={() => updateUser(user.id, user)}>
                        Save
                </button>


                <br/>
                <br/>

                <h5>Account's shops</h5>
                               <Link to={`/shops/${user.shop}`}>
                                       Shop where user is signed up : {user.shop}
                                   </Link>

                        </div>


    )
}

export default UserFormEditor