import React from "react";
import { ShareSocial } from "react-share-social";

const Footer: React.FC = () => {
  const style = {
    root: {
      background: '#23262F',
      borderRadius: 3,
      border: 0,
      color: 'white',
      padding: '0'
    },
    copyContainer: {
      display: 'none'
    },
  };
  return (
    <footer className="bg-primary text-white px-5 lg:px-32 grid gap-24">
      {/* FOOTER HEADER */}
      <header className="flex flex-col lg:flex-row justify-between lg:items-center pt-10 gap-10">
        <h2 className="font-bold text-3xl">FurniShop</h2>
        <div>
          <ShareSocial
            url="https://lumos-project-10.vercel.app/"
            style={style}
            socialTypes={["facebook", "twitter", "linkedin", "whatsapp"]}
            onSocialButtonClicked={(data) => console.log(data)}
          />
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
