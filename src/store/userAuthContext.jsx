import React, { useState } from "react";
import { logout } from "../firebase/config";




export const AuthContext = React.createContext();

export function Context({children}) {
    const [user , setUser] = useState(null);
    

    const handleLogout = () => {
        
        setUser(null);
        logout();
       
    };

    return (
        <AuthContext.Provider value={{user , setUser , handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}