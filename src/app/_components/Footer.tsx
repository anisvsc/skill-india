import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-[200px] p-8 rounded-xl mb-4 bottom-0 bg-blue-200 grid grid-cols-1 lg:grid-cols-2 w-full">
      {/* contact us */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-lg">contact us</h1>
        <div className="space-y-2">
          <Input className="bg-white w-[300px]" placeholder="Name" />
          <Input className="bg-white w-[300px]" placeholder="Mesage" />
          <Button>Submit</Button>
        </div>
      </div>

      {/* about us */}
      <div>
        <h1 className="font-semibold text-lg mt-4 lg:mt-0">about us</h1>
        <Link href={"/about"}>
          Read more about us <span className="text-blue-900">here</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
