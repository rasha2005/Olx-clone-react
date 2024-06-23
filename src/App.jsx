import { useContext, useEffect, useState } from 'react'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import './App.css'
import { auth } from "./firebase/config.js";
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import { AuthContext } from './store/userAuthContext';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const {user,setUser} = useContext(AuthContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
    });
    console.log("User" , user)
  }, []);

  return (
    <div>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {!user && <Route path="/signup" element={<SignUp />} />}
                {!user && <Route path="/login" element={<Login />} />}
                <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <ToastContainer theme="dark" />
    </div>
  )
}

export default App
