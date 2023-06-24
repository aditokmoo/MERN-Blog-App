import { useState } from 'react';
// images
import userNoImage from '../images/no-image-profile.png';
import { useUser } from '../hooks/useUser';
// react spinners
import { ScaleLoader } from 'react-spinners';
//react icons
import { FaPlus } from 'react-icons/fa'

const ProfileImage = ({ handleImageChange, file, fileImage }) => {
	const { userData } = useUser();
	const [ isLoading, setIsLoading ] = useState(true);

	return (
		<div className="user_image">
			<div className="image">
				{isLoading && <ScaleLoader color="#3698d6" id='profileLoading' />}
				<img onLoad={() => setIsLoading(false)} src={file ? fileImage : (userData.image === userNoImage ? userNoImage : `../../public/images/${userData.image}`)} style={{ display: isLoading ? 'none' : 'block' }}/>
			</div>
			<input
				type="file"
				name='image'
				id="image"
				onChange={handleImageChange}
				accept="image/*"
			/>
			<label htmlFor="image"><FaPlus /> Add Image</label>
		</div>
	);
};

export default ProfileImage;
