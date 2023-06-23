// Components
import { ToastContainer } from 'react-toastify';
import { Nav } from '../../components/Nav'
import { useChangePassword } from '../../hooks/useChangePassword';

export const ChangePassword = () => {
  const { password, changePassword, handlePasswordChange } = useChangePassword();

  return (
    <>
        <Nav />
        <div className="change">
            <div className="container">
                <h1>Change password</h1>
                <form onSubmit={changePassword}>
                    <input type="password" placeholder='Password' id='password' name='password' value={password} onChange={handlePasswordChange}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="dark"
        />
    </>
  )
}