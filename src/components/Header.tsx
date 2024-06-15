import React, { useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute z-10 flex items-center justify-center w-full p-8 lg:items-center lg:justify-start">
        <div>
          <img src={logo} alt="" className="lg:mr-8" />
        </div>

        <div
          className={`${
            isOpen
              ? "bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 h-screen"
              : "bg-transparent lg:bg-transparent"
          } lg:bg-transparent lg:h-auto lg:relative `}
        >
          <nav
            className={`${isOpen ? "open w-full py-8 lg:py-0 lg:w-auto" : ""}`}
          >
            <ul className="flex flex-wrap items-center justify-center gap-4 font-bold lg:font-normal">
              <li>
                <button className="transition-all duration-200 border-b-2 border-transparent hover:border-neutral-900 lg:text-white lg:hover:border-b-white">
                  home
                </button>
              </li>
              <li> 
                <button className="transition-all duration-200 border-b-2 border-transparent hover:border-neutral-900 lg:text-white lg:hover:border-b-white">
                  shop
                </button>
              </li>
              <li>
                <button className="transition-all duration-200 border-b-2 border-transparent hover:border-neutral-900 lg:text-white lg:hover:border-b-white">
                  about
                </button>
              </li>
              <li>
                <button className="transition-all duration-200 border-b-2 border-transparent hover:border-neutral-900 lg:text-white lg:hover:border-b-white">
                  contact
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="absolute z-20 left-8 top-8 lg:hidden">
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <img src={close} alt="" />
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <img src={menu} alt="" />
            </button>
          )}
        </div>
      </header>
  );
};

export default Header;
