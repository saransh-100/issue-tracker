"use client";

import React from "react";
import Link from "next/link";
import { TfiRocket } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import classnames from "classnames";


const NavBar = () => {

    const currentPath = usePathname();

    const navLinks = [
        {label: "Dashboard", href: "/"},
        {label: "Issues", href: "/issues"},
    ]

  return (
    <nav className="flex justify-around items-center px-4 border-b border-gray-600 mb-5 h-14">
      <Link href="/">
        <TfiRocket className="text-4xl" />
      </Link>
      <ul className="flex gap-4 md:gap-12">
        {navLinks.map(link => (
            <li key={link.href}>
                {/* <Link className = `text-zinc-500 hover:text-zinc-800 transition-colors ${link.href === currentPath ? "text-zinc-800" : ""}`> */}
                <Link className={classnames({
                    "text-zinc-500 hover:text-zinc-800 transition-colors": true,
                    "text-zinc-800": link.href === currentPath,
                })} href={link.href}>{link.label}</Link>
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
