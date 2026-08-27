"use client";

import { motion } from "framer-motion";

export default function ClientsSection() {
  const logos = [
    "/images/aws1.png",
    "/images/IBM1.png",
    "/images/microsoft2.webp",
  ];

  return (
    <section className="w-full py-28 bg-white overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Trusted by Global Leaders
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-5 leading-tight">
            Built for Brands <br className="hidden md:block" />
            That Shape the Future
          </h2>
        </div>
      </div>

      {/* Marquee */}
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
          {[...logos, ...logos].map((logo, i) => (
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
              <div className="flex items-center justify-center h-24 w-full">
                <img
                  src={logo}
                  alt="client logo"
                  className="
                    w-[140px]
                    h-[60px]
                    object-contain
                    opacity-70
                    group-hover:opacity-100
                    transition duration-500
                  "
                />
              </div>

              {/* LINE */}
              <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20">
        <p className="text-sm md:text-base text-gray-500 tracking-wide">
          Empowering enterprises with next-generation digital transformation
        </p>
      </div>
    </section>
  );
}