import { Helmet } from 'react-helmet-async';
import errorImg from '../../../assets/Error .jpg'

import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center   md:max-w-6xl mx-auto">
       <Helmet>
                <title>Group Guru | Error</title>
            </Helmet>
      <div className=''>
        {error.status === 404 ? (
          <div className="md:w-1/2 mx-auto">
           <img className='w-full' src={errorImg} alt="" />
          </div>
        ) : (
          <div className="text-5xl text-red-600">Something Went Wrong</div>
        )}
      </div>
      <Link to="/">
        <button className="mt-12 p-4 rounded-lg bg-[#024950] text-white border-none">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
