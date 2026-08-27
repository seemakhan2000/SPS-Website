"use client";
export default function CareersPage() {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full Time",
      location: "Remote",
      experience: "2+ Years",
    },
    {
      title: "UI/UX Designer",
      type: "Part Time",
      location: "Lahore",
      experience: "1+ Years",
    },
    {
      title: "Next.js Developer",
      type: "Internship",
      location: "Hybrid",
      experience: "Fresh",
    },
  ];

  const values = [
    {
      title: "Innovation",
      desc: "We build modern digital solutions using creativity, technology and collaboration.",
      icon: "✨",
    },
    {
      title: "Integrity",
      desc: "We believe in honesty, transparency and long-term trust with our clients.",
      icon: "🛡️",
    },
    {
      title: "Growth",
      desc: "We encourage continuous learning, mentorship and professional development.",
      icon: "📈",
    },
    {
      title: "Teamwork",
      desc: "Strong collaboration helps us create impactful experiences together.",
      icon: "🤝",
    },
    {
      title: "Excellence",
      desc: "We focus on quality, performance and delivering world-class digital products.",
      icon: "🏆",
    },
    {
      title: "Respect",
      desc: "We value diversity, inclusion and positive communication in every role.",
      icon: "💙",
    },
  ];

  const benefits = [
    {
      title: "Flexible Work",
      desc: "Remote and hybrid opportunities for better work-life balance.",
      icon: "🏡",
    },
    {
      title: "Learning Support",
      desc: "Courses, mentorship and modern technologies to boost your career.",
      icon: "📚",
    },
    {
      title: "Competitive Salary",
      desc: "Attractive compensation packages with growth opportunities.",
      icon: "💰",
    },
    {
      title: "Friendly Culture",
      desc: "A collaborative environment where every idea matters.",
      icon: "🌍",
    },
  ];

  return (
    <div className="bg-[#0F1C3F] overflow-hidden">

      {/* HERO SECTION - Dark Blue Background */}
      <section className="relative overflow-hidden min-h-[95vh] flex items-center">

        {/* BACKGROUND - Dark Blue bg-[#0A0E1F] */}
        <div className="absolute inset-0 bg-[#0A0E1F]" />

        {/* LIGHT EFFECTS - Adjusted for dark blue background */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[130px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-12 lg:pt-14 pb-12 lg:pb-14 w-full">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mt-4">
                Build The
                <span className="block text-blue-300">
                  Future With Us
                </span>
              </h1>

              <p className="text-white/80 text-sm md:text-base leading-relaxed mt-4 max-w-2xl">
                Join a modern digital company focused on innovation,
                collaboration and technology excellence. Grow your career
                with meaningful opportunities and a world-class culture.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3 mt-6">

                <button className="bg-white text-[#0A0E1F] px-5 py-2.5 rounded-xl font-bold shadow-[0_15px_40px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 text-sm">
                  Explore Careers
                </button>

                <button className="border border-white/25 text-white px-5 py-2.5 rounded-xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-sm">
                  Internship Program
                </button>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-3 mt-8 max-w-md">

                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5">
                  <h2 className="text-xl md:text-2xl font-black text-white">150+</h2>
                  <p className="text-white/70 text-xs">Employees</p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5">
                  <h2 className="text-xl md:text-2xl font-black text-white">20+</h2>
                  <p className="text-white/70 text-xs">Countries</p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5">
                  <h2 className="text-xl md:text-2xl font-black text-white">98%</h2>
                  <p className="text-white/70 text-xs">Satisfaction</p>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center lg:justify-end">

              {/* MAIN CARD */}
              <div className="relative w-full max-w-[450px] bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[28px] p-3 lg:p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

                {/* TOP FLOAT CARD */}
                <div className="absolute -top-4 left-3 bg-white rounded-xl px-3 py-2 shadow-2xl z-10">
                  <h3 className="font-bold text-sm">
                    Hiring Now 🚀
                  </h3>
                  <p className=" text-xs mt-0.5">
                    20+ Open Positions
                  </p>
                </div>

                {/* IMAGE */}
                <div className="overflow-hidden rounded-[20px] border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                    alt="career"
                    className="w-full h-[250px] md:h-[280px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                {/* BOTTOM FLOAT CARD */}
                <div className="absolute -bottom-4 right-3 bg-white rounded-xl px-3 py-2 shadow-2xl z-10">
                  <h3 className="font-bold text-gray-900 text-sm">
                    Flexible Environment
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Remote & Hybrid Roles
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* OPEN POSITIONS */}
      <section className="py-24 px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-[#0b7285] font-bold tracking-[4px] uppercase text-sm">
              Career Opportunities
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-5">
              Open Positions
            </h2>

            <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              Explore exciting opportunities and become part of a fast-growing,
              innovative digital company.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {jobs.map((job, i) => (
              <div
                key={i}
                className="group bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500"
              >

                <div className="flex items-center justify-between">
                  <span className="bg-[#dff8fd] text-[#0b7285] px-4 py-2 rounded-full text-sm font-bold">
                    {job.type}
                  </span>

                  <span className="text-gray-400 text-sm">
                    {job.location}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mt-8 leading-snug">
                  {job.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-relaxed">
                  Experience Required: {job.experience}
                </p>

                <button className="mt-8 w-full bg-gradient-to-r from-[#0b7285] to-[#31b6d8] text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg">
                  Apply Now
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* VALUES */}
      <section className="py-24 px-6 lg:px-10 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <span className="text-[#0b7285] font-bold tracking-[4px] uppercase text-sm">
              Our Culture
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-5">
              Our Core Values
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {values.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-[#f8fcff] border border-gray-100 rounded-[32px] p-8 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
              >

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0b7285] to-[#31b6d8]" />

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-[#0b7285] to-[#31b6d8] flex items-center justify-center text-4xl shadow-xl mb-8 text-white group-hover:rotate-6 transition duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* BENEFITS */}
      <section className="py-24 px-6 lg:px-10 bg-[#f5fbfd]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <span className="text-[#0b7285] font-bold tracking-[4px] uppercase text-sm">
              Employee Benefits
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-5">
              Why Work With Us
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {benefits.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[32px] p-8 border border-gray-100 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
              >

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-[#0b7285] to-[#31b6d8] flex items-center justify-center text-4xl text-white shadow-xl mb-8">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-gray-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CTA SECTION */}
      <section className="px-6 lg:px-10 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#0A0E1F] via-[#1a2350] to-[#2a3a80] px-8 md:px-16 py-20 text-center shadow-[0_25px_70px_rgba(0,0,0,0.2)]">

            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full" />

            <div className="relative z-10">

              <span className="inline-flex bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-2 rounded-full text-white text-sm">
                Start Your Journey
              </span>

              <h2 className="text-4xl md:text-6xl font-black text-white mt-8 leading-tight">
                Ready To Build
                <span className="block text-blue-300">
                  Your Future?
                </span>
              </h2>

              <p className="text-white/80 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
                Become part of a team that values innovation, collaboration
                and growth. Let’s create impactful digital experiences together.
              </p>

              <button className="mt-10 bg-white text-[#0A0E1F] font-bold px-10 py-4 rounded-2xl shadow-2xl hover:scale-105 transition duration-300">
                Apply Today
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}