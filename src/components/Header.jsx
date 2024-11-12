import React from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white flex items-center justify-between px-12 shadow-lg h-16 ">
      <Link to='/'>
      <img
        className="w-16 h-16 rounded-full"
        src="https://img.freepik.com/free-vector/flat-design-antojitos-logo-design-template_23-2149599172.jpg?t=st=1731297060~exp=1731300660~hmac=621ce8ce89e80bcdf27d914653349c489d7cbb4a9036f9961409e6c2af1d0688&w=826"
        alt=""
      />
      </Link>
      <div className="text-6xl relative  flex items-center">
        <BiCart />
        <p className="  bg-red-900 text-white rounded-full p-1 font-bold text-[15px]">10</p>
      </div>
    </div>
  );
};

export default Header;
