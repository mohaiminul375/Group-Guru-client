import MySubmissionModal from "./MySubmissionModal";
import PropTypes from 'prop-types';
const MySubmissionCard = ({ idx, submission }) => {
  console.log("sub", submission);
  console.log("idx", idx);
  const { _id,assignment_title, assignment_marks, status, obtain_marks } =
    submission;
  return (
    <tr className="border-2 border-[#024950] font-bold">
      <th>{idx + 1}</th>
      <td>{assignment_title}</td>
      <td><span className={`${status == 'pending'&& 'bg-blue-400 text-white p-2 rounded-full font-normal'} ${status=='completed' && 'bg-green-700 text-white p-2 rounded-full font-normal'}`}>{status}</span></td>
      <td>
        {obtain_marks ? obtain_marks : "pending"}/{assignment_marks}
      </td>
      <td>
        <button
          onClick={() => document.getElementById(`${_id}`).showModal()}
          disabled={status == "pending"}
          className="p-2 bg-[#024950] text-white rounded-full disabled:cursor-not-allowed text-xs md:text-base"
        >
          See feedback
        </button>
      </td>
      <dialog id={_id} className="modal">
        <MySubmissionModal
        submission={submission}></MySubmissionModal>
      </dialog>
    </tr>
  );
};
MySubmissionCard.propTypes={
idx:PropTypes.number,
submission:PropTypes.object
}
export default MySubmissionCard;
