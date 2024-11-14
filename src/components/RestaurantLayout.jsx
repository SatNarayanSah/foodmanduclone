import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'

const RestaurantLayout = () => {

  // console.log(setAllRestaurantDetails());
  

  return (
    <div><Outlet /></div>
  )
}

export default RestaurantLayout