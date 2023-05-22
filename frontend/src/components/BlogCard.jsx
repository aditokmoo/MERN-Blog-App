// React icons
import { AiOutlineShareAlt, AiFillLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi'
// Images
import  profilePhoto  from '../images/profile-image.jpg'
import blogImage from '../images/blog-img.jpg'
// CSS
import './css/blogcard.css'

export const BlogCard = () => {
	return (
		<div className="blog">
			<div className="profile_details">
				<img src={profilePhoto} alt="" />
				<span>Adi Tokmo</span>
			</div>
			<img src={blogImage} alt="blog image" />
			<div className="heading">
				<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
				<ul>
					<li>
						<AiFillLike /> 0
					</li>
					<li>
						<BiCommentDetail /> 0
					</li>
					<li>
						<AiOutlineShareAlt />
					</li>
				</ul>
			</div>
		</div>
	);
};
