import { useState } from 'react';
// images
import userNoImage from '../images/no-image-profile.png';
import { useUser } from '../hooks/useUser';

const ProfileImage = ({ handleImageChange, file, fileImage }) => {
	const { userData } = useUser();

	return (
		<div className="user_image">
			<div className="image">
				<img src={file ? fileImage : (userData.image === userNoImage ? userNoImage : `../../public/userImages/${userData.image}`)} alt="" />
			</div>
			<input
				type="file"
				name='image'
				id="image"
				onChange={handleImageChange}
				accept="image/*"
			/>
			<label htmlFor="image">Add Image</label>
		</div>
	);
};

export default ProfileImage;
