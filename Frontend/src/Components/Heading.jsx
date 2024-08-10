import React from "react";
import BlogsCard from "../Components/BlogsCard";
import { Link } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";

const Heading = () => {
  return (
    <div className="flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-16 bg-purple-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-purple-800 mb-6 text-center">
        NoteTracker
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <Link
          to="/Blogs/create"
          className="group relative inline-flex items-center"
        >
          <FaSquarePlus className="text-5xl text-purple-600 hover:text-purple-800 transition-colors duration-300 ease-in-out" />
         
        </Link>
      </div>
      <div className="w-full max-w-4xl">
        <BlogsCard />
      </div>
    </div>
  );
};

export default Heading;
