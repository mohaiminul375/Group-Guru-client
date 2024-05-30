import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import MySubmissionCard from "./MySubmissionCard";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { CircleLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

const MySubmission = () => {
  const { user } = useContext(AuthContext);
  // const [submissions, setSubmissions] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { data: submissions = [], isPending } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/submitted-assignment?email=${user?.email}`
      );
      return data;
    },
    queryKey: ["assignment-submission"],
  });
  if (isPending) {
    return (
      <div className="flex justify-center mt-16">
        <CircleLoader size={100} className="text-center" color="#024950" />
      </div>
    );
  }
// console.log()
  return (
    <div className="mt-16 md:max-w-6xl mx-auto">
       <Helmet>
                <title>Group Guru | My Submission</title>
            </Helmet>
      <div className="text-center">
        <h2 className="text-4xl font-bold font-Jaini">My Submission</h2>
      </div>
      {submissions.length == 0 && (
        <div>
          <h2 className="text-4xl text-center my-5">
            You have't submit any assignment yet
          </h2>
        </div>
      )}
      <div className="mt-16">
        <div className="overflow-x-auto">
          {/* <p className="mb-3 bg-[#024950]  p-3 text-white rounded-full">Average Marks:[]</p> */}
          <table className="table border-2 border-[#024950] text-center">
            {/* head */}
            <thead className="border-2 border-[#024950]">
              <tr className="border-2 border-[#024950] text-base md:text-base font-bold text-[#024950]">
                <th>SL</th>
                <th>Assignment Title</th>
                <th>Status</th>
                <th>
                  Obtain Mark/<br></br>Assignment Marks
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
          
            
              {submissions?.map((submission, idx) => (
                <MySubmissionCard
                  idx={idx}
                  key={submission._id}
                  submission={submission}
                ></MySubmissionCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySubmission;
