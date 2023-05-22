import Link from 'next/link';
// CSS Module
import styles from './css/Nav.module.css';
// Font
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '900', subsets: ['latin'] })

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.section}>
                    <h1 className={poppins.className}>Reactify Blog</h1>
                    <ul>
                        <li><Link href='/login'>Login</Link></li>
                        <li><Link href='/register'>Create account</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}