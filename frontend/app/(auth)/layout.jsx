import Link from 'next/link';
// CSS
import styles from './layout.module.css';

export default function AuthLayout({children}) {
    return (
      <section>
        <div className={styles.auth}>
            <div className={styles.overlay}></div>
            <div className="container">
                {/* REGISTER NAV */}
                <div className={styles.nav_section}>
                    <div className={styles.circle}></div>
                    <h2>Reactify Blog</h2>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                    </ul>
                </div>
                {children}
            </div>
        </div>
      </section>
    );
  }