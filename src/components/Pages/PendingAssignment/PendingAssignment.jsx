// import React from 'react';
import { useEffect, useState } from "react";
import PendingAssignmentTable from "./PendingAssignmentTable";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { CircleLoader } from "react-spinners";

const PendingAssignment = () => {
  const axiosSecure = useAxiosSecure();
  // const [pendingAssignment, setPendingAssignment] = useState([]);
  const {
    data: pendingAssignment = [],
    isPending,
    refetch,
    isError,
    error,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        "/pending-assignment?status=pending"
      );
      return data;
    },
    queryKey: ["pending-assignment"],
  });
  if (isPending) {
    return (
      <div className="flex justify-center mt-16">
        <CircleLoader size={100} className="text-center" color="#024950" />
      </div>
    );
  }
  //   useEffect(() => {
  //  .then((data) => {
  //       setPendingAssignment(data.data);
  //     });
  //   }, []);
  return (
    <div className="mt-16 md:max-w-6xl mx-auto">
      <div className="text-center text-4xl font-bold font-Jaini">
        <h2>ALL Pending Assignment</h2>
      </div>
      {pendingAssignment.length == 0 && (
        <div>
          <h2 className="text-4xl text-center my-5 text-[#024950]">
            No Pending Assignment right now
          </h2>
        </div>
      )}
      <div className="mt-16">
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead className="border-2 border-[#024950]">
              <tr className="text-base font-bold text-[#024950] border-2 border-[#024950]">
                <th>SL</th>
                <th>Assignment Title</th>
                <th>Examinee</th>
                <th>Marks </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {pendingAssignment.map((assignment, idx) => (
                <PendingAssignmentTable
                  key={assignment._id}
                  idx={idx}
                  assignment={assignment}
                ></PendingAssignmentTable>
              ))}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignment;
