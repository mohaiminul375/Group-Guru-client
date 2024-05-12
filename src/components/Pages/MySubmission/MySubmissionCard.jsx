import MySubmissionModal from "./MySubmissionModal";

const MySubmissionCard = ({ idx, submission }) => {
  console.log("sub", submission);
  console.log("idx", idx);
  const { _id,assignment_title, assignment_marks, status, obtain_marks } =
    submission;
  return (
    <tr className="border-2 border-[#024950] font-bold">
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
          className="p-2 bg-[#024950] text-white rounded-full disabled:cursor-not-allowed text-xs md:text-base"
        >
          See feedback
        </button>
      </td>
      <dialog id="my_modal_4" className="modal">
        <MySubmissionModal id={_id}></MySubmissionModal>
      </dialog>
    </tr>
  );
};

export default MySubmissionCard;
