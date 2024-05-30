import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import LeaderBoardTable from "./LeaderBoardTable";
import { CircleLoader } from "react-spinners";

const LeaderBoard = () => {
  const axiosSecure = useAxiosSecure();
  const { data: leaderBoards, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get("/all-submitted-assignment");
      return data;
    },
    queryKey: ["all-submitted-assignment"],
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mt-16">
        <CircleLoader size={100} className="text-center" color="#024950" />
      </div>
    );
  }
  // console.log(leaderBoards)

  return (
    <div className="mt-16 md:max-w-6xl mx-auto">
      <Helmet>
        <title>Group Guru | LeaderBoard</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-center text-4xl font-bold font-Jaini">
          Leader Board
        </h2>
        <p className="text-lg">check Leader Board by Average Marks Which are Completed</p>
      </div>
      <div className="mt-16">
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead className="border-2 border-[#024950]">
              <tr className="text-base font-bold text-[#024950] border-2 border-[#024950]">
                <th>Position</th>
                <th>Examinee Name</th>
                <th>Average Marks</th>
                <th>Total Completed Assignment</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {leaderBoards?.map((leaderBoard, idx) => (
                <LeaderBoardTable
                  key={idx}
                  idx={idx}
                 leaderBoard={leaderBoard}
                ></LeaderBoardTable>
              ))}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
