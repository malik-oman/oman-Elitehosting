import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { FaArrowRight, FaPlay, FaServer, FaShieldAlt, FaRocket } from "react-icons/fa";

const Hero = () => {
  const heroRef = useRef(null);

  // Mouse move effect for background
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        heroRef.current.style.setProperty("--mouse-x", `${x}px`);
        heroRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-24 pb-20"
      style={{ "--mouse-x": "0px", "--mouse-y": "0px" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs */}
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(var(--mouse-x), var(--mouse-y))` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1))`,
            animationDelay: "1s"
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl"
          style={{ transform: `translate(calc(-50% + var(--mouse-x) * 0.5), calc(-50% + var(--mouse-y) * 0.5))` }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-indigo-100 rounded-full shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-500 group cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Supercharge your website today
              </span>
              <FaRocket className="text-indigo-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>

            {/* Heading with gradient text */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900">
                Premium Web
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Hosting
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-200 -z-10" viewBox="0 0 200 9" fill="none">
                    <path d="M2.00025 6.99997C25.7501 2.99999 83.2344 -3.10684 198.001 6.99999" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                <br />
                <span className="text-slate-600 font-medium">Solution</span>
              </h1>
              <p className="text-xl text-slate-500 font-light">for your business</p>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Lightning-fast hosting with <span className="font-semibold text-indigo-600">99.9% uptime</span>, top-notch security, and 24/7 expert support to keep your website running smoothly.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { icon: FaServer, text: "SSD Storage" },
                { icon: FaShieldAlt, text: "SSL Included" },
                { icon: FaRocket, text: "Free CDN" }
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:bg-white transition-all duration-300"
                >
                  <feature.icon className="text-indigo-500" />
                  {feature.text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="group flex items-center gap-3 px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border-2 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <FaPlay className="text-indigo-600 ml-1" size={14} />
                </div>
                View Plans
              </button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-slate-200/60">
              <p className="text-sm text-slate-500 mb-4">Trusted by 10,000+ companies worldwide</p>
              <div className="flex items-center justify-center lg:justify-start gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Replace with actual company logos */}
                <div className="h-8 w-24 bg-slate-300 rounded animate-pulse" />
                <div className="h-8 w-24 bg-slate-300 rounded animate-pulse" />
                <div className="h-8 w-24 bg-slate-300 rounded animate-pulse" />
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="w-full lg:w-1/2 relative">
            {/* Main image container with floating animation */}
            <div className="relative group">
              {/* Decorative elements behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
                <img
                  src={assets.HeroImg}
                  alt="Hosting Dashboard"
                  className="w-full h-auto object-cover"
                />
                
                {/* Glassmorphism overlay card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Server Status</p>
                      <p className="text-white/80 text-sm">All systems operational</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-3 py-1 bg-green-400/30 text-green-100 text-xs font-bold rounded-full border border-green-400/50">
                        99.9% Uptime
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats cards */}
              <div className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <FaServer className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">50ms</p>
                    <p className="text-xs text-slate-500">Response Time</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <FaShieldAlt className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">100%</p>
                    <p className="text-xs text-slate-500">Secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;