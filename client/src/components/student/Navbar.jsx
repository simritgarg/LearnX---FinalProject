import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {
  const location = useLocation();
  const isCoursesListPage = location.pathname.includes('/course-list');

  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator');
        return;
      }

      const token = await getToken();
      const { data } = await axios.get(backendUrl + '/api/educator/update-role', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        toast.success(data.message);
        setIsEducator(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-3 border-b 
        ${isCoursesListPage ? 'bg-gray-200 border-gray-300' : 'bg-gray-500 border-gray-800'}
      `}
    >
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="Logo"
        className="w-36 cursor-pointer hover:opacity-80 transition"
      />

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6 font-medium">
        {user && (
          <>
            <button
              onClick={becomeEducator}
              className="text-gray-100 hover:text-white hover:bg-gray-700 px-3 py-1 rounded-md transition"
            >
              {isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>
            <span className="text-gray-400">|</span>
            <Link
              to="/my-enrollments"
              className="text-gray-100 hover:text-white hover:bg-gray-700 px-3 py-1 rounded-md transition"
            >
              My Enrollments
            </Link>
          </>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full transition"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-3 text-sm">
        {user && (
          <div className="flex gap-2 items-center">
            <button
              onClick={becomeEducator}
              className="text-gray-500 hover:text-white hover:bg-gray-700 px-3 py-1 rounded-md transition"
            >
              {isEducator ? 'Dashboard' : 'Educator'}
            </button>
            <span className="text-gray-400">|</span>
            <Link
              to="/my-enrollments"
              className="text-gray-100 hover:text-white hover:bg-gray-700 px-3 py-1 rounded-md transition"
            >
              Enrollments
            </Link>
          </div>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="User Icon" className="w-6 hover:bg-gray-700 rounded-full transition" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
