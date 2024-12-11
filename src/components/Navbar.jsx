import { Link, NavLink } from 'react-router-dom';
import navlogo from '../assets/jobhub-logo.svg';

const Navbar = () => {
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
    </>
  );

  return (
    <div className='bg-base-100 shadow-lg'>
        <div className="navbar  w-11/12 mx-auto ">
      {/* Navbar Start */}
      <div className="navbar-start ">
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
        <Link
          to="/login"
          className="btn btn-sm btn-outline btn-primary normal-case"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="btn btn-sm btn-primary normal-case text-white"
        >
          Register
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
