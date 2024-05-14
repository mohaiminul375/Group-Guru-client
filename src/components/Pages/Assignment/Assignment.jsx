// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import { useQuery } from "@tanstack/react-query";
import { CircleLoader } from "react-spinners";

const Assignment = () => {
  const [count,setCount]=useState(0);
  const [itemsPerPg,setItemsPerPg]=useState(6);
  const [currentPg,setCurrentPg]=useState(1);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/all-assignment-count"
      );
      setCount(data.count);
    };
    getCount();
  }, []);
  // const {data:pgCount,isLoading}=useQuery({
  //   queryFn:async()=>{
  //     const {data}= await axios.get(
  //            "http://localhost:5000/all-assignment-count"
  //          );
  //          setCount(pgCount)
  //          return data;
  //   },
  //   queryKey:['assignment-count']
  // })
  console.log('current',currentPg)

  const { data: assignments, isPending } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/all-assignment-pagination?page=${currentPg}&size=${itemsPerPg}`
      );
      // setCount(data.length);
      return data;
    },
    queryKey: ["all-assignment",currentPg],
  });
  if (isPending) {
    return (
      <div className="flex justify-center mt-16">
        <CircleLoader size={100} className="text-center" color="#024950" />
      </div>
    );
  }
  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center mt-16">
  //       <CircleLoader size={100} className="text-center" color="#024950" />
  //     </div>
  //   );
  // }
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
          <button className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md">
            previous
          </button>

        {
          pages.map(page=>  <button
          key={page}
          href='#'
            onClick={()=>setCurrentPg(page)}
            className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          >
            {page}
          </button>
)
        }
          <button className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
