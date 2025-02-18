import { Outlet } from "react-router-dom";
import Sidbar from "./Components/Sidbar/Index";

const MainLayout = () => {
  return (
    <>
      <Sidbar />
      <div className="  content">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
