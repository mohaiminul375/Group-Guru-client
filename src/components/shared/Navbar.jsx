import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  console.log('user form navbar',user)
  const navlinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-base"
            : "p-2 rounded-md text-base"
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-base"
            : "p-2 rounded-md text-base"
        }
        to="/assignment"
      >
        Assignment
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-base"
            : "p-2 rounded-md text-base"
        }
        to="/create-assignment"
      >
        Create Assignments
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-base"
            : "p-2 rounded-md text-base"
        }
        to="/pending-assignment"
      >
        Pending Assignments
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-[#024950] text-white flex justify-between md:px-10">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#024950] rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <div className="flex  items-center gap-3">
          <img src={logo} className="w-10 md:w-20" alt="logo" />
          <h2 className="text-4xl font-Jaini font-bold">G<span className="text-xs font-Zilla-Slab">roup Guru</span></h2>
        </div>
      </div>
      <div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-3">
            {navlinks}
          </ul>
        </div>
        {/*  */}
        <div className="ml-10">
          {user ? (
            <div className='dropdown dropdown-end z-10'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#024950]  rounded-box w-52'
            >
              <li className="hover:border-2">
               <Link to='/update-profile'>Update Profile</Link>
              </li>
              <li className="hover:border-2">
              <Link to='/my-submission'>My Submission</Link>
              </li>
              <li className='mt-2'>
                <button
                  onClick={logOut}
                  className='bg-[#024950]  block text-center hover:border-2'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>



          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white font-bold text-xl mr-2"
                    : "p-2 rounded-md text-xl mr-2"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "btn rounded-full border-black font-bold text-base mr-2"
                    : "btn rounded-full text-base mr-2"
                }
              >
                SignUp
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
