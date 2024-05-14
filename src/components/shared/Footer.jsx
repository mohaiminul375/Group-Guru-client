import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import playStore from "../../assets/playstore.png";
import appStore from "../../assets/appstore.png";
const Footer = () => {
  return (
    <div className="">
      <footer className="bg-[#024950] mt-36 text-white">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <div className="flex items-center gap-3">
                  <img className="w-10 md:w-20" src={logo} alt="" />
                  <h2 className="text-4xl font-Jaini font-bold">
                    G<span className="text-xs font-Zilla-Slab">roup Guru</span>
                  </h2>
                </div>

                <p className="max-w-sm mt-2 ">
                  Connect, learn, and grow together with Group Guru's innovative
                  study platform.
                </p>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div>
                  <h3 className=" uppercase text-lg font-bold">Contact</h3>
                  <span className="block mt-2 text-base hover:underline">
                    group-guru@gmail.com
                  </span>
                  <span className="block mt-2 text-base  hover:underline">
                    +8809632-1025678
                  </span>
                  <div className="text-xl font-bold flex space-x-10 mt-5">
                    <Link to="https://facebook.com" target="_blank">
                      <FaFacebook />
                    </Link>
                    <Link to="https://twitter.com" target="_blank">
                      <FaXTwitter />
                    </Link>
                    <Link to="https://youtube.com" target="_blank">
                      <FaYoutube />
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className=" uppercase text-lg font-bold">Our APPs</h3>
                  <div className="space-y-3">
                    <img className="w-40" src={playStore} alt="play-store" />
                    <img className="w-40" src={appStore} alt="app-store" />
                  </div>
                </div>

                <div>
                  <h3 className=" uppercase text-lg font-bold">Newsletter</h3>
                  {/* input */}
                  <div className="relative mt-5">
                  <input className="bg-gray-900 w-3/4 h-10 rounded-l-md input-bordered pl-2" type="email" name="" id="" placeholder="input your email" />
                  <button className="absolute border rounded-r-md h-10 p-2 bg-white text-[#024950] font-bold">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-200 border-none "/>

          <div>
            <p className="text-center">
              © 2024 - All rights reserved by{" "}
              <span className="font-Jaini">Group Guru</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
