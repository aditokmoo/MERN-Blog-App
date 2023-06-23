import { useUser } from '../../hooks/useUser'; 
// Components
import { Nav } from '../../components/Nav';
// Icons
import { BiText } from 'react-icons/bi';
import { BsImages } from 'react-icons/bs'
import { MdOutlinePostAdd } from 'react-icons/md'
// CSS
import './css/createPost.css';
import { useCreatePost } from '../../hooks/useCreatePost';

export const CreatePost = () => {
	const { activeTab, handleTab } = useCreatePost();
	const { userData } = useUser();

	return (
		<div>
			<Nav />
			<div className="create_post">
				<div className="container">
					{/* Title */}
					<div className="blog_title">
						<div className="input_container">
							<input type="text" placeholder='Enter your title...' />
						</div>
						<button><MdOutlinePostAdd /> Uploud post</button>
					</div>
					{/* Content */}
					<div className="blog_content">
						<div className="content">
							<div className="left">
								<ul>
									<li className={activeTab === 0 ? 'active' : null} onClick={() => handleTab(0)}><BiText /> Text</li>
									<li className={activeTab === 1 ? 'active' : null} onClick={() => handleTab(1)}><BsImages /> Image</li>
								</ul>
								{activeTab === 0 ?
								(
									<div className="section">
										<h2>Blog Text</h2>
										<div className="input_container">
											<textarea placeholder='Enter your blog text'></textarea>
										</div>
									</div>
								):
								(
									<div className="section">
										<h2>Blog Images</h2>
									</div>
								)
								}
							</div>
						</div>
						<div className="right">
							<span>Author</span>
							<div className="author">
								<img src={`../../public/userImages/${userData.image}`} alt=""  id='author_image'/>
								<p>{userData.username}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
