// React icons
import { AiOutlineShareAlt, AiFillLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi'
// Images
import  profilePhoto  from '../images/profile-image.jpg'
import blogImage from '../images/blog-img.jpg'
// CSS
import './css/blogcard.css'
import { usePosts } from '../hooks/usePosts';

export const BlogCard = () => {
	const { posts } = usePosts();

	return posts && posts.map(post => (
		<div className="blog">
			<div className="profile_details">
				<img src={profilePhoto} alt="" />
				<span>{post.author}</span>
			</div>
			<img src={`../../public/images/${post.images[0]}`} alt="blog image" />
			<div className="heading">
				<h2>{post.title}</h2>
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
	))
};
