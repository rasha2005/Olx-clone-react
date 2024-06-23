import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../assets/logo";
import {signUpValidation} from "../utilities/signUpValidation"
import { db ,auth } from "../firebase/config";
import { addDoc, collection} from "firebase/firestore"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {

    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [number , setNumber] = useState('');
    const [password , setPassword] = useState(''); 
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = signUpValidation(username, email, number, password);
    if (validationError) {
        // Display toast message for validation error
        toast.error(validationError);
        return;
    }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Successfully signed up:', user.uid);
      
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      
      await addDoc(collection(db, "users"), {
        uid: user.uid, 
        username: username,
        phoneNumber: number,
      });

      console.log('User data stored in Firestore');
      navigate('/');
        
    }

    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <form onSubmit={handleSubmit} className="flex flex-col items-center p-6 border-2 border-gray-300 rounded-lg bg-white w-full max-w-sm">
            <img src={LOGO_URL} alt="Logo" className="mb-6 w-24 h-24 object-contain" />
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Name"
                className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Mobile"
                className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            <button
                type="submit"
                className="p-2 bg-slate-800 text-white rounded w-full"
            >
                Sign up
            </button>
        </form>
        <div className="flex flex-col items-center mt-4">
            <p className="text-sm mb-2">Already have an account? <Link to='/login' className="text-cyan-500 hover:underline">Sign In</Link></p>
        </div>
    </div>
    )
}

export default Signup;