import { useNavigate } from 'react-router';
import { useEdit } from '../../hooks/useEdit';
// messsage modal
import { ToastContainer } from 'react-toastify';
// react icons
import { FaRegSave, FaEdit } from 'react-icons/fa';
// Images
import ProfileImage from '../../components/ProfileImage';
// CSS
import './css/auth.css';

export const UserDetails = () => {
	const { user, userData, profileData, edit, isDisabled, updateProfile, handleFormChange, editUserData, handleImageChange, file, fileImage } = useEdit();
	const navigate = useNavigate();

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
