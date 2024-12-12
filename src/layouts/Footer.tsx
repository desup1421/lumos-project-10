import React from "react";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import github from "../assets/icons/github.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white px-5 lg:px-32 grid gap-24">
      {/* FOOTER HEADER */}
      <header className="flex flex-col lg:flex-row justify-between lg:items-center pt-10 gap-10">
        <h2 className="font-bold text-3xl">FurniShop</h2>
        <div>
          <ul className="flex justify-between gap-5">
            <li className="p-5 bg-black/40 rounded-full ">
              <a href="#">
                <img className="w-5" src={instagram} alt="Instagram Logo" />
              </a>
            </li>
            <li className="p-5 bg-black/40 rounded-full ">
              <a href="#">
                <img className="w-5" src={facebook} alt="Facebook Logo" />
              </a>
            </li>
            <li className="p-5 bg-black/40 rounded-full ">
              <a href="#">
                <img className="w-5" src={twitter} alt="Twitter Logo" />
              </a>
            </li>
            <li className="p-5 bg-black/40 rounded-full ">
              <a href="#">
                <img className="w-5" src={github} alt="Github Logo" />
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* FOOTER DIVIDER */}
      <hr className="border-2 hidden lg:block" />

      {/* FOOTER BODY */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
        {/* OUR PRODUCTS */}
        <div className="grid gap-5">
          <h3 className="text-lg">Our Products</h3>
          <ul className="text-sm grid gap-5">
            <li>The Support Suite</li>
            <li>The Sales Suite</li>
            <li>Support</li>
            <li>Guide</li>
          </ul>
        </div>

        {/* TOP FEATURES */}
        <div className="grid gap-5">
          <h3 className="text-lg">Top Features</h3>
          <ul className="text-sm grid gap-5">
            <li>Ticketing System</li>
            <li>Knowledge Base</li>
            <li>Community Forums</li>
            <li>Help Desk Software</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div className="grid gap-5">
          <h3 className="text-lg">Resources</h3>
          <ul className="text-sm grid gap-5">
            <li>Product Support</li>
            <li>Request Demo</li>
            <li>Library</li>
            <li>Peoplepower Blog</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="grid gap-5">
          <h3 className="text-lg">Company</h3>
          <ul className="text-sm grid gap-5">
            <li>About Us</li>
            <li>Press</li>
            <li>Investors</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Favourite Things */}
        <div className="grid gap-5">
          <h3 className="text-lg">Our Products</h3>
          <ul className="text-sm grid gap-5">
            <li>For Enterprise</li>
            <li>For Startups</li>
            <li>For Benchmark</li>
            <li>For Small Business</li>
          </ul>
        </div>
      </div>

      {/* FOOTER COPYRIGHT */}
      <p className="text-center text-sm mb-5">
        Copyright &copy;NameBrand 2022 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
