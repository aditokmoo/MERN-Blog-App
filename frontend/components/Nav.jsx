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
                    <h1 className={poppins.className}>Adito Blog</h1>
                    <ul>
                        <Link href='/login'>Login</Link>
                        <Link href='/register'>Create account</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}