import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
const Navbar = () => {
    const navlinks=<>
    
    <NavLink className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-xl"
            : "p-2 rounded-md text-xl"
        } to='/'>Home</NavLink>
       
    <NavLink className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-xl"
            : "p-2 rounded-md text-xl"
        } to='/assignment'>Assignment</NavLink>
    <NavLink className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-xl"
            : "p-2 rounded-md text-xl"
        } to='/create-assignment'>Create Assignments</NavLink>
    <NavLink className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-xl"
            : "p-2 rounded-md text-xl"
        } to='/pending-assignment'>Pending Assignments</NavLink>
    </>
  return (
    <div className="navbar bg-[#024950] text-white flex justify-between px-10">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navlinks}
          </ul>
        </div>
        <div className="flex  items-center gap-3">
            <img src={logo} className="w-20" alt="logo" />
            <h2 className="text-4xl">Group Guru</h2>

        </div>
      </div>
      <div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-3">
            {navlinks}
          </ul>
        </div>
        <div className="ml-10">
            
         <NavLink to='/login'  className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-xl"
            : "p-2 rounded-md text-xl"
        } >Login</NavLink>
         <NavLink className="btn rounded-full">SignUp</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
