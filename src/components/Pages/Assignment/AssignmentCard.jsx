import { BsPencilSquare } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from 'prop-types';
const AssignmentCard = ({ assignment }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // console.log(assignment);
  const {
    _id,
    photo_url,
    assignment_title,
    difficulty_level,
    assignment_marks,
    userEmail,
  } = assignment;
  // tan stack query

  const { mutateAsync } = useMutation({
    mutationFn: async ({ id }) => {
      const { data } = await axiosSecure.delete(`/all-assignment/${id}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['all-assignment']});
    },
  });
  // delete
  const handleDeleteAssignment =  (id) => {
    if (user?.email !== userEmail) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You haven't access delete,Because you didn't create this assignment",
      });
    }

    Swal.fire({
      title: "Are you sure want to delete?",
      text: "You will lost your data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
       mutateAsync({ id });
        Swal.fire({
          title: "Deleted!",
          text: "Your data has been deleted.",
          icon: "success",
        });
      }
    });
    //
  };

  const handleUpdateNavigate = () => {
    if (!user) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can update after login",
      });
    } else {
      navigate(`/update-assignment/${_id}`);
    }
  };
  return (
    <div className="w-full md:max-w-lg p-4 shadow-md bg-gray-50 rounded-md  lg:transition lg:hover:scale-105">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={photo_url}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
        </div>
        <div className="space-y-2">
          <h3
            title={assignment_title}
            className="text-xl font-bold text-[#024950] cursor-pointer"
          >
            {assignment_title.length > 32
              ? assignment_title.slice(0, 32) + ".."
              : assignment_title}
          </h3>
          <h4 className="text-base font-bold text-black">
            Difficulty Level: <span>{difficulty_level}</span>
          </h4>
          <h4 className="text-base font-bold text-black">
            Assignment Marks: <span>{assignment_marks}</span>
          </h4>
        </div>
        <div className="flex justify-between py-5 text-2xl font-bold text-black">
          <button onClick={handleUpdateNavigate}>
            {" "}
            <BsPencilSquare
              title="update"
              className="cursor-pointer  hover:text-[#024950]"
            />
          </button>
          <button onClick={() => handleDeleteAssignment(_id)}>
            <IoTrashOutline
              title="delete"
              className="cursor-pointer  hover:text-red-800"
            />
          </button>
          <Link to={`/details/${_id}`}>
            {" "}
            <FaArrowRight
              title="see assignment details"
              className="cursor-pointer  hover:text-[#024950]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes={
  assignment:PropTypes.object,

}

export default AssignmentCard;
