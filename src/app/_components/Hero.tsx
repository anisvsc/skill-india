import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row text-center lg:text-left lg:justify-between justify-center items-center mt-10 lg:mt-20 sm:gap-3">
      <div>
        <h1 className="font-bold text-3xl lg:text-5xl tracking-tight">
          <span className="text-blue-500">Skill India</span>
          <br />
          E-Learning & Job Portal
        </h1>
        <br />
        <h2 className="font-semibold text-2xl lg:text-3xl tracking-tight">Free Online Skill Development Program</h2>
        <br />
        <div className="flex gap-4 justify-center lg:justify-start">
          <Button size={"lg"} className="bg-blue-500 cursor-pointer">
            <Link href="/auth/signin">SignIn</Link>
          </Button>
          <Button size={"lg"} className=" cursor-pointer">
            <Link href={"/dashboard"}>Explore</Link>
          </Button>
        </div>
      </div>
      <div className="mt-4 lg:mt-0">
        <Image src={"/human.svg"} width={500} height={500} alt="human" quality={100} />
      </div>
    </div>
  );
};

export default Hero;
