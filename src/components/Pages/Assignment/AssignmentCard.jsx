import React from "react";

const AssignmentCard = ({assignment}) => {
    console.log(assignment)
  return (
    <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src="https://source.unsplash.com/random/480x360/?4"
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold dark:text-violet-600">
              Facere ipsa nulla corrupti praesentium pariatur architecto
            </h3>
          </a>
          <p className="leading-snug dark:text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellat, excepturi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
