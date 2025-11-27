import React, { useState, useEffect } from "react";
import { FaUser, FaFileAlt, FaSignInAlt, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle, signOutUser } from "../Firebase/firebase";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#0c1114] text-white shadow-lg sticky top-0 z-50">

     
      <Link to="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        CodeLab
      </Link>

      <div className="hidden md:flex items-center gap-6">
        <Link to="/about" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-white/10 transition">
          <FaUser /> About
        </Link>
        <Link to="/contact" className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-white/10 transition">
          <FaFileAlt /> Contact
        </Link>

        {loading ? (
          <span className="text-gray-300 text-sm">Loading...</span>
        ) : user ? (
          <div className="flex items-center gap-3">
            <img src={user.photoURL} className="w-9 h-9 rounded-full border-2 border-blue-500" />
            <span className="text-sm text-gray-300">{user.displayName}</span>
            <button
              onClick={handleSignOut}
              className="p-2 border border-red-500 rounded-full hover:bg-red-500 transition"
            >
              <FaSignOutAlt />
            </button>
          </div>
        ) : (
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-2 bg-red-500 px-5 py-2 rounded-full font-semibold hover:bg-red-600 transition"
          >
            <FaSignInAlt /> Login with Google
          </button>
        )}
      </div>

      
      <button
        className="md:hidden text-2xl p-2"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

   
      <div className={`absolute left-0 right-0 bg-[#0c1114] shadow-lg p-5 flex flex-col gap-3 md:hidden transition-all duration-300 
        ${isMenuOpen ? "top-full opacity-100" : "top-[-400px] opacity-0"}`}
      >
        <Link to="/about" onClick={toggleMenu}
          className="flex items-center gap-3 px-4 py-3 border-b border-white/10 hover:bg-white/10 rounded-md"
        >
          <FaUser /> About
        </Link>

        <Link to="/contact" onClick={toggleMenu}
          className="flex items-center gap-3 px-4 py-3 border-b border-white/10 hover:bg-white/10 rounded-md"
        >
          <FaFileAlt /> Contact
        </Link>

        {loading ? (
          <div className="text-center text-gray-300 py-2">Loading...</div>
        ) : user ? (
          <>
            <div className="flex items-center gap-4 px-4 py-3 border-b border-white/10">
              <img src={user.photoURL} className="w-10 h-10 rounded-full border-2 border-blue-500" />
              <span className="text-white font-medium">{user.displayName}</span>
            </div>

            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center gap-2 bg-gray-700 px-4 py-3 rounded-md font-semibold hover:bg-gray-600 transition"
            >
              <FaSignOutAlt /> Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 bg-red-500 px-4 py-3 rounded-md font-semibold hover:bg-red-600 transition"
          >
            <FaSignInAlt /> Login with Google
          </button>
        )}
      </div>

    </nav>
  );
}
