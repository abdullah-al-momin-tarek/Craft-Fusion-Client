import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Theme from "./Theme";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const { users,logOut } = useContext(AuthContext);

  const activeClassName = "text-white bg-[#c87ffc]";
  const hoverClassName = "hover:bg-orange-500 hover:text-white";

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition duration-300 ${
              isActive ? activeClassName : hoverClassName
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allCraft"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition duration-300 ${
              isActive ? activeClassName : hoverClassName
            }`
          }
        >
          All Art & Craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCraft"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition duration-300 ${
              isActive ? activeClassName : hoverClassName
            }`
          }
        >
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/myCraft/${users?.email}`}
          className={({ isActive }) =>
            `px-3 py-2 rounded transition duration-300 ${
              isActive ? activeClassName : hoverClassName
            }`
          }
        >
          My Art & Craft List
        </NavLink>
      </li>

      {!users && (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-3 py-2 rounded transition duration-300 ${
                  isActive ? activeClassName : hoverClassName
                }`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `px-3 py-2 rounded transition duration-300 ${
                  isActive ? activeClassName : hoverClassName
                }`
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-[#fff38a] dark:bg-black/35 rounded-b-md fixed z-50">
      <div className="navbar-start">
        <div className="dropdown z-10">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost -ml-7 md:ml-0 md:text-2xl font-bold text-orange-700 flex items-center justify-center"
        >
          <img className="w-7 h-7" src="/craftFusion.png" alt="Logo" />
          <span className="text-blue-500 -ml-2">CraftFusion</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5 pr-5">
        <button className="text-2xl"><FaHeartCirclePlus /></button>
        <button className="text-2xl"><FaCartPlus /></button>
        {/* Theme Controller */}
        <Theme />
      </div>
      <div>
        {
          users? <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={users?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><button onClick={()=>logOut()}>Logout</button></li>
          </ul>
        </div> : <Link to={'/login'}><button  className="bg-orange-500 text-white p-3 rounded-xl">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
