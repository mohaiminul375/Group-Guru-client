import MySubmissionModal from "./MySubmissionModal";

const MySubmissionCard = ({ idx, submission }) => {
  console.log("sub", submission);
  console.log("idx", idx);
  const { assignment_title, assignment_marks, status, obtain_marks } =
    submission;
  return (
    <tr className="border-2 border-[#024950] text-sm md:text-lg">
      <th>{idx + 1}</th>
      <td>{assignment_title}</td>
      <td>{status}</td>
      <td>
        {obtain_marks ? obtain_marks : "pending"}/{assignment_marks}
      </td>
      <td>
        <button
          onClick={() => document.getElementById("my_modal_4").showModal()}
          disabled={status == "pending"}
          className="p-2 bg-[#024950] text-white rounded-full disabled:cursor-not-allowed text-xs"
        >
          See feed back
        </button>
      </td>
      <dialog id="my_modal_4" className="modal">
        <MySubmissionModal></MySubmissionModal>
      </dialog>
    </tr>
  );
};

export default MySubmissionCard;
