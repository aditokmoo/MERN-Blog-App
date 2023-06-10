import { useState } from 'react';
import { Link } from 'react-router-dom';
// React icons
import { BiUser, BiLogIn, BiLock } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
// Hooks
import { useRegister } from '../../hooks/useRegister';
// images
import userNoImage from '../../images/no-image-profile.png';
// CSS
import './css/auth.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

export const Register = () => {
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const { register, isLoading } = useRegister();

	const handleSubmit = async (e) => {
        e.preventDefault();

		const image = userNoImage

		await register(username, email, password, confirmPassword, image);
	};

	return (
		<section>
			<div className="auth">
				<div className="overlay" />
				<div className="container">
					{/* REGISTER NAV */}
					<div className="nav_form">
						<div className="circle" />
						<h2>Reactify Blog</h2>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
						</ul>
					</div>
					{/* Register Section */}
					<div className="form_section">
						<h4>Start for free</h4>
						<h1>Create new account</h1>
						<span>
							Already, A Member? <Link to="/login">Log in</Link>
						</span>
						<form onSubmit={handleSubmit}>
							<div className="form_container">
								<div className="input_container">
									<BiUser className="input_icons" />
									<input type="text" placeholder="Username" className="input" onChange={e => setUsername(e.target.value)} />
								</div>
								<div className="input_container">
									<HiOutlineMail className="input_icons" />
									<input type="text" placeholder="Email" className="input" onChange={e => setEmail(e.target.value)} />
								</div>
							</div>
							<div className="input_container">
								<BiLock className="input_icons" />
								<input type="password" placeholder="Password" className="input" onChange={e => setPassword(e.target.value)} />
							</div>
							<div className="input_container">
								<BiLock className="input_icons" />
								<input type="password" placeholder="Confirm password" className="input" onChange={e => setConfirmPassword(e.target.value)} />
							</div>
							<button className="button" disabled={isLoading}>
								<BiLogIn className="icon" /> Create account
							</button>
						</form>
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
		</section>
	);
};
