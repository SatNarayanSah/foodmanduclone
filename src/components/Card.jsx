import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";

const Card = (props) => {
    const {propData} = props;
    const {VendorListingWebImageName, Name, Address1, DeliveryDistanceStr,CuisineTags} = propData



  return (
    <div className=" flex flex-wrap gap-3 justify-center ">
      <div className="">
        <img
          className="w-80 h-80 rounded-lg"
          src={VendorListingWebImageName}
          alt="image"
        />
        <div className="p-3">
          <div className="text-center text-lime-900  flex flex-wrap font-bold">
            {Name}
          </div>
          <div className="flex gap-1">
            <div className="flex  items-center font-semibold">
              <BiLocationPlus /> {Address1}
            </div>
            <div className="flex  items-center font-semibold ">

            <RiMotorbikeFill /> {DeliveryDistanceStr}
            </div>
          </div>
            <div className="flex  items-center font-semibold">
              <FaHamburger /> {CuisineTags}
            </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Card;
