import { Link } from 'react-router-dom';
import './css/nav.css'

export const Nav = () => {
    return (
        <nav className='nav'>
            <div className="container">
                <div className='section'>
                    <h1>Reactify Blog</h1>
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Create account</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}