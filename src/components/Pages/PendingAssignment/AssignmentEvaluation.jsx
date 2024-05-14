import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import PropTypes from 'prop-types';

const AssignmentEvaluation = ({ assignment }) => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    assignment_submission,
    quick_note,
    assignment_marks,
    examinee_email,
    status,
  } = assignment;
  console.log(assignment);

  // tanStack query
  const { mutateAsync } = useMutation({
    mutationFn: async ({ _id, postMark }) => {
      const { data } = await axiosSecure.patch(
        `/submitted-assignment/${_id}`,
        postMark
      );
      return data;
    },
    onSuccess: () => {
      toast.success("update successfully please close the modal");
      queryClient.invalidateQueries({ queryKey: ["pending-assignment"] });
      queryClient.invalidateQueries({ queryKey: ["assignment-submission"] });
    },
  });

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (postMark) => {
    console.log("assignment_marks", assignment_marks);
    console.log("obtain_marks", postMark.obtain_marks);
    postMark.status = "completed";

    if (user?.email == examinee_email) {
      return toast.error("examinee can't evaluate an assignment");
    } else if (assignment_marks < postMark.obtain_marks) {
      toast.error(`please submit less than ${assignment_marks}`);
      return;
    } else if (postMark.obtain_marks < 0) {
      toast.error(`submit a number 0 or above`);
      return;
    }
    
    await mutateAsync({ _id, postMark });
    reset()
    // console.log(postMark);
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
      <div className="flex flex-col md:flex-row justify-between">
        {/*  */}
        <div className="md:w-1/2 text-left space-y-3">
          <h2 className="text-2xl text-left text-[#024950]">Submission Info</h2>
          <p className="font-bold text-[#024950] text-lg">
            Submission Link:{" "}
            <Link to={`${assignment_submission}`} target="_blank">
              <span className="text-black underline text-base">
                {assignment_submission}
              </span>
            </Link>
          </p>
          <p className="font-bold text-[#024950] text-lg">Submission Note</p>
          <p className="text-black text-base">{quick_note}</p>
        </div>

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
                {...register("obtain_marks")}
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
                {...register("feedback")}
              />
            </div>
          </div>
          <div className="mt-5 text-end">
            <input
              disabled={status == "completed"}
              className="p-3 bg-[#024950] cursor-pointer text-white rounded-full"
              type="submit"
              value="Post Mark"
            />
          </div>
        </form>
      </div>

      <Toaster />
    </div>
  );
};
AssignmentEvaluation.propTypes={
  assignment:PropTypes.object
}
export default AssignmentEvaluation;
