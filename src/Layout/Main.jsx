import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Pages/Footer";

const Main = () => {
  return (
    <div className="roboto">
      <div className="h-[68px]">
        <Navbar />
      </div>
      <Outlet />
     <div className="mt-12">
     <Footer />
     </div>
    </div>
  );
};

export default Main;
