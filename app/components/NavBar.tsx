import React from "react";
import Link from "next/link";
import { TfiRocket } from "react-icons/tfi";

const NavBar = () => {

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
                <Link className="text-zinc-500 hover:text-zinc-800 transition-colors" href={link.href}>{link.label}</Link>
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
