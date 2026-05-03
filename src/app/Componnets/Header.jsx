import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 py-2 bg-stone-800 flex justify-between items-center">
      <img src="/food-logo.jpg" alt="logo" width={60} height={60} />
      <div className="space-x-5">
        <Link className="btn" href={"/foods"}>Foods</Link>
        <Link className="btn" href={"/reviews"}>Reviwes</Link>
      </div>
    </header>
  );
};

export default Header;
