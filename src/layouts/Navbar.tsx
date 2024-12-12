import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import menu from "../assets/icons/menu.svg";
import closeMenu from "../assets/icons/menu-close.svg";

const Navbar: React.FC = () => {
  const { isTransparent } = useAppSelector((state: RootState) => state.navbar);

  //Interface NavLink
  interface NavLink {
    to: string;
    label: string;
  }
  //Link
  const navLinks: NavLink[] = [
    { to: "/", label: "Home" },
    { to: "/", label: "About" },
    { to: "/", label: "Features" },
    { to: "/", label: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNavbar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`z-40 fixed w-full top-0 flex flex-col lg:flex-row justify-between items-center px-5 lg:px-32 py-5 mx-auto text-primary transition-all ease-in-out ${
        isOpen ? "h-screen bg-white text-primary" : "h-20"
      } lg:h-20 overflow-hidden ${!isTransparent ? "bg-white text-primary" : "bg-transparent text-white"}`}
    >
      {/* NAV HEADER */}
      <div
        className={`flex justify-between w-full items-center ${
          isOpen && "invisible"
        }  lg:visible`}
      >
        <Link to="/" className="text-3xl font-bold">
          FurniShop
        </Link>
        <button className={`${ !isTransparent && 'bg-primary'} lg:invisible`} onClick={toggleNavbar}>
          <img src={menu} alt="menu-icon" />
        </button>
      </div>

      {/* NAV LINKS */}
      <ul
        className={`flex flex-col gap-5 lg:gap-20 text-center lg:flex-row ${
          isOpen ? "flex" : "hidden"
        } lg:flex`}
      >
        <Link onClick={toggleNavbar} to="/" className="text-xl font-bold lg:hidden mb-10">
          FurniShop
        </Link>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link onClick={toggleNavbar} to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* NAV BUTTONS */}
      <button
        onClick={toggleNavbar}
        className={`visible ${!isOpen && "hidden"} lg:hidden`}
      >
        <img src={closeMenu} alt="close icon" />
      </button>
    </nav>
  );
};

export default Navbar;
