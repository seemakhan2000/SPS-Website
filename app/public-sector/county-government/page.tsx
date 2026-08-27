"use client";

export default function CountyGovernmentPage() {
  return (
    <div className="font-['DM_Sans',sans-serif] bg-white text-[#111827] leading-normal overflow-x-hidden top-12">
      {/* HERO SECTION - Two Column Layout */}
      <section className="relative bg-gradient-to-br from-[#0a0e2e] via-[#0d1b4b] to-[#1a3472] text-white py-21 px-[5%] overflow-hidden">
        {/* decorative shapes */}
        <div className="absolute right-[-60px] top-[-60px] w-[420px] h-[420px] rounded-full border-[1.5px] border-[rgba(56,189,248,0.15)] pointer-events-none"></div>
        <div className="absolute right-[60px] bottom-[-80px] w-[260px] h-[260px] rounded-full border border-[rgba(37,99,235,0.2)] pointer-events-none"></div>
        {/* overlay radials */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(37,99,235,0.18)_0%,transparent_70%),radial-gradient(ellipse_40%_50%_at_20%_80%,rgba(56,189,248,0.1)_0%,transparent_60%)] pointer-events-none"></div>

        {/* Added padding-1 (4px) to this inner container */}
        <div className="relative max-w-[1200px] mx-auto z-[2] grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-1">
          {/* Left Column - Text */}
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#38bdf8] mb-3">
              Public Sector
            </span>
            <h1 className="font-['Playfair_Display',serif] text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.2] mb-4">
              County Government
            </h1>
            <p className="text-base font-light text-white/90 mb-4">
              Accelerate your county's digital transformation with an executive-led strategy focused on cybersecurity, cloud, and AI.
            </p>
            <p className="text-base font-light text-white/90 mb-4">
              We start with a county-wide Cyber Range event to raise executive awareness, followed by department-specific Tabletop Exercises that reveal risks and modernization opportunities.
            </p>
            <p className="text-base font-light text-white/90 mb-4">
              From refactoring legacy systems to unlocking data for AI, we help you build a multi-year roadmap aligned with your mission to serve, protect, and innovate.
            </p>
            <p className="text-base font-light text-white/90 mb-6">
              Ready to lead the change? Let's shape your county's digital future together.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-[#2563eb] text-white text-sm font-semibold py-3 px-7 rounded transition-colors hover:bg-[#1d4ed8]">
              Get Started →
            </a>
          </div>

          {/* Right Column - Image / Visual (Rectangular with 4 corners) */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-white/20">
              <img 
                src="/images/country.jpg" 
                alt="County Government Services"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-[#38bdf8] rounded-tl-lg"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-[#38bdf8] rounded-tr-lg"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-[#38bdf8] rounded-bl-lg"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-[#38bdf8] rounded-br-lg"></div>
          </div>
        </div>
      </section>

      {/* SERVICES HEADER - Reduced spacing */}
      <div className="bg-white text-center pt-12 pb-4 px-[5%]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-[clamp(1.6rem,3vw,2.2rem)] font-bold mb-3">
            Our Services for County Government
          </h2>
          <p className="text-[0.95rem] text-[#6b7280] mb-4">
            Explore County Government services we provide across our core practices
          </p>
          <div className="flex justify-center">
            <span className="bg-[#0a0e2e] text-white text-[0.8rem] font-semibold tracking-[0.1em] uppercase py-2.5 px-8 rounded-t">
              Cybersecurity
            </span>
          </div>
        </div>
      </div>

      {/* CYBER PANEL - Reduced spacing */}
      <div className="bg-gradient-to-br from-[#0a0e2e] to-[#0f2257] py-10 px-[5%]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
          <div className="flex flex-col gap-3">
            <a href="#" className="text-[#38bdf8] font-semibold text-[0.95rem] no-underline">
              Vulnerability Assessment and Penetration Testing
            </a>
            <a href="#" className="text-white/75 text-[0.9rem] no-underline">
              SOC as a Service
            </a>
          </div>
          <div>
            <p className="text-white/90 text-[0.95rem] leading-relaxed mb-3">
              In this service, SPS cybersecurity assessment consultants conduct and document a formal Security Assessment, Vulnerability Assessment, Penetration Testing and Configuration Reviews for Information Security Assets (IT and OT).
            </p>
            <p className="text-white/90 text-[0.95rem] leading-relaxed mb-4">
              This is done with a view of identifying, estimating and prioritizing risks to which your organization's operations are exposed due to information security vulnerabilities.
            </p>
            <a href="#" className="inline-block border border-white/60 text-white py-2 px-6 rounded text-sm no-underline">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* STAT BAR - Reduced spacing */}
      <div className="bg-gradient-to-r from-[#0a0e2e] to-[#1a3472] py-8 px-[5%]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
          <div>
            <span className="font-['Playfair_Display',serif] text-3xl font-bold text-[#38bdf8] block mb-1">50+</span>
            <span className="text-xs text-white/75">County Governments Served</span>
          </div>
          <div>
            <span className="font-['Playfair_Display',serif] text-3xl font-bold text-[#38bdf8] block mb-1">200+</span>
            <span className="text-xs text-white/75">Cyber Range Events Conducted</span>
          </div>
          <div>
            <span className="font-['Playfair_Display',serif] text-3xl font-bold text-[#38bdf8] block mb-1">15+</span>
            <span className="text-xs text-white/75">Years of Public Sector Expertise</span>
          </div>
        </div>
      </div>

      {/* TRANSFORM SECTION - Compact */}
      <section className="bg-white py-12 px-[5%]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_340px] gap-10 items-center">
          <div>
            <h2 className="font-['Playfair_Display',serif] text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold mb-3">
              Transform How Your County Serves Its People
            </h2>
            <p className="text-[0.95rem] text-[#374151] mb-3">
              Unlock the full potential of your county government with a guided, executive-led approach to digital transformation.
            </p>
            <p className="text-[0.95rem] text-[#374151]">
              From cybersecurity awareness to cloud migration and AI readiness, we help you modernize the systems that power your public services.
            </p>
          </div>
          <div className="relative">
            <div className="w-full rounded-lg aspect-[4/3] bg-gradient-to-br from-[#1a3472] to-[#2563eb] overflow-hidden">
              <img 
                src="/images/di.jpg" 
                alt="Digital Transformation"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-[3px] border-l-[3px] border-[#38bdf8] rounded-tl-lg"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-[3px] border-r-[3px] border-[#38bdf8] rounded-tr-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-[3px] border-l-[3px] border-[#38bdf8] rounded-bl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-[3px] border-r-[3px] border-[#38bdf8] rounded-br-lg"></div>
          </div>
        </div>
      </section>

      {/* DIGITAL SECTION - Compact */}
    {/* DIGITAL SECTION - Compact */}
<section className="bg-[#f4f6fb] py-12 px-[5%] border-t border-[#e5e7eb]">
  <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10">
    <div className="relative flex items-center justify-center">
      <div className="w-full rounded-lg aspect-[4/3] bg-gradient-to-br from-[#0f2257] to-[#1a3472] overflow-hidden">
        <img 
          src="/images/ccl.jpg" 
          alt="AI Cloud Cybersecurity"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>
      <div className="absolute -top-2 -left-2 w-6 h-6 border-t-[3px] border-l-[3px] border-[#38bdf8] rounded-tl-lg"></div>
      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-[3px] border-r-[3px] border-[#38bdf8] rounded-tr-lg"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-[3px] border-l-[3px] border-[#38bdf8] rounded-bl-lg"></div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-[3px] border-r-[3px] border-[#38bdf8] rounded-br-lg"></div>
    </div>
    <div>
      <h2 className="font-['Playfair_Display',serif] text-[clamp(1.2rem,2vw,1.6rem)] font-bold mb-3">
        Helping County Governments accelerate digital transformation and IT modernization with AI, Cloud, and Cybersecurity
      </h2>
      <p className="text-[0.95rem] text-[#374151] mb-3">
        We begin with a county-wide Cyber Range event, led by the County Executive and joined by department heads from Finance, HR, Public Safety, Fire, Utilities, and more.
      </p>
      <p className="text-[0.95rem] text-[#374151] mb-3">
        This immersive simulation builds executive awareness around the impact of cyber incidents and sets the stage for a broader transformation effort.
      </p>
      <p className="text-[0.95rem] text-[#374151] mb-3">
        Next, we conduct Tabletop Exercises with each department to evaluate risks across information systems, infrastructure, and service delivery.
      </p>
      <p className="text-[0.95rem] text-[#374151] mb-3">
        These sessions go beyond cybersecurity — they uncover opportunities to modernize hardware and software, refactor legacy applications, migrate to the cloud, and unlock the potential of data for AI and advanced analytics.
      </p>
      <p className="text-[0.95rem] text-[#374151] mb-4">
        The outcome is a comprehensive, top-down digital transformation blueprint — a multi-year roadmap that aligns technology modernization with your county's mission to serve, protect, and innovate.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        <div className="bg-white border border-[#e5e7eb] border-l-[3px] border-l-[#2563eb] rounded p-3">
          <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#2563eb] mb-1">Cyber Range</div>
          <div className="text-xs text-[#374151] leading-relaxed">Executive-led simulation that builds awareness and sets transformation strategy</div>
        </div>
        <div className="bg-white border border-[#e5e7eb] border-l-[3px] border-l-[#2563eb] rounded p-3">
          <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#2563eb] mb-1">Tabletop Exercises</div>
          <div className="text-xs text-[#374151] leading-relaxed">Department-level risk evaluation across IT, OT, and service delivery systems</div>
        </div>
        <div className="bg-white border border-[#e5e7eb] border-l-[3px] border-l-[#2563eb] rounded p-3">
          <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#2563eb] mb-1">Cloud Migration</div>
          <div className="text-xs text-[#374151] leading-relaxed">Refactor legacy systems and migrate workloads to modern cloud platforms</div>
        </div>
        <div className="bg-white border border-[#e5e7eb] border-l-[3px] border-l-[#2563eb] rounded p-3">
          <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#2563eb] mb-1">AI Readiness</div>
          <div className="text-xs text-[#374151] leading-relaxed">Unlock data assets to power AI and advanced analytics across departments</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CLIENTS SECTION - Three images with consistent size (180x120 each) */}
      <section className="bg-white py-12 px-[5%] text-center border-t border-[#e5e7eb]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-[clamp(1.6rem,3vw,2.2rem)] font-bold mb-3">
            Customers we are proud to work with.
          </h2>
          <p className="text-[0.9rem] text-[#6b7280] mb-8">
            Our mission is to deliver compelling narratives, remarkable experiences, and outstanding results for our clients.
          </p>
          {/* Flex container ensures all three cards have equal width and aligned properly */}
          <div className="flex justify-center items-center gap-8 flex-wrap mb-4">
          

            {/* Client 2 - Fixed width & height: 180x120 */}
            <div className="relative w-[180px] h-[120px] shrink-0">
              <div className="w-full h-full bg-white border-2 border-[#cbd5e1] rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/images/of.jpg"
                  alt="Official Seal"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#2563eb] rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-[#2563eb] rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#2563eb] rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#2563eb] rounded-br-lg"></div>
            </div>

            {/* Client 3 - Fixed width & height: 180x120 */}
            <div className="relative w-[180px] h-[120px] shrink-0">
              <div className="w-full h-full bg-white border-2 border-[#cbd5e1] rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/images/p.png"
                  alt="Government Partner"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#2563eb] rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-[#2563eb] rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#2563eb] rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#2563eb] rounded-br-lg"></div>
            </div>
          </div>
          <p className="text-[0.8rem] text-[#6b7280]">
            Trusted by county governments across the nation to deliver secure, modern public services.
          </p>
        </div>
      </section>
    </div>
  );
}