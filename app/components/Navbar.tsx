"use client";

import React, { useCallback, useEffect, useState } from "react";
import { BsFillBellFill, BsChevronCompactDown } from "react-icons/bs";
import { FaHistory, FaWallet, FaMoneyBill } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { ImFilm } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";
import { PiPlayPauseDuotone, PiFilmSlateBold } from "react-icons/pi";
import logo from "../../public/next.svg";
import Link from "next/link";

// import AccountMenu from "@/components/AccountMenu";
import NavbarItem from "./NavbarItem";

const TOP_OFFSET = 60;

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    var prevScrollpos = window.scrollY;
    const handleScroll = () => {
      var currentScrollPos = window.scrollY;
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
      if (prevScrollpos > currentScrollPos) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav
      className={`w-full bg-secondary lg:sticky lg:h-21 fixed lg:top-0 transition ease-linear duration-700 ${
        showNav ? "bottom-0" : "-bottom-20"
      }`}
    >
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center justify-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <div className="flex-row ml-8 gap-8 hidden lg:flex">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <PiPlayPauseDuotone />
            <NavbarItem label="Now Playing" />
          </Link>
          <Link
            href="/history"
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaHistory />
            <NavbarItem label="History" />
          </Link>
        </div>
        <div className="flex-row lg:hidden flex gap-9">
          <Link href="/" className="flex-col">
            <PiPlayPauseDuotone className="w-6 my-1 mx-auto" />
            <NavbarItem label="Playing" />
          </Link>
          <Link href="/history" className="flex-col">
            <FaHistory className="w-6 my-1 mx-auto" />
            <NavbarItem label="History" />
          </Link>
          <Link href="/withdraw" className="flex-col">
            <FaMoneyBill className="w-6 my-1 mx-auto" />
            <NavbarItem label="Withdraw" />
          </Link>
          <Link href="/topup" className="flex-col">
            <FaWallet className="w-6 my-1 mx-auto" />
            <NavbarItem label="Top Up" />
          </Link>
        </div>
        <div className="hidden lg:flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            {/* <BsFillBellFill className="w-6" /> */}
          </div>
          <Link
            href="/withdraw"
            className="flex flex-row items-center gap-2 cursor-pointer relative text-gray-200 lg:hover:text-yellow-300"
          >
            <FaMoneyBill />
            <NavbarItem label="Withdraw" />
          </Link>
          <Link
            href="/topup"
            className="flex flex-row items-center gap-2 cursor-pointer relative text-gray-200 lg:hover:text-yellow-300"
          >
            <FaWallet />
            <NavbarItem label="Top Up" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;