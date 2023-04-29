import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="navbar flex justify-between sm:relative sm:p-4"
        style={{
          backgroundColor: props.mode === "Light" ? "#5086de" : "#292a2b",
          color: props.mode === "Light" ? "black" : "white",
        }}
      >
        {show && <div className="z-10 absolute inset-0 h-[55px] top-[57px] pl-4 " style={{backgroundColor: props.mode === "Light" ? "#5086de" : "#292a2b",
          color: props.mode === "Light" ? "black" : "white",
        }}>
          <ul className="flex flex-col">
            <li className="pb-1" onClick={()=>{setShow(!show)}}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={()=>{setShow(!show)}}>
              <NavLink to="/Contact">Contact us</NavLink>
            </li>
          </ul>
        </div>}
        <div className="flex items-center">
          <button className="hamburger space-y-1 sm:visible ml-2 md:hidden lg:hidden xl:hidden 2xl:hidden" onClick={()=>{setShow(!show)}}>
            <div className="w-5 h-[2px]  border-[2px] border-black"></div>
            <div className="w-5 h-[2px]  border-[2px] border-black"></div>
            <div className="w-5 h-[2px]  border-[2px] border-black"></div>
          </button>
          <div className="font-bold text-xl ml-2 sm:ml-5">
            <Link to="/">Text-Utils</Link>
          </div>
          <ul className="flex space-x-5 p-4 text-md items-center sm:hidden">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact us</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center sm:justify-center space-x-2 sm:relative">
          {/* <input
            className="search rounded-md h-8 w-44 p-2 text-black"
            placeholder="search here"
          />
          <button className="bg-white border-2 border-green-500 w-20 h-8 rounded-md hover:shadow-md hover:bg-gradient-to-r from-green-400 to-green-900 hover:text-white hover:border-green-900 text-black">
            search
          </button> */}
          {/* <button className="rounded-full border-2 border-black w-8 h-8 bg-black"></button>
          <button className="rounded-full border-2 border-black w-8 h-8 bg-green-500"></button>
          <button className="rounded-full border-2 border-black w-8 h-8 bg-cyan-500"></button>
          <button className="rounded-full border-2 border-black w-8 h-8 bg-violet-500"></button> */}
          <label className="relative inline-flex items-center cursor-pointer ">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={props.toggle}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300 mr-3 ">
              {props.mode === "Light" ? "Dark" : "Light"}
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
