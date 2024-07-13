import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  let nama = "";

  if (token) {
    try {
      nama = jwtDecode(token).data.nama;
    } catch (error) {
      console.error("Token decode error:", error);
      localStorage.removeItem('token');
    }
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle logout
  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      navigate("/");

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Logged out successfully"
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  
  return (
    <nav
      className="flex justify-between items-center py-4 px-4 text-white bg-blue-900"
      style={{ backgroundColor: "#0A142F", zIndex: 10, position: 'relative' }}
    >
      <div className="flex items-center pl-4 sm:pl-24">
        <span className="text-xl font-bold mx-12">
          Happy <br />
          Parenting!
        </span>
      </div>

      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <ul className={`sm:flex items-center mr-16 ${menuOpen ? 'block' : 'hidden'} sm:block`}>
        <li className="ml-4 mx-3">
          <Link to="/" className="hover:text-gray-300">
            Beranda
          </Link>
        </li>
        <li className="ml-4 mx-3">
          <Link to="/artikel" className="hover:text-gray-300">
            Artikel
          </Link>
        </li>
        <li className="ml-4 mx-3">
          <Link to="/chatbot" className="hover:text-gray-300">
            Parenting
          </Link>
        </li>
        
        {token ? (
          <div className="flex items-center ml-4 relative">
            <div
              tabIndex={0}
              role="button"
              className="mx-auto focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="text-white font-normal mx-2 cursor-pointer">
                Welcome! {nama}
              </span>
            </div>
            
            {dropdownOpen && (
              <div className="absolute top-full mt-2 right-0 z-10 rounded-box w-52 shadow-lg" style={{ backgroundColor: "#0A142F"}}>
                <ul className="p-2">
                  <li>
                    <a
                      href=""
                      onClick={handleLogout}
                      className="block px-4 py-2 text-white hover:bg-gray-200"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            <li className="ml-4">
              <Link
                to="/signin"
                className="bg-gray-100 text-black py-2 px-4 rounded-full hover:bg-gray-200"
              >
                SignIn
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="/signup"
                className="bg-gray-100 text-black py-2 px-4 rounded-full hover:bg-gray-200"
              >
                SignUp
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
