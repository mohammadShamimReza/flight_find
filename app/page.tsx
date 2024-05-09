"use client";

import { useEffect, useState } from "react";
import FligtTable from "./Components/FligtTable";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import flightData from "./asset/Data.json";

export default function Home() {
  const data = flightData;

  const [currentDate, setCurrentDate] = useState("");
  const [From, setFrom] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);
  }, []);

  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue2(e.target.value);
  };
  return (
    <main className=" min-h-screen   ">
      {/*  navigatino */}
      <Navbar />
      <div className="p-1">
        <p className="text-2xl text-gray-800 font-bold mx-auto flex max-w-7xl pl-8">
          Master Price
        </p>
        <hr className="border-gray-300 " />
      </div>
      {/* search section */}
      <Search
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        handleChange={handleChange}
        selectedValue2={selectedValue2}
        setSelectedValue2={setSelectedValue2}
        handleChange2={handleChange2}
      />
      {/* table section */}
      <FligtTable data={data} />
    </main>
  );
}
