import React from "react";
import FetchSearchData from "./FetchSearchData";
import accountImg from "../public/icons/account.svg";
import shoppingCart from "../public/icons/shopping_cart.svg";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-[1200px] mx-auto">
      <FetchSearchData />
      <div className="flex items-center gap-8">
        <Image src={accountImg} width={24} height={24} alt="account image" className="cursor-pointer"/>
        <Image src={shoppingCart} width={24} height={24} alt="shopping cart" className="cursor-pointer"/>
      </div>
    </nav>
  );
};

export default Navbar;
