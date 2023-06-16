import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuthContext } from './useAuthContext';
import { useUser } from './useUser';
import { toast } from 'react-toastify';
import axios from 'axios';

export const useEdit = () => {
    // Context
	const { user, dispatch } = useAuthContext();
	// Custom hook
	const { userData } = useUser();
	// hook
	const navigate = useNavigate();
	// State
	const [ profileData, setProfileData ] = useState({
		username: '',
		email: ''
	});
	const [ fileImage, setFileImage ] = useState();
	const [ file, setFile ] = useState();
	const [ edit, setEdit ] = useState(false);
	const [ isDisabled, setIsDisabled ] = useState(true);

	// Handle user details change
	const handleFormChange = (e) => {
		// Set user details form data
		setProfileData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value
		}));
	};

	// Enable user edit
	const editUserData = () => {
		if (!profileData.username && !profileData.email) {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}

		setEdit((prevState) => !prevState);
	};

	// Handle image change
	const handleImageChange = (e) => {
		setFile(e.target.files[0]);
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => setFileImage(reader.result);
		setIsDisabled(false);
	};

	// Update user
	const updateProfile = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('username', profileData.username === '' ? userData.username : profileData.username);
		formData.append('email', profileData.email === '' ? userData.email : profileData.email);
		formData.append('image', file);

		try {
			const res = await axios.patch(`/api/user/profile/${userData.username}/details`, formData);
			const data = await res.data;

			// Store user to localStorage
			localStorage.setItem('user', JSON.stringify(data));
			// Change state
			dispatch({ type: 'UPDATE', payload: data });
			// Make time for success message to show then navigate
			setTimeout(() => {
				// Navigate to profile
				navigate(`/profile/${data.username}`);
			}, 2000)
			// Success message
			toast.success('Profile updated', {
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
			const error = err.response.data.error.split(':')[2]
			// Error message
			toast.error(error, {
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
	};

    return { user, userData, profileData, edit, isDisabled, updateProfile, handleFormChange, editUserData, handleImageChange, file, fileImage }
}