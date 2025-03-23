// "use client";
import React from "react";
import Link from "next/link";
// import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
// import { useState, useEffect } from "react";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            R. Jin <span className="text-accent">.</span>
          </h1>
        </Link>

        <ThemeSwitch />

        {/*desktop nav & hire me button */}
        <div className="hidden xl:flex  items-center gap-8">
          <Nav />
        </div>

        {/*mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
