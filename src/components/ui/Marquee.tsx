// src/components/ui/Marquee.tsx
import React from "react";

interface MarqueeProps {
  logos: { name: string; url: string }[];
  speed?: number; // seconds for one full scroll cycle
  height?: number; // height of each logo in px
}

const Marquee: React.FC<MarqueeProps> = ({
  logos,
  speed = 20,
  height = 40,
}) => {
  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div
        className="overflow-hidden w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex w-max"
          style={{
            animation: `scroll ${speed}s linear infinite`,
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={logo.name + i}
              src={logo.url}
              alt={logo.name}
              style={{
                height: `${height}px`,
                margin: "0 40px",
                userSelect: "none",
                pointerEvents: "none",
              }}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marquee;
