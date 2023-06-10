import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { Link } from 'react-router-dom';
import './css/nav.css'
import { useUser } from '../hooks/useUser';

export const Nav = () => {
    const { user } = useAuthContext();
    const { userData } = useUser();
    const { logout } = useLogout();

    return (
        <nav className='nav'>
            <div className="container">
                <div className='section'>
                    <h1><Link to='/'>Reactify</Link></h1>
                    {user ? (
                        <ul>
                            <li><Link to={`/profile/${user.username}`}>{user.username}</Link></li>
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