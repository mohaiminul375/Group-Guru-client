import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import SubmitAssignment from "../SubmitAssignment/SubmitAssignment";
import { useQuery } from "@tanstack/react-query";
import { CircleLoader } from "react-spinners";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AssignmentDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  console.log(id);

  // console.log(data);
  const { data: assignment_details, isPending } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/all-assignment/${id}`);
      return data;
    },
    queryKey: ["assignment-details"],
  });
  if (isPending) {
    return (
      <div className="flex justify-center mt-16">
        <CircleLoader size={100} className="text-center" color="#024950" />
      </div>
    );
  }
  const {
    assignment_title,
    assignment_creator,
    userEmail,
    photo_url,
    assignment_description,
    difficulty_level,
    assignment_marks,
    due_date,
  } = assignment_details;

  return (
    <div className="mt-16 md:max-w-6xl mx-auto">
      <Helmet>
        <title>Group Guru | Details</title>
      </Helmet>
      <div className="w-full md:max-w-5xl mb-10">
        <Link to="/assignment">
          <h5 className="flex gap-3 items-center text-2xl font-Jaini">
            <FaArrowLeft />
            Back to Assignment page
          </h5>
        </Link>
      </div>
      <div className="border-2 border-[#024950]  mx-auto p-8 rounded-md bg-[#024a5050]">
        <h2 className="text-3xl font-bold text-[#024950]">
          {assignment_title}
        </h2>
        <h5 className="text-base font-bold flex flex-row gap-3">
          Created By:{" "}
          <div>
            {assignment_creator}
            <br />
            {userEmail}
          </div>
        </h5>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <img className="mt-8" src={photo_url} alt="" />
            <p className="text-xl mt-4">
              <span className="font-bold underline">Description: </span>
              <span>{assignment_description}</span>
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="space-y-3">
              <h5 className="text-xl font-bold">
                Assignment Difficulty:{" "}
                <span className="text-[#024950]">{difficulty_level}</span>
              </h5>
              <h5 className="text-xl font-bold">
                Assignment Mark:{" "}
                <span className="text-[#024950]">{assignment_marks}</span>
              </h5>
              <h5 className="text-xl font-bold">
                Assignment Deadline:{" "}
                <span className="text-[#024950]">
                  {new Date(due_date).toLocaleDateString()}
                </span>
              </h5>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
                className="bg-[#024950] p-3 rounded-full text-white"
              >
                Take this assignment
              </button>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_4" className="modal">
        {" "}
        <SubmitAssignment data={assignment_details}></SubmitAssignment>
      </dialog>
    </div>
  );
};

export default AssignmentDetails;
