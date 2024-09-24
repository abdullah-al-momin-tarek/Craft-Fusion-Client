import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const Main = () => {
  return (
    <div className="roboto">
      <div className="h-[68px]">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
