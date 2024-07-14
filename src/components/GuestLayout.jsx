import {Navigate, Outlet} from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import NavBar from "../views/Pages/Navbar";
import Footr from "../views/Pages/Footr";
export default function GuestLayout() {
  const { token ,notification} = useStateContext();

/*   if (token) {
    return <Navigate to="/home" />;
  } */

  return (
    <div id="guestLayout">
      <NavBar />

      <Outlet />

      <Footr/>


    </div>
  );
}
