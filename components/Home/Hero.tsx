"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Layers,
  Radar,
  Lock,
  FileCheck,
  ChevronLeft, ChevronRight
} from "lucide-react";
const slides = [
  { video: "/video/1video.mp4" },
  { video: "/video/2video.mp4" },
  { video: "/video/3video.mp4" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* BACKGROUND VIDEO */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      ))}

      {/* LEFT CONTENT */}
      <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 text-white max-w-xl z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          What If
        </h1>

       <ul className="space-y-3 text-gray-300 text-sm md:text-base mb-6">

  <li className="flex items-center gap-2">
    <ShieldCheck size={16} className="text-cyan-400" />
    Stronger Identity & Access Management.
  </li>

  <li className="flex items-center gap-2">
    <Layers size={16} className="text-cyan-400" />
    Modernized enterprise systems.
  </li>

  <li className="flex items-center gap-2">
    <Radar size={16} className="text-cyan-400" />
    24/7 Security Operations Center.
  </li>

  <li className="flex items-center gap-2">
    <Lock size={16} className="text-cyan-400" />
    Simplified Cybersecurity management.
  </li>

  <li className="flex items-center gap-2">
    <FileCheck size={16} className="text-cyan-400" />
    Instant compliance reporting.
  </li>

</ul>
        <div className="flex gap-4">
          <button className="bg-cyan-500 px-6 py-3 rounded-full hover:bg-cyan-600 transition">
            Request Consultation
          </button>

          <button className="bg-blue-900 px-6 py-3 rounded-full hover:bg-blue-800 transition">
            How can we help you today
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
   {/* RIGHT CONTENT */}
<div className="absolute inset-0 flex items-center justify-end px-6 md:px-20 z-20">
  <div className="max-w-lg text-right text-white bg-black/20 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg">

    <p className="text-xs md:text-sm uppercase tracking-widest text-cyan-300 mb-3">
      Enterprise IT Solutions
    </p>

    <h2 className="text-lg md:text-2xl font-medium text-gray-200 mb-4 leading-relaxed">
      IT solutions designed to solve real business challenges with precision, security, and scalability.
    </h2>

    <h3 className="text-2xl md:text-4xl font-bold leading-snug">
      <span className="text-white">AI</span>
      <span className="text-gray-400"> • </span>
      <span className="text-cyan-400">Cloud</span>
      <span className="text-gray-400"> • </span>
      <span className="text-white">Automation</span>
      <span className="text-gray-400"> • </span>
      <span className="text-cyan-400">Cybersecurity</span>
    </h3>

    <div className="mt-5 flex justify-end">
      <div className="h-[2px] w-24 bg-gradient-to-l from-cyan-400 to-transparent rounded-full"></div>
    </div>

  </div>
</div>
      {/* ARROWS */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white z-30"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white z-30"
      >
        <ChevronRight />
      </button>

    </div>
  );
}