import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  const [restaurantData, setRestaurantDetails] = useState([]);
  const getRestaurantDetails = async () => {
    const data = await fetch(
      "https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=&LocationLat=27.7026754&LocationLng=85.3191018&PageNo=1&PageSize=8&SortBy=4&VendorName=&VendorTags=%7B%22FEATURED%22:true%7D&VendorTagsCSV=FEATURED,&filtertags=FEATURED&search_by=restaurant"
    );

    const jsonData = await data.json();
    setRestaurantDetails(jsonData);
  };

  useEffect(() => {
    // getRestaurantDetails();
  });
  return (
    <>
    
      <div className="relative flex items-center justify-center">
        <img
          className="w-full h-[92vh] brightness-50"
          src="https://img.freepik.com/free-photo/faded-gray-wooden-textured-flooring-background_53876-110739.jpg?t=st=1731298328~exp=1731301928~hmac=fa17a1810fae19f688c4c0a26eacdf83a69f1ef64c02ab11008257b054ec2f21&w=1380"
          alt="image"
        />
        <div className="absolute text-center ">
          <p className="text-2xl">
            {" "}
            Order food from the widest range of{" "}
            <span className="text-yellow-400 font-bold uppercase">
              resturent
            </span>{" "}
            .
          </p>
          <div className="flex flex-wrap">
            <input
              className="p-4 outline-none w-96"
              type="text"
              placeholder="search you food here"
            />
            <button className="bg-yellow-400 px-12" type="submit">
              {" "}
              Find you resturent
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-5">
        <p className="uppercase font-bold">feature resturent</p>
        <Link
        to='restaurants'
        className="flex items-center gap-4 text-xl">
        View All
        <FaArrowRight/>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 p-2 justify-center">
        {
          restaurantData.map((data)=>(
            <Card propData={data} /> //to pass the prop value to the card components..................................
          ))
        }
      </div>
    </>
  );
};

export default Home;
