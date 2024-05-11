// import React from 'react';

import AssignmentEvaluation from "./AssignmentEvaluation";

const PendingAssignmentTable = ({ assignment,idx }) => {
  console.log(assignment);
  const {
    _id,
    assignment_title,
    userEmail,
    assignment_creator,
    examinee_email,
    examinee_name,
    assignment_marks,
  } = assignment;
  const handleId=(id)=>{
    const modal_id=id;
    console.log(modal_id)
  }
  return (
    <tr>
      <th>{idx+1}</th>
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
        
        onClick={() => { document.getElementById(`${_id}`).showModal()}}
          className="p-3 rounded-full bg-[#024950] text-white"
        >
          Give Mark
        </button>
       
      </td>
      <dialog id={`${_id}`} className="modal">
        <AssignmentEvaluation
        assignment={assignment}
        ></AssignmentEvaluation>
      </dialog>
    </tr>
  );
};

export default PendingAssignmentTable;
