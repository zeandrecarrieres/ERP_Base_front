import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`


  return (
    <div className="flex justify-between items-center h-14 p-14 bg-gray-700 text-white shadow-lg sticky top-0 z-10">
      <div className="text-red text-3xl px-10 ">
        {" "}
        <span className="font-bold ">Monduvin </span>Boutique
      </div>
      <div>
      <button
        className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
      </div>
    </div>
  );
}

export default Header;
