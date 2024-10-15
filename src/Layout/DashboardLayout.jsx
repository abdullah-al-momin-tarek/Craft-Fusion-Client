import { FaBook, FaHome, FaList, FaSearch } from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { MdAnalytics, MdAppRegistration, MdOutlinePayment } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { RiAddBoxFill } from "react-icons/ri";
import { useContext, useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import Navbar from '../Components/Shared/Navbar';
import DashboardNavbar from '../Components/Dashboard/DashboardNavbar';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';


const DashboardLayout = () => {
    // const [isAdmin] = useAdmin();
    const isAdmin = false
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {users} = useContext(AuthContext);
    const navigate = useNavigate()

    if(!users){
        navigate("/")
    }

    

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Mobile menu button */}
            <div className="lg:hidden p-4 bg-orange-300">
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-white flex items-center gap-2"
                >
                  <TiThMenu />  {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
                </button>
            </div>

            {/* Dashboard sidebar */}
            <div className={`w-full lg:w-64 text-white dark:bg-gray-900 bg-orange-400 lg:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <ul className="menu p-4">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/profile">
                                    <ImProfile />
                                    Admin Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addCamp">
                                    <RiAddBoxFill />
                                    Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageCamps">
                                    <FaList />
                                    Manage All Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageRegisterCamps">
                                    <FaBook />
                                    Manage Register Camps
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/dashboard/profile">
                                    <MdAnalytics />
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageProducts">
                                    <ImProfile />
                                    Manage your products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/yourCart">
                                    <MdAppRegistration />
                                    Your Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/orderHistory">
                                    <MdOutlinePayment />
                                    Order History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymentHistory">
                                    <MdOutlinePayment />
                                    Payment History
                                </NavLink>
                            </li>
                        </>
                    )}
                    {/* Shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/available-camps">
                            <FaSearch />
                            Available Camps
                        </NavLink>
                    </li>
                    <li className=''>test</li>
                </ul>
                
            </div>

            

            {/* Dashboard content */}
            <div className="flex-1 p-2">
                <DashboardNavbar/>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
