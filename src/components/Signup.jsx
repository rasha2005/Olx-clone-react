import { useState } from "react";
import { LOGO_URL } from "../assets/logo";
import { db ,auth } from "../firebase/config";
import { addDoc, collection} from "firebase/firestore"
import {createUserWithEmailAndPassword} from "firebase/auth"
const Signup = () => {

    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [number , setNumber] = useState('');
    const [password , setPassword] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Successfully signed up:', user.uid);
      
      await addDoc(collection(db, "users"), {
        uid: user.uid, 
        username: username,
        phoneNumber: number,
      });

      console.log('User data stored in Firestore');
        
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <form onSubmit={handleSubmit} className="flex flex-col items-center p-6 border-2 border-gray-300 rounded-lg bg-white w-full max-w-sm">
          <img src={LOGO_URL} alt="Logo" className="mb-6 w-24 h-24 object-contain" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="name"
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="mobile"
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
            className="p-2 bg-slate-800 text-white rounded w-full"
          >
            Sign up
          </button>
        </form>
      </div>
    )
}

export default Signup;