import axios from "axios";
import {  useState } from "react";
import AssignmentCard from "./AssignmentCard";
import { useQuery } from "@tanstack/react-query";
import { CircleLoader } from "react-spinners";

const Assignment = () => {
  const [count,setCount]=useState(0);
  const [itemsPerPg,setItemsPerPg]=useState(6);
  const [currentPg,setCurrentPg]=useState(1);
// filter
const [filter,setFilter]=useState('');
console.log(filter)



  
  const {isLoading}=useQuery({
    queryFn:async()=>{
      const {data}= await axios.get(
             `http://localhost:5000/all-assignment-count?filter=${filter}`
           );
           setCount(data.count)
           return data;
    },
    queryKey:['assignment-count',filter]
  })
  

  const { data: assignments, isPending } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/all-assignment?page=${currentPg}&size=${itemsPerPg}&filter=${filter}`
      );
      return data;
    },
    queryKey: ["all-assignment",currentPg,itemsPerPg,filter],
  });
  if (isPending) {
    return (
      <div className="flex justify-center mt-16">
        <CircleLoader size={100} className="text-center" color="#024950" />
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center mt-16">
        <CircleLoader size={100} className="text-center" color="#024950" />
      </div>
    );
  }
const numberOfPages=Math.ceil(count/itemsPerPg)
  const pages = [...Array(numberOfPages).keys()].map((e) => e + 1);
 

  return (
    <div className="mt-16 md:max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-center text-4xl font-bold font-Jaini">
          All Assignment
        </h2>
        <p className="text-lg">
          See all assignment created by our Register User
        </p>
      </div>
      <div className="text-center mt-5">
      <select
              onChange={e => {
                setFilter(e.target.value)
                setCurrentPg(1)
              }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option disabled value=''>Filter By Difficulty Level</option>
              <option value="">All Assignment</option>
              <option value='Easy'>Easy</option>
              <option value='Medium'>Medium</option>
              <option value='Hard'>Hard</option>
            </select>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {assignments?.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
          ></AssignmentCard>
        ))}
      </div>
      {/* pagniation */}
      <div className="flex justify-center mt-16">
        <div className="flex">
          {/* previous */}
          <button
          disabled={currentPg==1}
          onClick={()=>setCurrentPg(currentPg-1)}
          className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md">
            previous
          </button>

        {
          pages.map(page=>  <button
          key={page}
          href='#'
            onClick={()=>setCurrentPg(page)}
            className={`${currentPg===page ? 'font-bold bg-base-300':''} items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex border-2 hover:bg-[#024950] hover:text-white`}
          >
            {page}
          </button>
)

        }
        {/* next button */}
          <button
          disabled={currentPg=== numberOfPages}
          onClick={()=>setCurrentPg(currentPg+1)}
          className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
