import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../provider/AuthProvider";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
const UpdateAssignment = () => {
    const navigate=useNavigate();
  const { data } = useLoaderData();
  // console.log(data);
  const {
    _id,
    assignment_title,
    difficulty_level,
    assignment_marks,
    due_date,
    photo_url,
    assignment_description,
  } = data;
  const [startDate, setStartDate] = useState(new Date(due_date));
  // const {user}=useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (update) => {
    update.due_date = startDate;
    console.log("update data", update);
    axios.patch(`http://localhost:5000/all-assignment/${_id}`, update)
    .then(data=>{

        console.log(data.data);
        if(data.data.
            modifiedCount){
                toast.success('update successfully')
                setTimeout(() => {
                    navigate('/assignment')
                }, 1000);
            }
    })
  };

  return (
    <div className="mt-16 bg-[#024a5050] rounded-xl">
      <div className="border-2 rounded-xl">
        <h2 className="text-3xl text-center font-bold mt-5 font-Jaini">
          Update Assignment Info
        </h2>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full p-8 space-y-4"
          >
            {/* row1 */}

            {/* row2 */}
            <div className="md:flex flex-row gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-base font-bold">Assignment Title</span>
                </label>
                <input
                  defaultValue={assignment_title}
                  type="text"
                  className="input input-bordered"
                  placeholder="enter assignment title"
                  required
                  {...register("assignment_title")}
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-base font-bold">
                    Assignment difficulty Level
                  </span>
                </label>
                <select
                  defaultValue={difficulty_level}
                  className="select select-bordered w-full"
                  {...register("difficulty_level")}
                  required
                >
                  <option value="">Please Select an option</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>
            {/* row3 */}
            <div className="md:flex flex-row gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-base font-bold">Assignment Marks</span>
                </label>
                <input
                  defaultValue={assignment_marks}
                  type="number"
                  className="input input-bordered"
                  placeholder="you assignment marks"
                  {...register("assignment_marks")}
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-base font-bold">Due Date</span>
                </label>
                <DatePicker
                  className="w-full h-[48px] input-bordered"
                  selected={startDate}
                  //   defaultValue={due_date}
                  onChange={(date) => setStartDate(date)}
                  required
                />
              </div>
            </div>
            {/* row3 */}
            <div className="md:flex flex-row gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-base font-bold">Photo URL</span>
                </label>
                <input
                  defaultValue={photo_url}
                  type="text"
                  className="input input-bordered"
                  placeholder="input your photo url"
                  required
                  {...register("photo_url")}
                />
              </div>
            </div>
            {/* row5 */}
            <div className="md:flex flex-row gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-base font-bold">Description</span>
                </label>
                <textarea
                  defaultValue={assignment_description}
                  name=""
                  id=""
                  rows={5}
                  placeholder="input assignment description "
                  className="rounded-md p-8"
                  required
                  {...register("assignment_description")}
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Create Assignment"
              className="w-full text-xl py-2 cursor-pointer border bg-[#024950] text-white rounded-md"
            />
          </form>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default UpdateAssignment;
