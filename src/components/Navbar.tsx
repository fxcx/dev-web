import { Socials } from "@/types";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="absolute top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between flex-block px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-white text-[25px] font-semibold">
          facundo -{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Burgos{" "}
          </span>
        </h1>
      </div>

      <div className="flex">
        {Socials.map((social) => (
          <>
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />

            <Link className="opacity-0 relative right-9" href={social.link}>
              {social.name}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
