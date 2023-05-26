import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AuthReducer, {
        user: null
    });

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(user) {
            dispatch({ type: 'LOGIN', payload: JSON.parse(user) })
        }
    }, [])

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
} 