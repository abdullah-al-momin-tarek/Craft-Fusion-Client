import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Theme from "../Shared/Theme";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
    const {users,logOut} = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
  <Link
          to="/"
          className="btn btn-ghost -ml-7 md:ml-0 md:text-2xl font-bold text-orange-700 flex items-center justify-center"
        >
          <img className="w-7 h-7" src="/craftFusion.png" alt="Logo" />
          <span className="text-blue-500 -ml-2">CraftFusion</span>
        </Link>
  </div>
  <div className="flex-none">
    <div className="navbar-end mr-5">
      <Theme/>
      
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Profile Picture"
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
    </div>
  </div>
</div>
    );
};

export default DashboardNavbar;