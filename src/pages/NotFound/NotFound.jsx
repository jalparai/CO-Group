// pages/NotFound.js
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/"  className="mt-6 text-white bg-[#155dec]  text-[14px] font-Montserrat font-medium rounded-full py-[15px] px-[46px] gap-1 inline-flex items-center justify-center">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
