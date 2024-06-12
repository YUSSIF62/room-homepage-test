import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const HeaderWrapper = styled.header`
  position: absolute;
  z-index: 10;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  margin-right: 2rem;

  @media (min-width: 1024px) {
    margin-right: 4rem;
  }
`;


const Nav = styled.nav<{ isOpen: boolean }>`
  width: 100%;
  padding-top: 2rem;
  position: absolute;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  @media (min-width: 768px) {
    display: flex;
    padding-top: 0;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100vw')};
  transition: all 0.5s ease-in-out;
  background-color: ${({ isOpen }) => (isOpen ? 'rgba(0, 0, 0.1, 0.75)' : 'transparent')};
  height: ${({ isOpen }) => (isOpen ? '100vh' : 'auto')};

  @media (min-width: 1024px) {
    position: relative;
    top: 0;
    left: 0;
    background-color: transparent;
    height: auto;
    box-shadow: none;
  }

  &.open {
    left: 0;
    background-color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    
    @media (min-width: 1024px) {
      box-shadow: none;
      background-color: transparent;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const NavButton = styled.button`
  transition: all 0.2s;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #000;
  }
  @media (min-width: 1024px) {
    color: white;
    &:hover {
      border-bottom: 2px solid white;
    }
  }
`;

const MenuButton = styled.button`
  position: absolute;
  z-index: 20;
  left: 2rem;
  top: 2rem;
  @media (min-width: 1024px) {
    display: none;
  }
`;

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
            <ul className="flex flex-wrap items-center justify-center gap-4">
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
