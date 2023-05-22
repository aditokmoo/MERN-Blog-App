import { Link } from 'react-router-dom';
// React icons
import { BiLogIn, BiLock } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
// CSS
import './css/auth.css';

export const Login = () => {
	return (
		<section>
			<div className='auth'>
				<div className='overlay' />
				<div className="container">
					{/* REGISTER NAV */}
					<div className='nav_form'>
						<div className='circle' />
						<h2>Reactify Blog</h2>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
						</ul>
					</div>
					{/* Login Section */}
					<div className="form_section">
						<h4>Start for free</h4>
						<h1>Login</h1>
						<span>
							Don't have account? <Link to="/register">Register</Link>
						</span>
						<form>
							<div className="input_container">
								<HiOutlineMail className="input_icons" />
								<input type="text" placeholder="Email" className="input" />
							</div>

							<div className="input_container">
								<BiLock className="input_icons" />
								<input type="password" placeholder="Password" className="input" />
							</div>
							<button className="button">
								<BiLogIn className="icon" /> Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
