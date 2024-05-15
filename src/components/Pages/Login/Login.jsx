import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/login.jpg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaCircleXmark } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const { logIn, googleLogin, twitterLogin, facebookLogin } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (password.length < 6) {
      setError("Password must be 6 character or more");
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      setError(
        "Password must contain at least one uppercase letter and one lowercase letter."
      );
      return;
    }
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        axios
          .post(
            "https://gorup-guru-server.vercel.app/jwt",
            { email: result?.user?.email },
            { withCredentials: true }
          )
          .then((data) => {
            console.log("jwt", data.data);
          });
        toast.success("login successfully");
        setTimeout(() => {
          navigate(from);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setError(error?.message);
      });
  };

  const handleTwitterLogin = () => {
    twitterLogin()
      .then((result) => {
        console.log(result.user);
        axios
          .post(
            "https://gorup-guru-server.vercel.app/jwt",
            { email: result?.user?.email },
            { withCredentials: true }
          )
          .then((data) => {
            console.log("jwt", data.data);
          });
        toast.success("login successfully");
        setTimeout(() => {
          navigate(from);
        }, 1000);
      })
      .catch((error) => {
        console.log(error?.message);
        setError(error?.message);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        axios
          .post(
            "https://gorup-guru-server.vercel.app/jwt",
            { email: result?.user?.email },
            { withCredentials: true }
          )
          .then((data) => {
            console.log("jwt", data.data);
          });
        toast.success("login successfully");
        setTimeout(() => {
          navigate(from);
        }, 1000);
      })
      .catch((error) => {
        setError(error?.message);
      });
  };

  const handleRemoveError = () => {
    setError("");
  };
  return (
    <div className="mt-16 md:max-w-6xl mx-auto">
      <div className="flex justify-evenly items-center">
        <div className="w-[40%] hidden md:flex">
          <img src={login} className="w-full" alt="" />
        </div>
        {/* login form */}
        <section className="bg-base-200 rounded-md h-full w-full md:w-[50%]">
          {error && (
            <p className="mt-5 text-center text-red-700 font-bold flex items-center justify-center gap-2">
              {error}
              <FaCircleXmark onClick={handleRemoveError} />
            </p>
          )}
          <div className="flex items-center justify-center  px-12 mx-auto w-full">
            <form onSubmit={handleLogIn} className="w-full">
              <h1 className="mt-3 text-2xl font-bold capitalize sm:text-3xl text-base-content text-center">
                Log In
              </h1>

              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-[#024950] dark:focus:border-blue-300 focus:ring-[#024950] focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  name="email"
                  required
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  type={showPassword ? "text" : "password"}
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11   focus:border-[#024950] dark:focus:border-blue-300 focus:ring-[#024950] focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                  name="password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 text-xl"
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#024950] rounded-lg hover:bg-[#024a50c5] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Login
                </button>

                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                  or Login in with
                </p>

                <button
                  onClick={handleGoogleLogin}
                  href="#"
                  className="flex items-center justify-center px-6 py-3 mt-4 text-white transition-colors duration-300 transform border rounded-lg bg-[#024950] w-full"
                >
                  <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>

                  <span className="mx-2">Log in with Google</span>
                </button>
                <button
                  onClick={handleTwitterLogin}
                  className="flex items-center justify-center px-6 py-3 mt-4 text-white transition-colors duration-300 transform border rounded-lg bg-[#024950] w-full"
                >
                  <svg
                  className="w-6 h-6 mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.865 9.865 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.384 4.485A13.975 13.975 0 0 1 1.671 3.149a4.922 4.922 0 0 0-.667 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.229-.616v.061c0 2.386 1.697 4.374 3.946 4.827a4.922 4.922 0 0 1-2.224.084 4.927 4.927 0 0 0 4.6 3.416 9.868 9.868 0 0 1-6.1 2.105c-.396 0-.787-.023-1.17-.068a13.944 13.944 0 0 0 7.557 2.213c9.054 0 14.002-7.496 14.002-13.985 0-.21 0-.423-.015-.634A9.993 9.993 0 0 0 24 4.557z" />
                  </svg>

                  <span className="mx-2">Log in with Twitter</span>
                </button>

                <div className="my-6 text-center ">
                  <p>
                    Are you new here?
                    <Link
                      className="underline hover:text-[#024950]"
                      to="/register"
                    >
                      Please Register
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
