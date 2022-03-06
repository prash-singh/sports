import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="bg-black w-full h-14 text-white align-middle justify-start flex ">
        <div className="my-0 mx-2 self-center flex-1">
          <NavLink
            className="no-underline text-white text-lg hover:cursor-pointer"
            to="/"
          >
            Sports App
          </NavLink>
        </div>
        <div className="flex justify-start gap-3 flex-auto ">
          <NavLink to="/" className="m-0 self-center no-underline text-white ">
            Home
          </NavLink>
          <NavLink
            to="cricket"
            className="m-0 self-center no-underline text-white"
          >
            Cricket
          </NavLink>
          <NavLink
            to="football"
            className="m-0 self-center no-underline text-white"
          >
            Football
          </NavLink>
          <NavLink
            to="basketball"
            className="m-0 self-center no-underline text-white"
          >
            Basketball
          </NavLink>
          <NavLink
            to="kabaddi"
            className="m-0 self-center no-underline text-white"
          >
            Kabaddi
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
