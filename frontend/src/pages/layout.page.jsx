import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
const Layout = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
