// import React from 'react';

import AssignmentEvaluation from "./AssignmentEvaluation";

const PendingAssignmentTable = ({ assignment }) => {
  console.log(assignment);
  const {
    assignment_title,
    userEmail,
    assignment_creator,
    examinee_email,
    examinee_name,
    assignment_marks,
  } = assignment;
  return (
    <tr>
      <th>1</th>
      <td>{assignment_title}</td>
      <td>
        {assignment_creator}
        <br />
        {userEmail}
      </td>
      <td>
        {examinee_name}
        <br />
        {examinee_email}
      </td>
      <td>{assignment_marks}</td>
      <td>
        <button
          onClick={() => document.getElementById("my_modal_4").showModal()}
          className="p-3 rounded-full bg-[#024950] text-white"
        >
          Give Mark
        </button>
      </td>
      <dialog id="my_modal_4" className="modal">
        <AssignmentEvaluation
        assignment={assignment}
        ></AssignmentEvaluation>
      </dialog>
    </tr>
  );
};

export default PendingAssignmentTable;
