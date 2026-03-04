import React, { useEffect, useRef, useState } from "react";
import { assets, teamData } from "../assets/assets";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-40 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div 
          className={`text-center mb-24 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              EliteHosting
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Learn about our journey, our mission, and how we deliver world-class hosting solutions.
          </p>
        </div>

        {/* Story Section */}
        <div 
          className={`flex flex-col md:flex-row items-center gap-16 mb-32 transform transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          
          <div className="w-full md:w-1/2 group/content">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 relative inline-block">
              Our Story
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover/content:w-full" />
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed transform transition-all duration-500 hover:translate-x-2">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mb-1" />
                EliteHost was built with one goal in mind — to empower businesses
                with premium hosting and domain services that are fast, secure,
                and affordable.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed transform transition-all duration-500 hover:translate-x-2 delay-75">
                <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mr-3 mb-1" />
                We combine cutting-edge technology with customer-first support to
                deliver unmatched reliability, uptime, and performance.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed transform transition-all duration-500 hover:translate-x-2 delay-100">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mb-1" />
                From domain registration to scalable cloud hosting, we provide
                everything you need to build, grow, and succeed online.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
              {[
                { number: '19+', label: 'Years Experience' },
                { number: '50K+', label: 'Active Clients' },
                { number: '99.9%', label: 'Uptime SLA' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group/stat cursor-default">
                  <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2 transform transition-transform duration-300 group-hover/stat:scale-110">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 group/image">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                className="h-96 w-full object-cover transform transition-all duration-700 ease-out group-hover/image:scale-110"
                src={assets.aboutImg}
                alt="About EliteHost"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover/image:translate-y-0 transition-transform duration-500 ease-out">
                <p className="text-white font-semibold text-lg">Premium Infrastructure</p>
                <p className="text-white/80 text-sm">Global data centers with 24/7 monitoring</p>
              </div>
            </div>
          </div>

        </div>

        {/* Team Section Header */}
        <div 
          className={`text-center mb-20 transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Meet Our{' '}
            <span className="relative">
              Team
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-blue-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over the last 19 years, we've grown into a passionate team dedicated 
            to delivering reliable and innovative hosting services.
          </p>
        </div>

        {/* Team Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamData.map((team, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-4 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={team.image}
                  className="object-cover w-full h-80 transform transition-all duration-700 ease-out group-hover:scale-110"
                  alt={team.name}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110">
                    <FaLinkedin size={18} />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-400 transition-all duration-300 hover:scale-110">
                    <FaTwitter size={18} />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-110">
                    <FaEnvelope size={18} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="text-center p-8 relative">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {team.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {team.designation}
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>

              {/* Decorative Corner */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Footer Credit */}
        <div className="mt-24 text-center">
          <p className="text-sm text-gray-400 font-medium tracking-wider uppercase">
            Built by Malik Oman
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;