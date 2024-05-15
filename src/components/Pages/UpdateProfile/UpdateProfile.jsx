import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const {user,updateUserProfile}=useContext(AuthContext);
    const navigate=useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit=(data)=>{
      const {userName,photoURL}=data;
        updateUserProfile(userName, photoURL);

        toast.success("profile Update Successfully");
        setTimeout(() => {
          navigate('/');
        }, 1000);
    }
    
    return (
        <div className="mt-10">
        <Helmet>
          <title>Group Guru | Update Profile</title>
        </Helmet>
        <div className="border-2  rounded-lg bg-[#024a5050] w-full lg:w-1/2 mx-auto p-10 ">
          <h3 className="text-2xl text-center font-bold mb-5">
            Update your Profile
          </h3>
          <div className="avatar text-center flex justify-center gap-5">
            <div className="w-24 rounded-full ">
              <img src={user?.photoURL} />
            </div>
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-xl font-bold">Name: {user?.displayName}</h3>
            <h5>Email: {user?.email}</h5>
          </div>
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Update Your Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="New name"
                className="input input-bordered"
                {...register('userName')}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user?.email}
                placeholder="email"
                className="input input-bordered"
                disabled
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Update Photo</span>
              </label>
              <input
              defaultValue={user?.photoURL}
                type="text"
                placeholder="new photo url"
                className="input input-bordered"
                {...register('photoURL')}
                required
              />
            </div>
            <div className="flex justify-center mt-5">
              <button className="btn bg-[#024950] text-white">Update Now</button>
            </div>
          </form>
        </div>
        <Toaster/>
      </div>
    );
};

export default UpdateProfile;