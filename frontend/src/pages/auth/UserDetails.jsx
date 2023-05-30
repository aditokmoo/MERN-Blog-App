import { Nav } from '../../components/Nav';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useUser } from '../../hooks/useUser';
// React icons
import { FaImage } from 'react-icons/fa'
// CSS
import './css/auth.css';
import { useState } from 'react';

export const UserDetails = () => {
    // Context
    const { user } = useAuthContext();
    // Custom hook
    const { userData } = useUser();
    // State
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ edit, setEdit ] = useState(false);
    // hook
    const navigate = useNavigate();
    
    // Submit Function
    const handleClick = () => navigate(`/profile/${user.username}`)

    // Edit user data
    const editUserData = (e) => {
        e.preventDefault();

        setEdit(prevState => !prevState)
    } 

    return (
        <>
            <Nav />
            <div className="details">
            <div className="container">
                <h1>User Details</h1>
                {/* User details */}
                <div className="user_details">
                    <form onSubmit={editUserData}>
                        <div className="form_container">
                            <div className="input_container">
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder={userData.username} id="username" value={username} onChange={e => setUsername(e.target.value)} readOnly={edit ? false : true} />
                            </div>
                            <div className="input_container">
                            <label htmlFor="email">Email</label>
                                <input type="email" placeholder={userData.email} id="email" value={email} onChange={e => setEmail(e.target.value)} readOnly={edit ? false : true} />
                            </div>
                            <div className="input_container">
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Password" id="password" value={password} onChange={e => setPassword(e.target.value)} readOnly={edit ? false : true} />
                            </div>
                        </div>
                            <button>{edit ? 'Save' : 'Edit'}</button>
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