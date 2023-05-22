import { Link } from 'react-router-dom';
// React icons
import { BiUser, BiLogIn, BiLock } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
// CSS
import './css/auth.css';

export const Register = () => {
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
					 {/* Register Section */}
           <div className='form_section'>
                <h4>Start for free</h4>
                <h1>Create new account</h1>
                <span>Already, A Member? <Link to='/login'>Log in</Link></span>
                <form>
                    <div className='form_container'>
                        <div className='input_container'>
                            <BiUser className='input_icons' />
                            <input type="text" placeholder='Username'  className='input' />
                        </div>
                        <div className='input_container'>
                            <HiOutlineMail className='input_icons' />
                            <input type="text" placeholder='Email'  className='input' />
                        </div>
                    </div>
                    <div className='input_container' >
                        <BiLock className='input_icons' />
                        <input type="password" placeholder='Password'  className='input' />
                    </div>
                    <div className='input_container'>
                        <BiLock className='input_icons' />
                        <input type="password" placeholder='Confirm password' className='input' />
                    </div>
                    <button className='button'><BiLogIn className='icon' /> Create account</button>
                </form>
            </div>    
				</div>
			</div>
		</section>
  )
}