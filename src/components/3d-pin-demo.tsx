"use client";
import { PinContainer } from "./ui/3d-pin";
import bangloreImage from '../assets/banglore.png'

export default function AnimatedPinDemo() {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/Apexsoft.in"
        href="https://Apexsoft.in"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-neutral-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-neutral-100">
            ApexSoft
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-neutral-500 ">
            Right here, right with you.
            </span>
          </div>
          <div className="flex w-full rounded-lg mt-4 overflow-hidden">
            <img
              src={bangloreImage}
              alt="Bangalore"
              className="w-full object-cover"
            />
          </div>

        </div>
      </PinContainer>
    </div>
  );
}
