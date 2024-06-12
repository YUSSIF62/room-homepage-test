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
    <HeaderWrapper>
      <Logo src={logo} alt="Logo" />
      <Nav isOpen={isOpen} className={isOpen ? 'open' : ''}>
        <NavList>
          <li>
            <NavButton>home</NavButton>
          </li>
          <li>
            <NavButton>shop</NavButton>
          </li>
          <li>
            <NavButton>about</NavButton>
          </li>
          <li>
            <NavButton>contact</NavButton>
          </li>
        </NavList>
      </Nav>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? close : menu} alt="Menu" />
      </MenuButton>
    </HeaderWrapper>
  );
};

export default Header;
