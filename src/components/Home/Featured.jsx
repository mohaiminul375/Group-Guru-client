import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "../Pages/Assignment/AssignmentCard";

const Featured = () => {
  const [assignments, setAssignment] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://gorup-guru-server.vercel.app/all-assignment",{withCredentials:true});
      console.log(data.slice(0, 6));
      setAssignment(data.slice(0, 6));
    };
    getData();
  }, []);
  return (
    <div className="md:max-w-6xl mx-auto mt-28">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold font-Jaini">Featured Assignment</h2>
        <p className="text-lg font-bold">Explore Assignment</p>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
