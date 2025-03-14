import React from "react";
import Image from "next/image";
import avatar from "@/assets/images/personeli.jpg";

const MyPhoto = () => {
  return (
    <div className="relative inline-block font-sans text-4xl font-bold text-gray-900">
      <Image src={avatar} width={250} alt="Picture of the author" />
      <div className="absolute top-[-20px] left-[-30px] w-16 h-16 border-t-8 border-l-8 border-primary"></div>
      <div className="absolute top-[-20px] right-[-20px] w-0 h-0 border-r-4 border-primary"></div>
      <div className="absolute bottom-[-20px] left-[-20px] w-0 h-0 border-l-4 border-primary"></div>
      <div className="absolute bottom-[-20px] right-[-30px] w-16 h-16 border-b-8 border-r-8 border-primary"></div>
    </div>
  );
};

export default MyPhoto;
