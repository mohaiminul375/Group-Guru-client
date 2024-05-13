import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import MySubmissionCard from "./MySubmissionCard";

const MySubmission = () => {
  const { user } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/submitted-assignment?email=${user?.email}`,{withCredentials:true})
      .then((data) => {
        // console.log(data.data);
        setSubmissions(data.data);
      });
  }, []);
  return (
    <div className="mt-16 md:max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-Jaini">My Submission</h2>
      </div>
      <div className="mt-16">
        <div className="overflow-x-auto">
          <table className="table border-2 border-[#024950] text-center">
            {/* head */}
            <thead className="border-2 border-[#024950]">
              <tr className="border-2 border-[#024950] text-base md:text-base font-bold text-[#024950]">
                <th>SL</th>
                <th>Assignment Title</th>
                <th>Status</th>
                <th>Obtain Mark/<br></br>Assignment Marks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {/* <tr className="border-2 border-[#024950]">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr> */}
              {/* row 2 */}
              {submissions.map((submission, idx) => (
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
