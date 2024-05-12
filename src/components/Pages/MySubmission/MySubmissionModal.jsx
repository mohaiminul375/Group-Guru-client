// import React from 'react';

import axios from "axios";
import { useRouteError } from "react-router-dom";

const MySubmissionModal = ({ submission }) => {
  const {
    _id,
    obtain_marks,
    assignment_marks,
    feedback,
    assignment_submission,
  } = submission;

  return (
    <div className="modal-box w-full md:max-w-5xl">
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="btn">Close</button>
        </form>
      </div>
      <div className="text-left space-y-3 ">
        <h2 className="text-2xl text-[#024950]">
          Obtain Mark:{" "}
          <span className="text-black">
            {obtain_marks} out of {assignment_marks}
          </span>
        </h2>
        <h2 className="text-2xl text-[#024950]">FeedBack:</h2>
        <p className="text-lg">{feedback}</p>
      </div>
      <h2 className="text-center text-2xl font-bold">Your Submission</h2>
      <div className="mt-5">
        <iframe
          height="300px"
          width="100%"
          src={assignment_submission}
        ></iframe>
      </div>
    </div>
  );
};

export default MySubmissionModal;
