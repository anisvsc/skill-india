import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Ham, HamIcon, Menu, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links = [
  {
    id: 1,
    title: "Degree Course",
    link: "/degree-course",
    isButton: false,
  },
  {
    id: 2,
    title: "Certification Course",
    link: "/certification-course",
    isButton: false,
  },
  {
    id: 3,
    title: "Jobs",
    link: "/jobs",
    isButton: true,
  },
];

const Navbar = () => {
  return (
    <>
      {/* for pc - hidden lg:flex */}
      <div className="flex justify-between items-center py-4">
        {/* left */}
        <Link href={"/"} className="font-bold text-lg">
          Skill India
        </Link>

        {/* right */}
        <div className="hidden lg:flex justify-between items-center gap-6">
          <div className="border flex items-center gap-2 rounded-full px-3">
            <Search className="size-5" />
            <Input className="w-[350px] rounded-full border-0 shadow-none focus-visible:ring-0 active:ring-0" placeholder="search for courses" />
          </div>

          {links.map((link) =>
            link.isButton ? (
              <Link key={link.id} href={link.link}>
                <Button className="min-w-fit cursor-pointer rounded-full" variant={"outline"}>
                  {link.title}{" "}
                </Button>
              </Link>
            ) : (
              <Link key={link.id} href={link.link}>
                {" "}
                <Button className="min-w-fit cursor-pointer rounded-full" variant={"ghost"}>
                  {link.title}{" "}
                </Button>
              </Link>
            )
          )}
        </div>
        {/* sheet for mobile devies  */}
        <Sheet>
          <SheetTrigger className="block lg:hidden cursor-pointer ">
            <Menu />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Skill India</SheetTitle>
              <div className="flex flex-col justify-between items-start gap-4 mt-8">
                {" "}
                {links.map((link) =>
                  link.isButton ? (
                    <Button key={link.id} className="min-w-fit cursor-pointer rounded-lg w-full" variant={"outline"}>
                      <Link href={link.link}>{link.title}</Link>
                    </Button>
                  ) : (
                    <Button key={link.id} className="min-w-fit cursor-pointer rounded-lg w-full" variant={"outline"}>
                      <Link href={link.link}>{link.title}</Link>
                    </Button>
                  )
                )}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;
