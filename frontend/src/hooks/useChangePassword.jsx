import { useState } from "react";
import { useUser } from "./useUser"
import axios from 'axios';
import { toast } from "react-toastify";

export const useChangePassword = () => {
    const { userData } = useUser();
    // State
    const [ password, setPassword ] = useState('');
    
    // Handle Password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value) 
    }

    // Change Password
    const changePassword = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.patch(`/api/user/profile/${userData.username}/change`, { password });
            // Success message
			toast.success('Password changed', {
				position: "top-right",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				theme: "dark",
			});
        } catch (err) {
            const error = err.response.data.error;
			// Error message
			toast.error(error, {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return { handlePasswordChange, changePassword, password }
}