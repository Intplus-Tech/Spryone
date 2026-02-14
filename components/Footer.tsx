'use client';
import { usePathname } from "next/navigation";
import { Newsletter } from "./Newsletter";
import Link from "next/link";

export const Footer = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <>
      {!isHomePage && <Newsletter />}
      <footer className="text-brand md:text-center md:grid">
        <div className="text-white text-sz-48 tracking-wide uppercase leading-17.5 mb-4 md:mb-20.75 md:col-start-2 col-span-2">
          SpryOne
        </div>
        <nav className="md:col-start-2 col-span-2">
          <ul className="text-sz-16 mb-6 md:mb-0 space-y-2 md:space-y-0 md:flex md:justify-center md:gap-sz-60">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="text-sz-16 md:text-sz-20 mb-2 md:mb-0 md:col-start-1 md:row-start-2">
          <Link href="">Terms & Conditions</Link>
        </div>
        <div className="text-sz-16 md:text-sz-20 md:col-start-4 md:row-start-2">
          <Link href="">Privacy Policy</Link>
        </div>
      </footer>
    </>
  )
}