import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.due_date = startDate;
    console.log(data);
  };
  return (
    <div className="mt-16 bg-[#024a5050] rounded-xl">
      <div className="border-2 rounded-xl">
        <h2 className="text-3xl text-center font-bold">
          Create Your Assignment
        </h2>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full p-8 space-y-4"
          >
            {/* row1 */}
            <div className="md:flex flex-row gap-5 ">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-base font-bold">User Email</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="enter your email"
                  required
                  value={user?.email}
                  readOnly
                  {...register("userEmail")}
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-base font-bold">Assignment Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="enter assignment title"
                  required
                  {...register("assignment_title")}
                />
              </div>
            </div>
            {/* row2 */}
            <div className="md:flex flex-row gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-base font-bold">
                    Assignment difficulty Level
                  </span>
                </label>
                <select
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
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-base font-bold">Assignment Marks</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered"
                  placeholder="you assignment marks"
                  {...register("assignment_marks")}
                  required
                />
              </div>
            </div>
            {/* row3 */}
            <div className="md:flex flex-row gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-base font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="input your photo url"
                  required
                  {...register("photo_url")}
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="text-base font-bold">Due Date</span>
                </label>
                <DatePicker
                  className="w-full h-[48px] input-bordered"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  required
                />
              </div>
            </div>
            {/* row4 */}
            <div className="md:flex flex-row gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-base font-bold">User Email</span>
                </label>
                <textarea
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
              value="create assignment"
              className="w-full py-2 cursor-pointer border bg-[#024950] text-white rounded-md"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
