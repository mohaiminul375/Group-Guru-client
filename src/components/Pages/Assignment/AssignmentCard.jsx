import { BsPencilSquare } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {
  console.log(assignment);
  const {_id, photo_url, assignment_title, difficulty_level, assignment_marks } =
    assignment;
  return (
    <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 rounded-md">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={photo_url}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
        </div>
        <div className="space-y-2">
          <h3
            title={assignment_title}
            className="text-xl font-bold text-[#024950] cursor-pointer"
          >
            {assignment_title.length > 35
              ? assignment_title.slice(0, 35) + ".."
              : assignment_title}
          </h3>
          <h4 className="text-base font-bold">
            Difficulty Level: <span>{difficulty_level}</span>
          </h4>
          <h4 className="text-base font-bold">
            Assignment Marks: <span>{assignment_marks}</span>
          </h4>
        </div>
        <div className="flex justify-between py-5 text-2xl font-bold">
          <Link>
            {" "}
            <BsPencilSquare
              title="update"
              className="cursor-pointer  hover:text-[#024950]"
            />
          </Link>
          <button>
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

export default AssignmentCard;
