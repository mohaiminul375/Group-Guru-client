// import React from 'react';

import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
    const {data}=useLoaderData()
    console.log(data)
    return (
        <div>
            <h2>Details of</h2>
        </div>
    );
};

export default AssignmentDetails;