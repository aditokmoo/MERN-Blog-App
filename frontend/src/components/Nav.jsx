import { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useUsers } from '../hooks/useUsers';
import { Link } from 'react-router-dom';
// images
import userNoImage from '../images/no-image-profile.png';
import './css/nav.css'

export const Nav = () => {
    const { user } = useAuthContext();
    const { usersData } = useUsers();

    const [ data, setData ] = useState();

    
    useEffect(() => {
        const getUserData = () => {
            if(usersData && user) {
                usersData.map(data => {
                    if(data.username === user.username) {
                        setData(data)
                    }
                })
            }
        }
        getUserData();
    }, [usersData])


    return (
        <nav className='nav'>
            <div className="container">
                <div className='section'>
                    <h1><Link to='/'>Reactify</Link></h1>
                    {user ? (
                        <ul>
                            <li>
                                <Link to={`/profile/${user.username}`}>
                                    {user.username}
                                    {data && <img src={data.image === userNoImage ? userNoImage : `../../public/userImages/${data.image}`} />}
                                </Link>
                            </li>
                        </ul>
                    ): (
                        <ul>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/register' id='register_btn'>Create account</Link></li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}