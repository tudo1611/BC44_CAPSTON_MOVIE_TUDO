import React from "react";
import UserNav from "./UserNav";
import { NavLink } from "react-router-dom";

export default function HeaderDesktop() {
  return (
    <header className="p-1 dark:bg-gray-800 dark:text-gray-100 text-xl font-bold bg-black bg-opacity-40 text-green-500 fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto items-center">
        <span className="text-3xl font-bold text-green-500"> MyFlix</span>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to={"/"}
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 "
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to={"/contact"}
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 "
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to={"/news"}
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 "
            >
              News
            </NavLink>
          </li>
        </ul>
        <UserNav />
      </div>
    </header>
  );
}
