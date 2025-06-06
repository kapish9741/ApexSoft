// src/components/Sponsers.tsx
import React from "react";
import Marquee from "./ui/Marquee";

const logos = [
    {
      name: "Anydesk",
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcb2Ou23yS3cviNsE-sLpYQrOGlytMUP6Bk8pmqCVB69ZotKxlac23Lk9syiT9Z77TPA&usqp=CAU',
    },
    {
      name: "Saudi Aramco",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcJIn-aneXh_1y-vpoqA1zLosPeyXZNg0LQ&s",
    },
    {
      name: 'ebay',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1600px-EBay_logo.svg.png?20250125101251',
    },
    {
      name: "IBM",
      url: "https://cdn.freebiesupply.com/logos/large/2x/ibm-logo-black-and-white.png",
    },
    {
      name: "NASA",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
    },
    {
      name: "Deloitte",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/DeloitteLogo.jpg",
    },
    {
      name: "Nestlé",
      url: "https://cdn.worldvectorlogo.com/logos/nestle-13.svg",
    },
    {
      name: "Walmart",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
    },
  ];
  

const Sponsers: React.FC = () => {
  return (
    <div className="w-[70vw] px-4 flex flex-col justify-center items-center gap-10">
      <h2 className="text-center text-2xl font-semibold bg-gradient-to-br from-neutral-500 via-neutral-300 to-neutral-700 bg-clip-text text-transparent mb-4">
        Our Sponsors
      </h2>
      <Marquee logos={logos} speed={25} height={40} />
    </div>
  );
};

export default Sponsers;
