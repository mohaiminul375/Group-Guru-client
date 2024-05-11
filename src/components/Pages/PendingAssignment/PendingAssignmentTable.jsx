// import React from 'react';

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
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </tr>
  );
};

export default PendingAssignmentTable;
