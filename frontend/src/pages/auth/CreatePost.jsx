import { useUser } from '../../hooks/useUser'; 
import { useCreatePost } from '../../hooks/useCreatePost';
// Components
import { Nav } from '../../components/Nav';
// Icons
import { FaPlus } from 'react-icons/fa';
import { BiText } from 'react-icons/bi';
import { BsImages } from 'react-icons/bs'
import { MdOutlinePostAdd } from 'react-icons/md'
import { ToastContainer } from 'react-toastify';
// Images
import userNoImage from '../../images/no-image-profile.png';
// CSS
import './css/createPost.css';

export const CreatePost = () => {
	const { activeTab, images, handleTab, handleFormChange, handleImageChange, createPost } = useCreatePost();
	const { userData } = useUser();

	return (
		<>
			<Nav />
			<div className="create_post">
				<div className="container">
					{/* Title */}
					<div className="blog_title">
						<div className="input_container">
							<input type="text" placeholder='Enter your title...'  onChange={handleFormChange} id='title' name='title' />
						</div>
						<button onClick={createPost}><MdOutlinePostAdd /> Uploud post</button>
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
											<textarea placeholder='Enter your blog text' id='desc' name='desc' onChange={handleFormChange}></textarea>
										</div>
									</div>
								):
								(
									<div className="section">
										<h2>Blog Images</h2>
										<div className="image_section">
											<div className="file_container">
												<label htmlFor="images">
													<span><FaPlus/></span>
													<span>Add Images</span>
												</label>
												<input type="file" id='images' name='images' onChange={handleImageChange} multiple/>
											</div>
											{images && images.map((image, index) => (
												<div className="image" key={index}>
													<img src={image} alt="" />
												</div>
											))}
										</div>
										<p>{images.length} / 4</p>
									</div>
								)
								}
							</div>
						</div>
						<div className="right">
							<span>Author</span>
							<div className="author">
								<img src={userData.image === userNoImage ? userNoImage : `../../public/images/${userData.image}`} alt=""  id='author_image'/>
								<p>{userData.username}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer
				position="bottom-right"
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
