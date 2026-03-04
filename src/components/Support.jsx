import React, { useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { FaCheckCircle, FaHeadset, FaClock, FaGlobe, FaBolt, FaArrowRight } from "react-icons/fa";

const Support = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.05;
        imageRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: FaClock,
      title: "Always Available",
      text: "Ensure support is available 24/7, including weekends and holidays.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaGlobe,
      title: "Global CDN",
      text: "Implement a CDN to deliver content quickly to users worldwide.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: FaHeadset,
      title: "Multi-Channel Support",
      text: "Offer multiple support channels like live chat, email, phone, and ticketing system.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaBolt,
      title: "Rapid Response",
      text: "Provide rapid response times to minimize downtime and customer frustration.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Floating dots */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-indigo-400 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
        <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative group animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition duration-700" />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl -z-10 transform group-hover:translate-x-2 group-hover:translate-y-2 transition duration-500" />
            
            {/* Main image container */}
            <div ref={imageRef} className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <img
                src={assets.supportImg}
                alt="24/7 Support Team"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              />
              
              {/* Glassmorphism overlay card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg animate-pulse">
                    <FaHeadset className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Live Support</p>
                    <p className="text-white/80 text-sm">Average response time: 2 min</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <FaCheckCircle className="text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">99.9%</p>
                  <p className="text-xs text-slate-500">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Customer Support</span>
            </div>

            {/* Heading */}
            <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-100">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                24/7 Support for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Your Success
                </span>
              </h2>
            </div>

            <p className="text-lg text-slate-600 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-200">
              Our dedicated team of experts is always ready to help you with any technical issues or questions you may have.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-xl hover:border-indigo-200 transition-all duration-300 animate-on-scroll opacity-0 translate-x-8"
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  >
                    {/* Icon with gradient background */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="text-white text-xl" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {feature.text}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <FaArrowRight className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-700">
              <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:-translate-y-1 transition-all duration-300">
                <FaHeadset className="text-xl" />
                Contact Support
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for scroll animations */}
      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </section>
  );
};

export default Support;