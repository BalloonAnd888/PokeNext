import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Link href={"/"}>
        <h1 className="text-4xl font-extrabold text-center pt-6 pb-6">
          PokeNext
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
