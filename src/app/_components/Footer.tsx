import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="absolute bottom-0 grid grid-cols-1 lg:grid-cols-2 border w-full">
      {/* contact us */}
      <div>
        <h1 className="font-semibold text-lg">contact us</h1>
      </div>

      {/* about us */}
      <div>
        <h1 className="font-semibold text-lg">about us</h1>
      </div>
    </div>
  );
};

export default Footer;
