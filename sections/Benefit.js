import React from "react";
import Image from "next/image";

const Benefit = () => {
  return (
    <section
      id="benefit"
      className="w-screen h-screen px-28 text-[#312726] bg-[linear-gradient(0deg,#7A716E_0%,#FFF8ED_0%)]"
    >
      <div className="w-full h-full flex flex-col pt-28 pb-14 gap-8">
        <div className="w-full h-full flex justify-between gap-4">
          <div className="w-full flex flex-col gap-2">
            <div className="w-full h-px bg-[#7a716e60]"></div>
            <h2 className="text-xs font-bold uppercase">A better way to fly</h2>
            <div className="w-1/2 h-full content-center">
              <div className="w-full h-px bg-[#7a716e60]"></div>
              <div className="flex justify-between items-center py-2 hover:py-4 transition-all duration-500 cursor-pointer">
                <div className="text-2xl font-bold">Pets</div>
                <div className="text-4xl">+</div>
              </div>
              <div className="w-full h-px bg-[#7a716e60]"></div>
              <div className="flex justify-between items-center py-2 hover:py-4 transition-all duration-500 cursor-pointer">
                <div className="text-2xl font-bold">24/7 availability</div>
                <div className="text-4xl">+</div>
              </div>
              <div className="w-full h-px bg-[#7a716e60]"></div>
              <div className="flex justify-between items-center py-2 hover:py-4 transition-all duration-500 cursor-pointer">
                <div className="text-2xl font-bold">Onboard services</div>
                <div className="text-4xl">+</div>
              </div>
              <div className="w-full h-px bg-[#7a716e60]"></div>
              <div className="flex justify-between items-center py-2 hover:py-4 transition-all duration-500 cursor-pointer">
                <div className="text-2xl font-bold">Efficient</div>
                <div className="text-4xl">+</div>
              </div>
              <div className="w-full h-px bg-[#7a716e60]"></div>
            </div>
          </div>
          <div className="w-2/3 h-full">
            <Image
              src="/images/pets.webp"
              alt="Benefit"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
