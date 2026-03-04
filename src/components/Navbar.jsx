import React, { useState, useEffect } from "react";
import { FaBars, FaServer, FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hosting", path: "/hosting" },
    { name: "Domain", path: "/domain" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  return (
    <>
      {/* Backdrop Overlay with blur */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-500 ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowMenu(false)}
      />

      {/* Navbar Container */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo with hover animation */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group relative overflow-hidden"
            >
              <div className="relative">
                <FaServer className={`text-3xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                  scrolled ? "text-indigo-600" : "text-indigo-600"
                }`} />
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className={`text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider`}>
                Elithosting
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center  gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-4  py-2 group"
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Animated underline */}
                  <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                  
                  {/* Hover background glow */}
                  <div className="absolute inset-0 bg-indigo-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-0" />
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/auth"
                className="relative px-6 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-300 group"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gray-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/auth"
                className="relative px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Sign Up</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <FaBars 
                  className={`absolute inset-0 w-6 h-6 text-gray-800 transition-all duration-300 ${
                    showMenu ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`} 
                />
                <FaXmark 
                  className={`absolute inset-0 w-6 h-6 text-gray-800 transition-all duration-300 ${
                    showMenu ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-2xl z-50 transform transition-transform duration-500 ease-out shadow-2xl ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Decorative gradient line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-500" />
        
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          {/* Mobile Navigation Links */}
          <div className="flex-1 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setShowMenu(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  location.pathname === link.path
                    ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                }`}
                style={{
                  transitionDelay: showMenu ? `${index * 50}ms` : "0ms",
                  opacity: showMenu ? 1 : 0,
                  transform: showMenu ? "translateX(0)" : "translateX(20px)"
                }}
              >
                <span className="text-lg font-semibold">{link.name}</span>
                {location.pathname === link.path && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-indigo-600" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          <div className="space-y-3 pt-6 border-t border-gray-200">
            <Link
              to="/auth"
              onClick={() => setShowMenu(false)}
              className="flex items-center justify-center w-full px-6 py-3 text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/auth"
              onClick={() => setShowMenu(false)}
              className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>

          {/* Footer text */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">Built by Malik Oman</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;