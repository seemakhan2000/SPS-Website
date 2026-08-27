"use client";

import Image from "next/image";

type NewsItem = {
  id: number;
  title: string;
  tag: string;
  image: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title:
      "Hash Malik at a cloud partner panel discussion – “Succeeding with IBM”",
    tag: "NEWS UPDATE",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "SPS makes a push into IoT through Mars rover demo",
    tag: "IOT SUMMIT",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "How To Secure & Monitor Your AI Models",
    tag: "EXPERT OPINION",
    image: "/images/news3.jpg",
  },
];

export default function LatestNews() {
  return (
    <section className="relative py-28 bg-[#f6f7fb] overflow-hidden">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Stay Updated with <br />
          Our Latest News & Insights
        </h2>
        <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
          Explore insights, innovations, and updates shaping our digital ecosystem.
        </p>
      </div>

      {/* LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* HERO CARD */}
        <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden shadow-xl">

          <Image
            src={newsData[0].image}
            alt=""
            fill
            className="object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

          {/* SIDE ACCENT BAR */}
          <div className="absolute left-0 top-0 w-1 h-full bg-cyan-400" />

          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-semibold">
            {newsData[0].tag}
          </div>

          <div className="absolute bottom-8 left-8 right-10 text-white">
            <h3 className="text-2xl font-semibold leading-snug">
              {newsData[0].title}
            </h3>

            <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl text-sm font-medium">
              Read Full Story
            </button>
          </div>
        </div>

        {/* RIGHT STACK */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          <GlassNewsCard item={newsData[1]} />
          <GlassNewsCard item={newsData[2]} />

          {/* FLOATING CTA */}
          <div className="relative rounded-2xl p-6 bg-white shadow-md border border-gray-200 overflow-hidden group">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-60" />

            <h3 className="text-lg font-semibold text-gray-900 relative z-10">
              More insights coming soon
            </h3>

            <p className="text-sm text-gray-500 mt-2 relative z-10">
              Stay tuned for upcoming innovations and industry updates.
            </p>

            <div className="absolute bottom-4 right-4 w-9 h-9 bg-black text-white flex items-center justify-center rounded-full">
              →
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

//////////////////////////////////////////////////////
// 🧊 GLASS NEWS CARD (SIDE)
//////////////////////////////////////////////////////

function GlassNewsCard({ item }: { item: NewsItem }) {
  return (
    <div className="relative h-[180px] rounded-2xl overflow-hidden group shadow-sm border border-white/20">

      <Image
        src={item.image}
        alt=""
        fill
        className="object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />

      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] px-3 py-1 rounded-full font-semibold">
        {item.tag}
      </div>

      <div className="absolute bottom-4 left-4 right-10 text-white text-sm font-medium leading-snug">
        {item.title}
      </div>

      <div className="absolute bottom-4 right-4 w-8 h-8 bg-white text-black flex items-center justify-center rounded-full">
        →
      </div>
    </div>
  );
}