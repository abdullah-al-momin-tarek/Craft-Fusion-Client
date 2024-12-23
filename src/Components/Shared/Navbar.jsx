import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Theme from "./Theme";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../Context/useCart";

const Navbar = () => {
  const { users, logOut } = useContext(AuthContext);
  const { carts, refetch } = useCart()

  const activeClassName = "text-white bg-[#808000]";
  const hoverClassName = "hover:bg-[#808200] hover:text-white";


  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logout");

        refetch()
      })
  }

  const links = (
    <>
      <li className="px-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition duration-300  ${isActive ? activeClassName : hoverClassName
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProducts"
          className={({ isActive }) =>
            `px-3 py-2 rounded transition duration-300 ${isActive ? activeClassName : hoverClassName
            }`
          }
        >
          All Products
        </NavLink>
      </li>


    </>
  );

  return (
    <div className="navbar bg-[#F5F5DC] dark:bg-black/35 rounded-b-md fixed z-50">
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
          className="btn btn-ghost -ml-7 md:ml-0 md:text-2xl font-bold text-[#808000] flex items-center justify-center"
        >
          <img className="w-8 h-8 " src="/craftFusion.png" alt="Logo" />
          <span className="text-[#808000] -ml-2">CraftFusion</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5 pr-5">
        {
          users && <Link to={"/dashboard/profile"}><button className="bg-lime-700 p-2 text-white rounded-xl hover:bg-inherit border border-lime-700">Dashboard</button></Link>
        }
        <Link to={'dashboard/cart'}>
          <div className="relative">
            <button className="text-2xl text-[#808000]"><FaCartPlus /></button>
            <small className="absolute -top-2  text-white font-bold text-[10px] bg-green-700 rounded-full px-1">{carts?.length ? carts?.length : 0}</small>
          </div></Link>
        {/* Theme Controller */}

        <Theme />
      </div>
      <div>
        {
          users ? <div className="dropdown dropdown-end">
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
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div> : <Link to={'/login'}><button className="bg-[#808000] text-white p-3 rounded-xl">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
