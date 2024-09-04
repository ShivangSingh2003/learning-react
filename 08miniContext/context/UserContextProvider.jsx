import React, { useState } from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return (
        <UserContext.provider value={{user, setUser}}>
            {children}
        </UserContext.provider>
    )
}

export default UserContextProvider