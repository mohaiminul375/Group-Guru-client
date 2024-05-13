// import React from 'react';
import { FaCircleXmark } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
// import toast from "react-hot-toast";

const SubmitAssignment = ({ data }) => {
  console.log(data);
  const {
 
    assignment_title,
    assignment_marks,

  } = data;
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  //   submission
  const onSubmit = async (submission) => {
    submission.status = "pending";
    submission.assignment_marks = assignment_marks;
   if(!submission.assignment_submission.startsWith('https://')){
    toast.error('please input a valid link')
   return
   }
    console.log(submission);
    const { data } = await axios.post(
      `http://localhost:5000/submitted-assignment`,
      submission,{withCredentials:true}
    );
    console.log("res from server", data);
    if (data.insertedId) {
      reset();
      toast.success("submitted successful. Please close the modal");
    }
  };

  return (
    <div className="modal-box w-full md:max-w-5xl">
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button
            className="rounded-full text-[#024950]  tooltip tooltip-bottom"
            data-tip="close"
          >
            <FaCircleXmark className="text-4xl " />
          </button>
        </form>
      </div>
      <h3 className="font-bold text-2xl text-center font-Jaini">
        Submit Assignment
      </h3>
      <div className="mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-8 space-y-4"
        >
          {/* row1 */}
          <div className="md:flex flex-row gap-5 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-base font-bold"><span className="text-red-600">*</span>Examinee Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="enter your email"
                required
                value={user?.email}
                readOnly={user?.email}
                {...register("examinee_email")}
              />
            </div>
{/* row2 */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-base font-bold"><span className="text-red-600">*</span>Examinee Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="enter your name"
                value={user?.displayName}
                required
                {...register("examinee_name")}
              />
            </div>
          </div>
          {/* row3 */}
          <div className="md:flex flex-row gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-base font-bold"><span className="text-red-600">*</span>Assignment Title</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="enter assignment title"
                required
                readOnly
                defaultValue={assignment_title}
                {...register("assignment_title")}
              />
            </div>
            {/* row4 */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-base font-bold">
                <span className="text-red-600">*</span>
                  Submit your assignment Pdf/doc Link
                  <span className="text-red-600"> (google drive)</span>
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="enter assignment link"
                required
                {...register("assignment_submission")}
              />
            </div>
          </div>

          {/* row5 */}
          <div className="md:flex flex-row gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-base font-bold"><span className="text-red-600">*</span>Add a quick note</span>
              </label>
              <textarea
                name=""
                id=""
                rows={5}
                placeholder="input quick note "
                className="input-border  rounded-md p-8"
                required
                {...register("quick_note")}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-full text-xl py-2 cursor-pointer border bg-[#024950] text-white rounded-md"
          />
        </form>
      </div>

      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default SubmitAssignment;
