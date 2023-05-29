import { Nav } from '../../components/Nav';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../hooks/useAuthContext';
// React icons
import { FaImage } from 'react-icons/fa'
// CSS
import './css/auth.css';

export const UserDetails = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const handleClick = () => navigate(`/profile/${user.username}`)

    return (
        <>
            <Nav />
            <div className="details">
            <div className="container">
                <h1>User Details</h1>
                {/* User details */}
                <div className="user_details">
                    <form>
                        <div className="form_container">
                            <div className="input_container">
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder="Username" id="username" />
                            </div>
                            <div className="input_container">
                            <label htmlFor="email">Email</label>
                                <input type="email" placeholder="Email" id="email" />
                            </div>
                            <div className="input_container">
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Password" id="password" />
                            </div>
                        </div>
                            <button>Edit</button>
                    </form>
                </div>
                {/* User image */}
                <div className="user_image">
                    <div className="image">
                        <FaImage  />
                    </div>
                    <button>Add Image</button>
                </div>

            </div>
            <div className="btns">
                <button id='back_btn' onClick={handleClick}>Back</button>
                <button id='submit_btn' onClick={handleClick}>Submit</button>
            </div>
        </div>
        </>
    )
}