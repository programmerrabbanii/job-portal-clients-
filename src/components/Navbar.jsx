import { Link, NavLink } from 'react-router-dom';
import navlogo from '../assets/imgs/jobhub-logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const Navbar = () => {
  const { logOutUser, user } = useContext(AuthContext);

  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "text-gray-600"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/myapply"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "text-gray-600"
          }
        >
          My Application
        </NavLink>
      </li>


      <li>
        <NavLink
          to="/addjob"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "text-gray-600"
          }
        >
          Add Job
        </NavLink>
      </li>
    </> 
  );

  return (
    <div className='bg-base-100 shadow-lg sticky top-0 z-10'>
      <div className="navbar w-11/12 mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown for small screens */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          {/* Logo */}
          <Link to="/">
            <img src={navlogo} alt="JobHub Logo" className="h-10" />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end space-x-4">
          {user ? (
            <>
              {/* User Info */}
              <div className="flex items-center space-x-2">
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full border"
                />
                <span className="font-medium text-gray-700">{user.displayName}</span>
              </div>
              {/* Logout Button */}
              <button
                onClick={logOutUser}
                className="btn btn-sm btn-outline btn-primary normal-case"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login and Register Buttons */}
              <Link
                to="/login"
                className="btn  btn-outline btn-primary normal-case"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn  btn-primary normal-case text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;