"use client";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Button } from "../ui/button";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
const headerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Properties", path: "/properties" },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="text-[#ee3137] cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="grid py-4 list-none mt-14">
          {headerLinks.map((item) => {
            const isActive =
              (pathname.includes(item?.path) && item?.path?.length > 1) ||
              pathname === item?.path;

            const linkClasses = `-mx-3 text-md font-regular hover:text-[#EE3137] px-3 py-4 ${
              isActive ? "text-[#EE3137] bg-gray-50 rounded-lg" : ""
            }`;

            return (
              <Link href={item?.path} key={item?.name} className={linkClasses}>
                {" "}
                <SheetClose>{item?.name} </SheetClose>
              </Link>
            );
          })}
        </div>
        <div className="grid gap-4 py-4">
          <Link
            href="/contact"
            className="-mx-3 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-4 text-md font-medium leading-7 text-gray-900 hover:bg-gray-50">
            <span className="text-lg text-[#ee3137]">
              <MdCall />
            </span>
            +91-123456789
          </Link>
          <Link
            href="/"
            className="-mx-3 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-4 text-md font-medium leading-7 text-gray-900 hover:bg-gray-50">
            <span className="text-lg text-[#ee3137]">
              <FaWhatsapp />
            </span>
            Whatsapp us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
