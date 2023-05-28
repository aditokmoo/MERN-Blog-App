import { useNavigate } from "react-router";
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const logout = async () => {
        // Remove user from localStorage
        localStorage.removeItem('user');

        // Remove from state
        dispatch({ type: 'LOGOUT' })

        // Navigate to home page
        navigate('/')
    }

    return { logout }
}