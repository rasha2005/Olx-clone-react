import React, { useContext } from "react";
import  { LOGO_URL } from "../assets/logo"
import { AuthContext } from "../store/userAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../firebase/config";

const Header = () => {
  const navigate = useNavigate();

  const {user ,setUser} = useContext(AuthContext)
  if(user != null) {
    console.log("congrats it working",user)

  }else {
    console.log('im soryy :(')
  }

  const handleLogout = () => {
        
    setUser(null);
    logout();
    navigate("/login")
   
};
 
    return (
        <div className="grid grid-cols-12 bg-gray-100">
      <div className="col-span-2 flex">
        
          <img className="p-4 w-20" src={LOGO_URL} alt="" />
       
        <input type="text" placeholder="Your Location" className="px-1 my-2 py-2 border-2 border-black"/>
      </div>

      <div className="col-span-7 ml-10 flex">
        <input
          type="text"
          className="border-2 border-black ms-3 px-1 my-2 py-2 w-full"
          placeholder="Find Cars,Mobile Phones and More..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-11 mt-2 mb-1 cursor-pointer border border-black bg-black text-white rounded-r-lg "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div className="col-span-3">
        <div className="right-nav flex flex-1 h-full items-center justify-around">
          <div className="nav-text hover:text-cyan-800 hover:cursor-pointer font-bold">
            ENGLISH
          </div>

          {user ? (
                    <div
                        onClick={handleLogout}
                        className="nav-text underline hover:cursor-pointer font-bold"
                    >
                        Logout
                    </div>
                ) : (
                    <Link
                     to="/login" className="nav-text underline hover:cursor-pointer font-bold">
                        Login
                    </Link>
                )}
          
              <button className="nav-text px-6 py-1 bg-white rounded-3xl sell-button flex items-center">
                SELL
              </button>
        </div>
      </div>
    </div>
    )
}

export default Header;