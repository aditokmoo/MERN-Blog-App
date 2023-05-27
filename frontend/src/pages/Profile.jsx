import { Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import userNoImage from '../images/no-image-profile.png';
//react-icons
import { AiOutlineHome } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi'
import { TbLogout } from 'react-icons/tb';
//css
import './css/profile.css';

export const Profile = () => {
	return (
		<main>
			<Nav />
			<div className="container">
				<div className="profile">
					<div className="side_bar">
						{/* Profile Image */}
						<img src={userNoImage} alt="profile image" />
						{/* Profile Details */}
                        <ul className='details'>
							<li>
								Username <span>Adito</span>
							</li>
							<li>
								Email <span>aditokmoo18@gmail.com</span>
							</li>
						</ul>
						{/* Profile Menu */}
                        <h3>Menu</h3>
                        <ul className='menu'>
                            <li><Link to='/'><AiOutlineHome /> Home</Link></li>
                            <li><Link to='/details'><FiEdit /> Details</Link></li>
                            <li><TbLogout /> Logout</li>
                        </ul>
					</div>
					<div className="user_blogs">
						<h1>Adito blog's</h1>
					</div>
				</div>
			</div>
		</main>
	);
};
