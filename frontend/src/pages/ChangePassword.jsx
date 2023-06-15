// Components
import { Nav } from '../components/Nav'
// CSS
import './css/change.css';

export const ChangePassword = () => {
  return (
    <>
        <Nav />
        <div className="change">
            <div className="container">
                <h1>Change password</h1>
                <form>
                    <input type="text" placeholder='Password'/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}