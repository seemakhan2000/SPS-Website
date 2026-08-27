"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TrainingPage = () => {
  // Sample data for the graph
  const data = [
    { name: 'Jan', students: 45 },
    { name: 'Feb', students: 52 },
    { name: 'Mar', students: 38 },
    { name: 'Apr', students: 65 },
    { name: 'May', students: 78 },
    { name: 'Jun', students: 90 },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-[#0F1C3F] py-35">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#101B2D]">
                🚀 New Courses Added Monthly
              </div>
              
              <h1 className="mb-3 text-4xl font-bold text-white lg:text-5xl">
                TRAINING AND CERTIFICATIONS
              </h1>
              <p className="mb-6 text-lg text-gray-300 lg:text-xl">
                Grow Your IT & Business Skills & Get Certified
              </p>
              
              {/* Stats */}
              <div className="mt-8 flex flex-wrap justify-center gap-8 lg:justify-start">
                <div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-300">Courses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-300">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Graph */}
            <div className="h-[280px] w-full rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <h3 className="mb-2 text-center text-sm font-semibold text-gray-300">
                Monthly Student Enrollment
              </h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
                  <XAxis dataKey="name" stroke="#ffffff80" fontSize={12} />
                  <YAxis stroke="#ffffff80" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0F1C3F', 
                      border: '1px solid #ffffff30',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                    labelStyle={{ color: 'white' }}
                  />
                  <Bar dataKey="students" fill="#60A5FA" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="border-b border-gray-200 bg-white py-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-[#101B2D]">NUTANIX</span>
            <span className="font-semibold text-[#101B2D]">Red Hat</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <select className="rounded border border-gray-300 bg-white px-4 py-2 text-sm text-[#101B2D] focus:border-[#101B2D] focus:outline-none">
              <option>Tech Provider</option>
            </select>
            <select className="rounded border border-gray-300 bg-white px-4 py-2 text-sm text-[#101B2D] focus:border-[#101B2D] focus:outline-none">
              <option>Course Name</option>
            </select>
            <select className="rounded border border-gray-300 bg-white px-4 py-2 text-sm text-[#101B2D] focus:border-[#101B2D] focus:outline-none">
              <option>Select Month</option>
            </select>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-sm text-gray-600">
            All courses can be scheduled for in-house training at a negotiated rate.
          </p>
          <div className="mx-auto max-w-lg rounded-lg border-2 border-dashed border-[#101B2D] bg-white py-16">
            <p className="text-xl text-gray-500">No Upcoming Schedules to Display</p>
          </div>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block rounded bg-[#101B2D] px-6 py-3 font-semibold text-white transition hover:bg-[#1a2f4a]"
            >
              Would you like to learn more or need to schedule an appointment? Please click here
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;