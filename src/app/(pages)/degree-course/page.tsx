import React from "react";
import Image from "next/image";
import { Link } from "lucide-react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-10">Degree Courses</h1>
      <div className="mt-8 gap-4 grid grid-cols-1 lg:grid-cols-2">
        {/* card */}
        <div className="border p-4 rounded-xl">
          <Image src={"/image.png"} className="rounded-xl w-full h-fit" width={200} height={200} alt="image" />
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-lg font-bold">Course Name</h1>
            <Link className="size-5 cursor-pointer" />
          </div>
        </div>
        {/* card */}
        <div className="border p-4 rounded-xl">
          <Image src={"/image.png"} className="rounded-xl w-full h-fit" width={200} height={200} alt="image" />
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-lg font-bold">Course Name</h1>
            <Link className="size-5 cursor-pointer" />
          </div>
        </div>
        {/* card */}
        <div className="border p-4 rounded-xl">
          <Image src={"/image.png"} className="rounded-xl w-full h-fit" width={200} height={200} alt="image" />
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-lg font-bold">Course Name</h1>
            <Link className="size-5 cursor-pointer" />
          </div>
        </div>
        {/* card */}
        <div className="border p-4 rounded-xl">
          <Image src={"/image.png"} className="rounded-xl w-full h-fit" width={200} height={200} alt="image" />
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-lg font-bold">Course Name</h1>
            <Link className="size-5 cursor-pointer" />
          </div>
        </div>
        {/* card */}
        <div className="border p-4 rounded-xl">
          <Image src={"/image.png"} className="rounded-xl w-full h-fit" width={200} height={200} alt="image" />
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-lg font-bold">Course Name</h1>
            <Link className="size-5 cursor-pointer" />
          </div>
        </div>
        {/* card */}
        <div className="border p-4 rounded-xl">
          <Image src={"/image.png"} className="rounded-xl w-full h-fit" width={200} height={200} alt="image" />
          <div className="flex justify-between items-center mt-4">
            <h1 className="text-lg font-bold">Course Name</h1>
            <Link className="size-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
