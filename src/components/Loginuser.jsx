import { useContext, useState } from "react";
import { LOGO_URL } from "../assets/logo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"; 
import {auth ,db} from "../firebase/config"
import getErrorMessage from "../utilities/signInError";
import { useNavigate ,Link } from "react-router-dom";
import { AuthContext } from "../store/userAuthContext";
const Loginuser = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            console.log("userDocSnap",user.displayName)
            
            console.log("user from login",userCredential.displayName);
            toast.success('Successfully signed in!');
            
           navigate("/")
        } catch (error) {
            console.error('Firebase error code:', error);
            const errorMessage = getErrorMessage(error.code);
            toast.error(error.code);
        }
    }
  

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <form onSubmit={handleSubmit} className="flex flex-col items-center p-6 border-2 border-gray-300 rounded-lg bg-white w-full max-w-sm">
            <img src={LOGO_URL} alt="Logo" className="mb-6 w-24 h-24 object-contain" />
           
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            <button
                type="submit"
                className="p-2 bg-slate-800 text-white rounded w-full mb-4"
            >
                Sign In
            </button>
        </form>

        <div className="flex flex-col items-center">
            <p className="text-sm mb-2">New to Olx?  <Link to='/signup' className=" text-cyan-500 hover:underline">Sign Up</Link></p>
          
        </div>
    </div>
    )
}

export default Loginuser;