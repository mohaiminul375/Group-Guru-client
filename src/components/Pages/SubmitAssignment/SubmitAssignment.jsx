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
    userEmail,
    assignment_title,
    assignment_marks,

    assignment_creator,
  } = data;
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  //   submission
  const onSubmit = async (submission) => {
    submission.status = "pending";
    submission.assignment_marks= assignment_marks;


    console.log(submission);
    const { data } = await axios.post(
      `http://localhost:5000/submitted-assignment`,
      submission
    );
    console.log("res from server", data);
    if (data.insertedId) {
      toast.success("submitted successful");
    }
  };

  return (
    <div className="modal-box w-full md:max-w-5xl">
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="rounded-full text-[#024950]  tooltip tooltip-bottom" data-tip='close'><FaCircleXmark className="text-4xl "/></button>
        </form>
      </div>
      <h3 className="font-bold text-2xl text-center">Submit Assignment</h3>
      <div className="mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-8 space-y-4"
        >
          {/* row1 */}
          <div className="md:flex flex-row gap-5 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-base font-bold">Creator Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder=""
                required
                value={userEmail}
                readOnly
                {...register("userEmail")}
              />
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-base font-bold">Assignment Creator</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="enter your name"
                value={assignment_creator}
                required
                {...register("assignment_creator")}
              />
            </div>
          </div>
          <div className="md:flex flex-row gap-5 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-base font-bold">Examinee Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="enter your email"
                required
                value={user?.email}
                readOnly
                {...register("examinee_email")}
              />
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-base font-bold">Examinee Name</span>
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
          {/* row2 */}
          <div className="md:flex flex-row gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-base font-bold">
                  Submit your assignment Pdf/doc Link
                </span>
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
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-base font-bold">
                  Submit your assignment Pdf/doc Link
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="enter assignment title"
                required
                {...register("assignment_submission")}
              />
            </div>
          </div>

          {/* row5 */}
          <div className="md:flex flex-row gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-base font-bold">Add a quick note</span>
              </label>
              <textarea
                name=""
                id=""
                rows={5}
                placeholder="input quick note "
                className="rounded-md p-8"
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

      <Toaster />
    </div>
  );
};

export default SubmitAssignment;
