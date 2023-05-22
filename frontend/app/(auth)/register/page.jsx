import Link from 'next/link';
// React icons
import { BiLogIn, BiUser, BiLock } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi'
// CSS
import styles from '../layout.module.css';

export const metadata = {
	title: 'Reactify Blog - Create account'
}

export default function Register() {
    return (
       <>
            {/* Register Section */}
            <div className={styles.section}>
                <h4>Start for free</h4>
                <h1>Create new account</h1>
                <span>Already, A Member? <Link href='/login'>Log in</Link></span>
                <form>
                    <div className={styles.form_container}>
                        <div className={styles.input_container}>
                            <BiUser className={styles.input_icons} />
                            <input type="text" placeholder='Username'  className={styles.input}/>
                        </div>
                        <div className={styles.input_container}>
                            <HiOutlineMail className={styles.input_icons} />
                            <input type="text" placeholder='Email'  className={styles.input}/>
                        </div>
                    </div>
                    <div className={styles.input_container}>
                        <BiLock className={styles.input_icons} />
                        <input type="password" placeholder='Password'  className={styles.input}/>
                    </div>
                    <div className={styles.input_container}>
                        <BiLock className={styles.input_icons} />
                        <input type="password" placeholder='Confirm password' className={styles.input} />
                    </div>
                    <button className={styles.button}><BiLogIn className={styles.icon} /> Create account</button>
                </form>
            </div>    
        </>
    )
}