import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center h-14 p-14 bg-gray-700 text-white shadow-lg sticky top-0 z-10">
      <div className="text-red text-3xl px-10 ">
        {" "}
        <span className="font-bold ">Monduvin </span>Boutique
      </div>
    </div>
  );
}

export default Header;
