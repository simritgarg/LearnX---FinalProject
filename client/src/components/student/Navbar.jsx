import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FaHome, FaInfoCircle } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const isCoursesListPage = location.pathname.includes('/course-list');
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Scroll listener to toggle background color
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-3 border-b shadow-sm
        ${isCoursesListPage
          ? 'bg-gradient-to-r from-blue-100 to-blue-400 border-blue-300' // Light blue gradient for courses list
          : isScrolled
          ? 'bg-blue-200 border-blue-500' // Solid blue if scrolled
          : 'bg-gradient-to-r from-blue-100 to-blue-400 border-blue-300'} // Light blue gradient if not scrolled
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
              className="text-blue-900 hover:text-blue-700 hover:bg-blue-200 px-3 py-1 rounded-md transition"
            >
              {isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>
            <span className="text-blue-400">|</span>
            <Link
              to="/my-enrollments"
              className="text-blue-900 hover:text-blue-700 hover:bg-blue-200 px-3 py-1 rounded-md transition"
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
            className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full transition"
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
              className="text-blue-900 hover:text-blue-700 hover:bg-blue-200 px-3 py-1 rounded-md transition"
            >
              {isEducator ? 'Dashboard' : 'Educator'}
            </button>
            <span className="text-blue-400">|</span>
            <Link
              to="/my-enrollments"
              className="text-blue-900 hover:text-blue-700 hover:bg-blue-200 px-3 py-1 rounded-md transition"
            >
              Enrollments
            </Link>
          </div>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="User Icon" className="w-6 hover:bg-blue-200 rounded-full transition" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
