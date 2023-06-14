import { useState } from 'react';
import { Nav } from '../../components/Nav';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useUser } from '../../hooks/useUser';
import axios from 'axios';
// messsage modal
import { ToastContainer, toast } from 'react-toastify';
// react icons
import { FaRegSave, FaEdit } from 'react-icons/fa';
// Images
import ProfileImage from '../../components/ProfileImage';
// CSS
import './css/auth.css';

export const UserDetails = () => {
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
		} catch (error) {
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

	return (
		<>
			<div className="details">
				<div className="container">
					<h1>User Details</h1>
					{/* User details */}
					<div className="user_details">
						<div className="form_container">
							<div className="input_container">
								<label htmlFor="username">Username</label>
								<input
									type="text"
									placeholder={userData.username}
									id="username"
									name="username"
									value={profileData.username}
									onChange={handleFormChange}
									readOnly={edit ? false : true}
								/>
							</div>
							<div className="input_container">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									placeholder={userData.email}
									id="email"
									name="email"
									value={profileData.email}
									onChange={handleFormChange}
									readOnly={edit ? false : true}
								/>
							</div>
						</div>
						<button onClick={editUserData}>
							{edit ? (
								<>
									<FaRegSave /> Save
								</>
							) : (
								<>
									<FaEdit /> Edit
								</>
							)}
						</button>
					</div>
					{/* User image */}
					<ProfileImage handleImageChange={handleImageChange} file={file} user={user} fileImage={fileImage} />

					<div className="btns">
						<button id="back_btn" onClick={() => navigate(`/profile/${user.username}`)}>
							Back
						</button>
						<button id="submit_btn" onClick={updateProfile} disabled={isDisabled}>
							Submit
						</button>
					</div>
				</div>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				theme="dark"
			/>
		</>
	);
};
