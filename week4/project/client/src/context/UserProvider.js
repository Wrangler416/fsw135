import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext();

var Consumer = UserContext.Consumer
export {Consumer}

console.log(UserContext)

const initState = {
    user: {}, 
    token: "", 
    comments: []
}

export default function UserProvider(props){

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    function login(credentials) {
        axios.post("/auth/login", credentials)
        .then(res => console.log(res))
        .catch(err => (console.log(err)))
    }

    return (
<UserContext.Provider
value={{
    ...userState, 
    signup,
    login
    }}>
    {props.children}
</UserContext.Provider>
    )
}

