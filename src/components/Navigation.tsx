'use client'
import { NavLinks } from "@/types/navegations";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
      const timeout = setTimeout(() => {
        setIsRouting(false);
        setPrevPath(path);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [path, prevPath]);

  return (
    <div
      style={{ left: "25%" }}
      className="absolute z-[50] -bottom-20 w-[50%] md:w-[50%] max-h-[150px] rounded-full flex justify-center items-center border bg-black border-white px-4 p-5"
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link}>
          <li className="mb-16 min-w-[20%]">
            <nav.icon
              className={`w-[34px] h-[34px] p-1 ${
                path === nav.link ? "text-purple-800" : "text-white"
              }`}
            />
          </li>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
