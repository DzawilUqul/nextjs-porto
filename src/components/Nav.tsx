"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const links = [
  { name: "Home", scrollLinkHref: "home", href: "/" },
  { name: "About", scrollLinkHref: "about", href: "/#about" },
  { name: "Journey", scrollLinkHref: "journey", href: "/journey" },
  { name: "Works", scrollLinkHref: "works", href: "/works"},
  { name: "Contact", scrollLinkHref: "contact", href: "/#contact" },
];

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  linkStyles?: string;
  closeNav?: () => void;
}

const Nav: React.FC<NavProps> = ({ containerStyles, listStyles, linkStyles, closeNav }) => {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => (
          <li key={index}>
            {pathname === "/" && (link.scrollLinkHref === "about" || link.scrollLinkHref === "contact" || link.scrollLinkHref === "home") ? (
              // Use ScrollLink if on Home and link is About or Contact
              <ScrollLink
                to={link.scrollLinkHref}
                smooth={true}
                duration={1000}
                offset={-80} // Adjust based on your navbar height
                className={linkStyles}
                onClick={closeNav}
              >
                {link.name}
              </ScrollLink>
            ) : (
              // Use Next.js Link for other cases
              <Link href={link.href} className={linkStyles} onClick={closeNav}>
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
