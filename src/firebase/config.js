import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD8Zwt_cRrkgznziEv68djTyL7EFlUUFKg",
  authDomain: "olx-clone-8a8bd.firebaseapp.com",
  projectId: "olx-clone-8a8bd",
  storageBucket: "olx-clone-8a8bd.appspot.com",
  messagingSenderId: "62837831118",
  appId: "1:62837831118:web:dcfc82d87df3b84149679f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export  {
    db,
    auth
}
