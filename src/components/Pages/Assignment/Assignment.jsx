// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:5000/all-assignment");
      setAssignments(data);
    };
    getData();
  }, []);
  return (
    <div className="mt-16">
      <div className="text-center">
        <h2 className="text-center text-4xl font-bold font-Jaini">All Assignment</h2>
        <p className="text-lg">See all assignment created by our Register User</p>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {
            assignments.map(assignment=><AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
        }

      </div>
    </div>
  );
};

export default Assignment;
