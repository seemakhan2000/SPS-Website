"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Tenable",
    img: "/images/Tenable.png",
  },
  {
    name: "Google Cloud",
    img: "/images/google-cloud.png",
  },
  {
    name: "AWS",
    img: "/images/aws.png",
  },
  {
    name: "Microsoft",
    img: "/images/microsoft.png",
  },
  {
    name: "Fortinet",
    img: "/images/Fortinet.png",
  },
  {
    name: "IBM",
    img: "/images/IBM.png",
  },
];

export default function OurTechnologyPartners() {
  return (
    <section className="w-full py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          <div className="text-center w-full">
  <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
    Trusted Technology Ecosystem
  </p>

  <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-5 leading-tight">
    Our Technology <br className="hidden md:block" />
    Partners
  </h2>
</div>

          
        </div>
      </div>

      {/* MARQUEE */}
      <div className="overflow-hidden relative">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        <motion.div
          className="flex gap-8 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -6,
                scale: 1.04,
              }}
              className="
                group
                min-w-[260px]
                rounded-2xl
                border border-gray-200
                bg-white
                px-10 py-8
                transition-all duration-500
                hover:border-blue-500/40
                hover:shadow-[0_10px_40px_rgba(59,130,246,0.12)]
              "
            >
              {/* LOGO */}
              {/* LOGO */}
<div className="flex items-center justify-center h-24 w-full mb-6">
  <div className="relative w-[140px] h-[70px]">
    <Image
      src={item.img}
      alt={item.name}
      fill
      className="
        object-contain
        opacity-70
        group-hover:opacity-100
        transition duration-500
      "
    />
  </div>
</div>
              {/* NAME */}
              <h3 className="text-gray-900 text-xl font-semibold text-center">
                {item.name}
              </h3>

              {/* LINE */}
              <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FOOTER */}
      <div className="text-center mt-20 px-6">
        <p className="text-sm md:text-base text-gray-500 tracking-wide">
          Driving innovation with enterprise-grade partnerships
        </p>
      </div>
    </section>
  );
}