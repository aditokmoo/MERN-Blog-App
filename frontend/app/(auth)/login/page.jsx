import Link from 'next/link';
// React icons
import { BiLogIn, BiLock } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi'
// CSS
import styles from '../layout.module.css';

export const metadata = {
	title: 'Reactify Blog - Login'
}

export default function Login() {
	return (
		<>
			{/* Login Section */}
			<div className={styles.section}>
				<h4>Start for free</h4>
				<h1>Login</h1>
				<span>
					Don't have account? <Link href="/register">Register</Link>
				</span>
				<form>
					<div className={styles.input_container}>
						<HiOutlineMail className={styles.input_icons} />
						<input type="text" placeholder="Email" className={styles.input} />
					</div>

					<div className={styles.input_container}>
						<BiLock className={styles.input_icons} />
						<input type="password" placeholder="Password" className={styles.input} />
					</div>
					<button className={styles.button}><BiLogIn  className={styles.icon} /> Login</button>
				</form>
			</div>
		</>
	);
}
