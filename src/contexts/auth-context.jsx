import React, { useState, createContext ,useEffect} from 'react'

import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export const AuthContext = createContext();



function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [authState, setAuthState] = useState();

    useEffect(() => {
        onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData);
        });
    }, []);

    function setUserFunc(userValue) {
        console.log(userValue)
        setUser(userValue)
    }


    const contextValue = {
        user,
        setUser:setUserFunc,
        setAuthState,
        authState,
    }

    return (
        <AuthContext.Provider value={ contextValue } >
            {children}
        </ AuthContext.Provider>
    )
}

export default AuthContextProvider
