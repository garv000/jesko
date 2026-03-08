// import React, { useRef } from "react";
// import Image from "next/image";

// const Benefit = () => {
//   const first = useRef(null);
//   const second = useRef(null);
//   const third = useRef(null);
//   const fourth = useRef(null);
//   const handlefirst = () => {
//     first.current.classList.toggle("hidden");
//   };

//   return (
//     <section
//       id="benefit"
//       className="w-screen h-screen px-28 text-[#312726] bg-[linear-gradient(0deg,#7A716E_0%,#FFF8ED_0%)]"
//     >
//       <div className="w-full h-full flex flex-col pt-28 pb-14 gap-8">
//         <div className="w-full h-full flex justify-between gap-4">
//           <div className="w-full flex flex-col gap-2">
//             <div className="w-full h-px bg-[#7a716e60]"></div>
//             <h2 className="text-xs font-bold uppercase">A better way to fly</h2>
//             <div className="w-1/2 h-full content-center">
//               <div className="w-full h-px bg-[#7a716e60]"></div>
//               <div
//                 onClick={handlefirst}
//                 className="flex justify-between items-center py-2 hover:py-4 transition-all duration-500 cursor-pointer"
//               >
//                 <div className="text-2xl font-bold">Pets</div>
//                 <div className="text-4xl">+</div>
//               </div>
//               <div ref={first} className="text-xs font-bold mt-12 mb-6 hidden">
//                 Traveling with pets on a private jet means comfort and peace of
//                 mind for both owners and their companions. Our dedicated team
//                 ensures seamless arrangements, from documentation and safety to
//                 onboard care, so that your pet enjoys the same level of
//                 attention and luxury as you do. Every detail is managed to
//                 create a stress-free and enjoyable journey for everyone on
//                 board.
//               </div>
//               <div className="w-full h-px bg-[#7a716e60]"></div>
//               <div
//                 onClick={handlesecond}
//                 className="flex justify-between items-center py-2 hover:py-4 transition-all duration-500 cursor-pointer"
//               >
//                 <div className="text-2xl font-bold">24/7 availability</div>
//                 <div className="text-4xl">+</div>
//               </div>
//               <div ref={second} className="text-xs font-bold mt-12 mb-6 hidden">
//                 Traveling with pets on a private jet means comfort and peace of
//                 mind for both owners and their companions. Our dedicated team
//                 ensures seamless arrangements, from documentation and safety to
//                 onboard care, so that your pet enjoys the same level of
//                 attention and luxury as you do. Every detail is managed to
//                 create a stress-free and enjoyable journey for everyone on
//                 board.
//               </div>
//               <div className="w-full h-px bg-[#7a716e60]"></div>
//               <div
//                 onClick={handlethird}
//                 className="flex justify-between items-center py-2 hover:py-4 transition-all duration-500 cursor-pointer"
//               >
//                 <div className="text-2xl font-bold">Onboard services</div>
//                 <div className="text-4xl">+</div>
//               </div>
//               <div ref={third} className="text-xs font-bold mt-12 mb-6 hidden">
//                 Traveling with pets on a private jet means comfort and peace of
//                 mind for both owners and their companions. Our dedicated team
//                 ensures seamless arrangements, from documentation and safety to
//                 onboard care, so that your pet enjoys the same level of
//                 attention and luxury as you do. Every detail is managed to
//                 create a stress-free and enjoyable journey for everyone on
//                 board.
//               </div>
//               <div className="w-full h-px bg-[#7a716e60]"></div>
//               <div
//                 onClick={handlefourth}
//                 className="flex justify-between items-center py-2 hover:py-4 transition-all duration-500 cursor-pointer"
//               >
//                 <div className="text-2xl font-bold">Efficient</div>
//                 <div className="text-4xl">+</div>
//               </div>
//               <div ref={fourth} className="text-xs font-bold mt-12 mb-6 hidden">
//                 Traveling with pets on a private jet means comfort and peace of
//                 mind for both owners and their companions. Our dedicated team
//                 ensures seamless arrangements, from documentation and safety to
//                 onboard care, so that your pet enjoys the same level of
//                 attention and luxury as you do. Every detail is managed to
//                 create a stress-free and enjoyable journey for everyone on
//                 board.
//               </div>
//               <div className="w-full h-px bg-[#7a716e60]"></div>
//             </div>
//           </div>
//           <div className="w-2/3 h-full">
//             <Image
//               src="/images/pets.webp"
//               alt="Benefit"
//               width={1000}
//               height={1000}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Benefit;

"use client";
import React, { useState } from "react";
import Image from "next/image";

const Benefit = () => {
  const [active, setActive] = useState(null);
  const [first, setFirst] = useState(true);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <>
      <section
        id="benefit"
        className="w-screen h-screen px-28 text-[#312726] bg-[linear-gradient(0deg,#7A716E_0%,#FFF8ED_0%)]"
      >
        <div className="w-full h-full flex flex-col pt-28 pb-14 gap-8">
          <div className="w-full h-full flex justify-between gap-4">
            <div className="w-full flex flex-col gap-2">
              <div className="w-full h-px bg-[#7a716e60]"></div>
              <h2 className="text-xs font-bold uppercase">
                A better way to fly
              </h2>

              <div className="w-1/2 h-full content-center">
                <div className="w-full h-px bg-[#7a716e60]"></div>
                <div
                  onClick={() => toggle(1)}
                  className="cursor-pointer w-full transition-all duration-500 hover:py-4 py-2"
                >
                  {/* PETS */}
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Pets</div>
                    <div className="text-4xl">{active === 1 ? "-" : "+"}</div>
                  </div>

                  {active === 1 && (
                    <div className="text-xs font-bold mt-12 mb-6">
                      Traveling with pets on a private jet means comfort and
                      peace of mind for both owners and their companions. Our
                      dedicated team ensures seamless arrangements, from
                      documentation and safety to onboard care, so that your pet
                      enjoys the same level of attention and luxury as you do.
                      Every detail is managed to create a stress-free and
                      enjoyable journey for everyone on board.
                    </div>
                  )}
                </div>

                <div className="w-full h-px bg-[#7a716e60]"></div>

                {/* 24/7 */}
                <div
                  onClick={() => toggle(2)}
                  className="cursor-pointer w-full transition-all duration-500 hover:py-4 py-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">24/7 availability</div>
                    <div className="text-4xl">{active === 2 ? "-" : "+"}</div>
                  </div>

                  {active === 2 && (
                    <div className="text-xs font-bold mt-12 mb-6">
                      Our team is available around the clock to handle any
                      request, no matter the time zone or urgency. From
                      last-minute flight arrangements to personalized services,
                      we provide seamless support whenever you need it. With us,
                      assistance is never more than a call away.
                    </div>
                  )}
                </div>

                <div className="w-full h-px bg-[#7a716e60]"></div>

                {/* ONBOARD */}
                <div
                  onClick={() => toggle(3)}
                  className="cursor-pointer w-full transition-all duration-500 hover:py-4 py-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Onboard services</div>
                    <div className="text-4xl">{active === 3 ? "-" : "+"}</div>
                  </div>

                  {active === 3 && (
                    <div className="text-xs font-bold mt-12 mb-6">
                      Every flight is tailored with a range of personalized
                      onboard services designed to elevate your journey. From
                      fine dining and curated entertainment to attentive crew
                      and seamless connectivity, every detail is arranged to
                      ensure maximum comfort and enjoyment in the air.
                    </div>
                  )}
                </div>

                <div className="w-full h-px bg-[#7a716e60]"></div>

                {/* EFFICIENT */}
                <div
                  onClick={() => toggle(4)}
                  className="cursor-pointer w-full transition-all duration-500 hover:py-4 py-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Efficient</div>
                    <div className="text-4xl">{active === 4 ? "-" : "+"}</div>
                  </div>

                  {active === 4 && (
                    <div className="text-xs font-bold mt-12 mb-6">
                      Efficiency is at the core of every flight we operate. From
                      optimized routes and streamlined procedures to quick
                      boarding and smooth ground handling, we make sure your
                      time is always used wisely. The result is a seamless
                      journey that gets you where you need to be, faster and
                      without compromise.
                    </div>
                  )}
                </div>

                <div className="w-full h-px bg-[#7a716e60]"></div>
              </div>
            </div>

            <div className="w-2/3 h-full">
              {active === null && (
                <Image
                  src="/images/pets.webp"
                  alt="Benefit"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              )}
              {active === 1 && (
                <Image
                  src="/images/pets.webp"
                  alt="Benefit"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              )}
              {active === 2 && (
                <Image
                  src="/images/availability.webp"
                  alt="Benefit"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              )}
              {active === 3 && (
                <Image
                  src="/images/services.webp"
                  alt="Benefit"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              )}
              {active === 4 && (
                <Image
                  src="/images/efficient.webp"
                  alt="Benefit"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen px-28 text-[#312726] bg-[linear-gradient(0deg,#7A716E_0%,#FFF8ED_0%)]">
        <div className="w-full h-px bg-[#7a716e60]"></div>
        <div className="w-full h-full flex justify-between py-4">
          <div className="flex flex-col">
            <h2 className="text-xs font-bold uppercase opacity-40">countries supported</h2>
            <h2 className="text-xs font-bold uppercase">174</h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xs font-bold uppercase opacity-40">based in</h2>
            <h2 className="text-xs font-bold uppercase">dubai, uae</h2>
          </div>
          <div className="flex gap-2">
            <h2 className="text-xs font-bold uppercase opacity-40">local time</h2>
            <h2 className="text-4xl font-bold uppercase">18:15</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
