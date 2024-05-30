// import React from 'react';

import { useState } from "react";

const LeaderBoardTable = ({ idx, leaderBoard }) => {
  // console.log(leaderBoard);
  const { _id, totalCompletedAssignments, averageMarks } = leaderBoard;

  const { email, name } = _id;

  return (
    <tr className="font-bold border-2 border-[#024950]">
      <th>{idx + 1}</th>
      <td>
        {name}
        <br />
        {email}
      </td>
      <td>
        {
          averageMarks.toFixed(2)
        }
      </td>
      <td>
      {
          totalCompletedAssignments
        }
      </td>
    </tr>
  );
};

export default LeaderBoardTable;
