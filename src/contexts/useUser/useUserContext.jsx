import React, { createContext, useEffect, useState } from "react"


export const UserProvider = createContext()

const UserContext = ({children}) => {
    
    const handleGetDefaultUser = (key) => {
        var newUser = window.localStorage.getItem(key)
        if(newUser){
            newUser = JSON.parse(newUser)
        }
        return newUser || null
    }

    const [userAdmin , setUserAdmin] = useState(handleGetDefaultUser('user-admin'))
    const [user , setUser] = useState(handleGetDefaultUser('user'))

    return(
        <UserProvider.Provider value={{user , userAdmin , setUserAdmin , setUser}}>
            {children}
        </UserProvider.Provider>
    )

}

export default UserContext