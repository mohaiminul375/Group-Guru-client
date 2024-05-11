// import React from "react";

import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaCircleXmark } from "react-icons/fa6";

const AssignmentEvaluation = ({ assignment }) => {
  const {user}=useContext(AuthContext);
  const {_id, userEmail, examinee_name, assignment_submission, quick_note,assignment_title,assignment_marks,examinee_email,
  } =
    assignment;
    console.log(user?.email,examinee_email)

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (postMark) => {
    postMark.status='completed'
    console.log(postMark)
    if (user?.email == examinee_email) {
      return toast.error("examinee can't evaluate an assignment")
    }
    axios.patch(`http://localhost:5000/submitted-assignment/${_id}`,postMark)
    .then(data=>{
        console.log('update marks',data.data);
    })
  };

  return (
    <div className="modal-box w-full md:max-w-5xl">
        <div className="modal-action">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="rounded-full text-[#024950]  tooltip tooltip-bottom" data-tip='close'><FaCircleXmark className="text-4xl "/></button>
        </form>
      </div>
      <div className="flex justify-between">
        <div className="md:w-1/2">
          <div className="font-bold">
            <h2 className="text-xl font-bold text-[#024950]">Assignment_info</h2>
            <p className="text-base">{assignment_title}</p>
            <p className="text-base">{assignment_marks}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#024950]">Examinee_info</h2>
            <p className="text-base">{examinee_name}</p>
            <p className="text-base">{userEmail}</p>
          </div>
          {/* submission */}
          <div className="mt-5">
            <h2 className="text-xl font-bold text-[#024950]">Submission</h2>
            <div className="text-xl">
              <p className="font-bold">Pdf/doc Link</p>
              <p>{assignment_submission}</p>

              <p className="font-bold mt-3">Quick note</p>
              <p>{quick_note}</p>
            </div>
          </div>
        </div>
        {/*  */}

        <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2">
          <div className="flex gap-3">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="font-bold text-[#024950]">Obtain Marks</span>
              </label>
              <input
                className="input input-bordered"
                type="number"
                placeholder="please input mark"
                required
                {...register('obtain_marks')}
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="font-bold text-[#024950]">Feedback</span>
              </label>
              <input
                className="input input-bordered"
                type="text"
                placeholder="please input you feedback"
                required
                {...register('feedback')}
              />
            </div>
          </div>
          <div className="mt-5 text-end">
            <input
              className="p-3 bg-[#024950] cursor-pointer text-white rounded-full"
              type="submit"
              value="Post Mark"
            />
          </div>
        </form>
      </div>
    
      <Toaster/>
    </div>
  );
};

export default AssignmentEvaluation;
