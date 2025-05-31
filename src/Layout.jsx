import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import logged from './Home.jsx'
import settlogged from './Home.jsx'
const Layout = () => {
  
  return (
    <>
      <Header />
        <Outlet />
    </>
  );
};

export default Layout;
