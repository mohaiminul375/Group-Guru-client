import PropTypes from 'prop-types';
import { FaCircleXmark } from 'react-icons/fa6';


const MySubmissionModal = ({ submission }) => {
  const {
    obtain_marks,
    assignment_marks,
    feedback,
    assignment_submission,
    quick_note
  } = submission;

  return (
    <div className="modal-box w-full md:max-w-5xl">
      <div className="modal-action">
      <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button
            className="rounded-full text-[#024950]  tooltip tooltip-bottom"
            data-tip="close"
          >
            <FaCircleXmark className="text-4xl " />
          </button>
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
      <h2 className="text-center text-2xl font-bold mt-5">Your Submission</h2>
      <div className="mt-5 text-left">
        <div className='my-5'>
          <h2 className='font-bold text-[#024950] text-lg'>My Submission Link:<span className='text-black'> {assignment_submission}</span></h2>
          <p className="font-bold text-[#024950] text-lg">Submission Note:</p>
          <p className="text-black text-base">{quick_note}</p>
        </div>
        <h2 className="text-center text-2xl font-bold mt-5 text-[#024950]">Pdf/Doc Preview</h2>
        <iframe
          height="300px"
          width="100%"
          src={assignment_submission}
        ></iframe>
      </div>
    </div>
  );
};
MySubmissionModal.propTypes={
  submission:PropTypes.object
}
export default MySubmissionModal;
