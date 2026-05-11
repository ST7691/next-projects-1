import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="px-4 py-2 bg-stone-800 flex justify-between items-center">
      <Link href={'/'}>
        {" "}
        {/* <img src="/food-logo.jpg" alt="logo" width={60} height={60} /> */}
        <Image src="/food-logo.jpg" alt="logo" width={60} height={60}>
          
           </Image>
      </Link>
      <div className="space-x-5">
        <Link
          prefetch={false}
          className="btn-btn" href={"/foods"}>
          Foods
        </Link>
        <Link className="btn-btn" href={"/reviews"}>
          Reviwes
        </Link>
        <Link className="btn-btn" href={"/feedback"}>
         Feedbacks
        </Link>
      </div>
    </header>
  );
};

export default Header;
