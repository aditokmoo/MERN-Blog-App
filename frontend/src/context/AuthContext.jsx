import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { useUsers } from "../hooks/useUsers";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AuthReducer, {
        user: null
    });
    const { usersData } = useUsers();

    // Side effect for getting data from localstorage and placing it to state
    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            dispatch({ type: 'LOGIN', payload: JSON.parse(user) })
        }
    }, [])

    // Side effect for getting all users
    useEffect(() => {
        console.log(usersData)
    }, [])

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
} 