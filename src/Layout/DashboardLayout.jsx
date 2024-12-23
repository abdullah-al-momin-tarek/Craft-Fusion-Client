import { FaBook, FaHome, FaList, FaSearch } from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { MdAnalytics, MdAppRegistration, MdOutlinePayment } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { RiAddBoxFill } from "react-icons/ri";
import { useContext, useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import DashboardNavbar from '../Components/Dashboard/DashboardNavbar';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';


const DashboardLayout = () => {
    const [isAdmin,isAdminLoading] = useAdmin();
    console.log("test",isAdmin);
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {users} = useContext(AuthContext);
    const navigate = useNavigate()

    if(!users){
        navigate("/")
    }

    if(isAdminLoading){
        return <div className='flex justify-center items-center h-screen'><span className="loading loading-spinner loading-lg"></span></div>
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
                    {isAdmin=== "admin" ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/profile">
                                    <ImProfile />
                                    Admin Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageUsers">
                                    <RiAddBoxFill />
                                    Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageAllProducts">
                                    <FaList />
                                    Manage All Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allOrderHistory">
                                    <FaBook />
                                    All Order history
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
                                <NavLink to="/dashboard/cart">
                                    <MdAppRegistration />
                                    Your Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/purchaseHistory">
                                    <MdOutlinePayment />
                                    Purchase History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/sellingHistory">
                                    <MdOutlinePayment />
                                    Selling History
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
                        <NavLink to="/allProducts">
                            <FaSearch />
                            All Products
                        </NavLink>
                    </li>
                    
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
