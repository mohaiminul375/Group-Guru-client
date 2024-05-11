const MySubmissionCard = ({ idx, submission }) => {
  console.log("sub", submission);
  console.log("idx", idx);
  const { assignment_title, assignment_marks, status, obtain_marks } =
    submission;
  return (
    <tr className="border-2 border-[#024950]">
      <th>{idx + 1}</th>
      <td>{assignment_title}</td>
      <td>{status}</td>
      <td>
        {obtain_marks ? obtain_marks : "pending"}/{assignment_marks}
      </td>
      <td>
        <button 
        disabled={status=='pending'}
        className="p-2 bg-[#024950] text-white rounded-full disabled:cursor-not-allowed">See feed back</button>
      </td>
    </tr>
  );
};

export default MySubmissionCard;
