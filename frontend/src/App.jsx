import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Pages
import { Home } from './pages/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Profile } from './pages/Profile';
import { UserDetails } from './pages/auth/UserDetails';
import { ChangePassword } from './pages/ChangePassword';
// CSS
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:id/details' element={<UserDetails />} />
        <Route path='/profile/:id/change' element={<ChangePassword />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
