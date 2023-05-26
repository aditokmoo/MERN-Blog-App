import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { Link } from 'react-router-dom';
import './css/nav.css'

export const Nav = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    console.log(user)

    return (
        <nav className='nav'>
            <div className="container">
                <div className='section'>
                    <h1>Reactify</h1>
                    {user ? (
                        <ul>
                            
                            <li><Link to='/profile'>{user.username}</Link></li>
                            <li><button onClick={logout}>Logout</button></li>
                        </ul>
                    ): (
                        <ul>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/register'>Create account</Link></li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}