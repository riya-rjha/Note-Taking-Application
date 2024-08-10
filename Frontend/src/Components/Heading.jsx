import React from "react";
import BlogsCard from "../Components/BlogsCard";
import { Link } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

const Heading = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl max-md:ml-28 max-md:w-[300px] text-center pt-4">
        Blog Application
      </h2>
      <div className="max-md:ml-[385px] flex items-center justify-center max-sm:ml-[100px]">
        <div className="flex items-center justify-center pt-8 gap-4"></div>
      </div>
      <div className="max-md:float-right pr-12 float-right mt-6">
        <Link to="/Blogs/create">
          <FaSquarePlus className="text-5xl cursor-pointer hover:shadow-outline" />
        </Link>
        <Link to="/register">
          <MdAccountCircle className="text-5xl cursor-pointer hover:shadow-outline"/>
        </Link>
      </div>
      <BlogsCard />
    </div>
  );
};

export default Heading;
