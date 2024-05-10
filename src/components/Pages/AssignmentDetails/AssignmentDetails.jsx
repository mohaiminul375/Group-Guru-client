// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
  const { data } = useLoaderData();
  console.log(data);
  const {
    assignment_title,
    userEmail,
    photo_url,
    assignment_description,
    difficulty_level,
    assignment_marks,
    due_date,
  } = data;



  return (
    <div className="mt-16">
      <div className="border-2 border-[#024950] w-full md:max-w-5xl mx-auto p-8 rounded-md bg-base-200">
        <h2 className="text-3xl font-bold text-[#024950]">
          {assignment_title}
        </h2>
        <h5 className="text-base font-bold">
          Created By: <span>{userEmail}</span>
        </h5>
        <div className="flex justify-between">
          <div className="md:w-1/2">
            <img className="mt-8" src={photo_url} alt="" />
            <p className="text-xl mt-4">{assignment_description}</p>
          </div>
          <div className="md:w-1/2">
            <div className="space-y-3">
              <h5 className="text-xl font-bold">
                Assignment Difficulty:<span>{difficulty_level}</span>
              </h5>
              <h5 className="text-xl font-bold">
                Assignment Mark:<span>{assignment_marks}</span>
              </h5>
              <h5 className="text-xl font-bold">
                Assignment Deadline:<span>{due_date.toLocaleString()}</span>
              </h5>
            </div>
            <div className="mt-8 flex justify-end">
          <Link className="bg-[#024950] p-3 rounded-full text-white">Take this assignment</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
