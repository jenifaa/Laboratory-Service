"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import SigninButton from "./SigninButton";

const Navbar = ({ user }) => {
  const links = (
    <>
      <li className="text-base text-blue-950 font hover:text-blue-800 font-medium mr-2">
        <Link href="/">Home</Link>
      </li>
      <li className="text-base text-blue-950 font hover:text-blue-800 font-medium mr-2">
        <Link href="/about">About</Link>
      </li>
      <li className="text-base text-blue-950 font hover:text-blue-800 font-medium mr-2">
        <Link href="/ourservices">Services</Link>
      </li>
      <li className="text-base text-blue-950 font hover:text-blue-800 font-medium mr-2">
        <Link href="/blog">Blog</Link>
      </li>
      <li className="text-base text-blue-950 font hover:text-blue-800 font-medium">
        <Link href="/contact">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div>
      <Header />
      <div className="navbar bg-base-100 border-b px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link href="/" className="text-xl flex items-center gap-2">
            <Image alt="logo" src="/assets/images/microscope.png" width={45} height={45} />
            <p className="font-semibold bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 text-transparent bg-clip-text text-3xl font2">
              LabSync
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <p className="text-lg font-semibold text-blue-800">Hello, {user.given_name}</p>
          ) : (
            <SigninButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
