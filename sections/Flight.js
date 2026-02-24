"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Flight = () => {
  const plane = useRef(null);
  const plane2 = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#flight",
        start: "top top",
        end: "+=400%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.from(plane.current, {
      y: "150%",
    });

    tl.to("#flight1", {
      y: "100%",
      ease: "none",
    });

    tl.fromTo(
      "#flight2",
      { y: "-100%" },
      { y: "0%", ease: "none" },
      "<", // sync with previous animation
    );

    tl.to(
      plane.current,
      {
        scale: 0.8,
        ease: "none",
      },
      "<",
    );

    gsap.set(plane.current, {
      transformOrigin: "center center",
      clipPath: "inset(0% 0% 0% 0%)",
    });
    gsap.set(plane2.current, {
      transformOrigin: "center center",
      clipPath: "inset(100% 0% 0% 0%)",
    });
    tl.to(plane.current, {
      clipPath: "inset(0% 0% 100% 0% round 40px)",
      ease: "none",
    });
    tl.to(
      plane2.current,
      {
        clipPath: "inset(0% 0% 0% 0% round 40px)",
        ease: "none",
      },
      "<",
    );
  });

  return (
    <div
      id="flight"
      className="relative overflow-hidden w-screen h-screen text-[#312726] bg-[linear-gradient(180deg,#7A716E_0%,#FFF8ED_100%)]"
    >
      <section
        id="flight1"
        className="absolute inset-0 w-screen h-screen px-28 z-10"
      >
        <div className="w-full h-full flex flex-col justify-center mt-20">
          <div className="w-full flex justify-between">
            <h2 className="text-8xl font-extrabold z-10 tracking-wide">
              Fly in
            </h2>
            <h2 className="text-8xl font-extrabold z-10 tracking-wide">
              Luxury
            </h2>
          </div>
          <div className="mt-8">
            <p className="text-2xl font-bold max-w-[150] z-10">
              Luxury that moves with you
            </p>
          </div>
          <div className="absolute bottom-14 right-28 flex flex-col gap-4">
            <div className="w-xs h-px bg-[#7a716e90]"></div>
            <h3 className="flex justify-between">
              <span className="text-xs font-extrabold z-10 uppercase">
                Gulfstream
              </span>
              <span className="text-xs font-extrabold z-10 uppercase">
                650er
              </span>
            </h3>
            <p className="font-bold text-xs max-w-3xs mt-4 z-10">
              Featuring wings designed to minimize anything that could disrupt
              its natural aerodynamic balance, and powered by high-thrust
              Rolls-Royce BR725 AI-12 engines, the Gulfstream G650 is engineered
              for exceptional range and top-end speed.
            </p>
          </div>
        </div>
      </section>

      <section
        id="flight2"
        className="absolute inset-0 w-screen h-screen px-28 z-10"
      >
        <div className="w-full h-full flex flex-col pt-28 pb-14 gap-8">
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-2">
              <div className="w-sm h-px bg-[#7a716e70]"></div>
              <h2 className="text-2xl font-bold z-10">Gulfstream</h2>
              <h2 className="text-8xl font-extrabold z-10">650ER</h2>
            </div>
            <div className="flex flex-col">
              <div className="w-sm mb-2 h-px bg-[#7a716e70]"></div>
              <h2 className="text-2xl font-bold z-10">Ultra-long-range</h2>
              <h2 className="text-2xl font-bold z-10">Aircraft</h2>
            </div>
          </div>
          <div className="flex h-full justify-between">
            <div className="flex flex-col gap-4 self-end">
              <div className="flex flex-col gap-2">
                <div className="w-sm h-px bg-[#7a716e70]"></div>
                <div className="font-bold text-xs max-w-sm z-10 uppercase flex justify-between">
                  <div className="flex flex-col gap-6">
                    <div>
                      <div className="opacity-40">max operating range</div>
                      <div>11,263 km</div>
                    </div>
                    <div>
                      <div className="opacity-40">Passenger capacity</div>
                      <div>Up to 12 seats (+1 cabin server)</div>
                    </div>
                    <div>
                      <div className="opacity-40">baggage capacity</div>
                      <div>
                        5.52 m<sup>3</sup>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <div className="opacity-40">speed</div>
                      <div>480 knots</div>
                    </div>
                    <div>
                      <div className="opacity-40">endurance</div>
                      <div>14 hrs (Max for eu based aircraft)</div>
                    </div>
                    <div>
                      <div className="opacity-40">cruising altitude</div>
                      <div>15,544 m</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-sm h-px bg-[#7a716e70]"></div>
                <h3 className="text-xs font-bold z-10 uppercase opacity-40">
                  Specification
                </h3>
                <div className="font-bold text-xs max-w-3xs z-10 uppercase flex justify-between">
                  <div>
                    <div>cabin length</div>
                    <div>cabin width</div>
                    <div>cabin height</div>
                  </div>
                  <div>
                    <div>
                      14.05 m<sup className="text-xs">2</sup>
                    </div>
                    <div>
                      2.49 m<sup className="text-xs">2</sup>
                    </div>
                    <div>
                      1.92 m<sup className="text-xs">2</sup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-sm h-px bg-[#7a716e70]"></div>
              <h3 className="text-xs font-bold z-10 uppercase max-w-40">
                Direct access to private travel
              </h3>
              <p className="font-bold text-xs max-w-3xs mt-6 z-10">
                A true time-saving machine it brings Tokyo and New York an hour
                closer, and at 92% of the speed of sound, it can circle the
                globe with just a single stop
              </p>
            </div>
          </div>
        </div>
      </section>

      <Image
        ref={plane}
        src="/images/airplane2.webp"
        alt="Airplane"
        width={500}
        height={500}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-auto h-screen z-30 scale-200"
      />
      <Image
        ref={plane2}
        src="/images/airplane6.png"
        alt="Airplane"
        width={500}
        height={500}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-auto h-screen z-20 scale-75"
      />
      <div
        className="absolute top-0 left-0 w-full h-100
              bg-linear-to-t from-transparent to-[#FFF8ED] pointer-events-none"
      ></div>
    </div>
  );
};

export default Flight;
