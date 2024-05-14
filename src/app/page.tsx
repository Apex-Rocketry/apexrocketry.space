"use client";

import Image from "next/image";
import { useEffect } from "react";

function Root() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://apexrocketry.wixsite.com/apex-rocketry/";
    }, 500);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="place-items-center grid bg-zinc-950 w-screen h-screen">
      <Image
        src="/apex.svg"
        alt="Apex Rocketry UFSC"
        width={500}
        height={200}
      />
    </div>
  );
}

export default Root;
