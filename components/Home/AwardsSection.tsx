"use client";

export default function AwardsSection() {
  return (
    <section className="relative w-full  bg-gradient-to-r bg-blue-900 text-white py-15 px-6 overflow-hidden">
      
      {/* 🔷 Left Diagonal Light Shape */}
      <div className="absolute top-0 left-0 w-[300px] h-full bg-white/10 transform -skew-x-12"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* 🔹 Heading */}
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed mb-6">
          We have an award-winning team that includes IBM-certified inventors
          and champions who have won multiple worldwide competitions.
        </h2>

        {/* 🔹 Description */}
        <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-3xl mx-auto">
          As an enterprise-class innovator and solution creator with expertise across all phases of product design, development,
          deployment, security, operations, monitoring, and support, we have been helping our clients build, deploy and secure
          applications. Our development, quality, cybersecurity, training, operations, monitoring, and support teams work in
          tandem to create high-performance, secure, reliable, scalable, and manageable systems.
        </p>

      </div>
    </section>
  );
}