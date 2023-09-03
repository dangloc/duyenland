import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { NavLinks } from "@/constants";

const Navbar = () => {
  const session = {};
  return (
    <nav className="max-w-2xl m-auto flex items-center">
      <div className="flex items-center flex-1  gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={112}
            height={44}
            alt="logo"
          />
        </Link>
        <ul className="hidden xl:flex text-small gap-7 w-full justify-evenly">
          {NavLinks.map((link) => (
            <li>
            <Link href={link.href} key={link.key}  className="text-[#a4a6a4] text-[14px] leading-5 font-medium">
              {link.text}
            </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        {session ? (
          <>
            avt
            <Link href="/create-project">viet bai</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
