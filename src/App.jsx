import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
// import ResturentDetails from "./components/RestaurantDetails";
import ResturentLlayout from "./components/RestaurantLayout";
import Resturent from "./components/Restaurant";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantLayout from "./components/RestaurantLayout";
// import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="restaurants" element={<RestaurantLayout />}>
              <Route index element={<Resturent />} />
              <Route path="details/:id" element={<RestaurantDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
