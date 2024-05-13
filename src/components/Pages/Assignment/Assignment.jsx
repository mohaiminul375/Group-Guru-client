// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import { useQuery } from "@tanstack/react-query";
import { CircleLoader } from "react-spinners";

const Assignment = () => {
  // const [assignments, setAssignments] = useState([]);
  const {data:assignments,isPending}=useQuery({
    queryFn:async()=>{
      const { data } = await axios.get("http://localhost:5000/all-assignment")
      return data;
    },
    queryKey:['all-assignment']
  })
  if(isPending){
    return (
      <div className="flex justify-center mt-16">
        <CircleLoader size={100} className="text-center" color="#024950" />
      </div>
    );
  }
  return (
    <div className="mt-16 md:max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-center text-4xl font-bold font-Jaini">All Assignment</h2>
        <p className="text-lg">See all assignment created by our Register User</p>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {
            assignments?.map(assignment=><AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
        }

      </div>
    </div>
  );
};

export default Assignment;
