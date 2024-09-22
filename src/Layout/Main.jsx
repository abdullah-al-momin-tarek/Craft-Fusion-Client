import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const Main = () => {
  return (
    <div className="roboto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
