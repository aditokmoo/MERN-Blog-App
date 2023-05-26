import { useState } from "react"
import { useNavigate } from "react-router";
import { useAuthContext } from "./useAuthContext";
import { toast } from "react-toastify";

export const useLogin = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const { dispatch } = useAuthContext();

    const navigate = useNavigate();

    const login = async (username, password) => {
        setIsLoading(true)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();

        if(!response.ok) {
            setIsLoading(false)
            toast.error(data.error, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        }

        if(response.ok) {
            // Store user to localStorage
            localStorage.setItem('user', JSON.stringify(data))
            // Change state
            dispatch({ type: 'LOGIN', payload: data })
            // Disable loading
            setIsLoading(false)
            // Navigate to home page
            navigate('/')
        }
    }

    return { login, isLoading }
}