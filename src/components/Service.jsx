import React, { useRef, useEffect } from "react";
import { serviceData } from "../assets/assets";
import { FaServer, FaShieldAlt, FaRocket, FaHeadset, FaDatabase, FaGlobe, FaLock, FaTachometerAlt } from "react-icons/fa";

const Service = () => {
  const cardsRef = useRef([]);

  // Icon mapping for fallback
  const iconMap = [FaServer, FaShieldAlt, FaRocket, FaHeadset, FaDatabase, FaGlobe, FaLock, FaTachometerAlt];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // 3D tilt effect
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-indigo-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Why <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">EliteHost</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Discover the key benefits and services that make EliteHost stand out in the hosting industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            const gradients = [
              "from-blue-500 to-cyan-500",
              "from-indigo-500 to-purple-500",
              "from-purple-500 to-pink-500",
              "from-orange-500 to-red-500",
              "from-green-500 to-emerald-500",
              "from-pink-500 to-rose-500",
              "from-cyan-500 to-blue-500",
              "from-violet-500 to-purple-500"
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="group relative opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10`} />
                
                {/* Card Content */}
                <div className="relative h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  
                  {/* Background gradient blob */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${gradient} p-0.5 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        {service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <IconComponent className={`w-10 h-10 bg-gradient-to-br ${gradient} bg-clip-text text-transparent`} style={{ color: 'inherit' }} />
                        )}
                      </div>
                    </div>
                    
                    {/* Floating badge */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 text-center group-hover:text-indigo-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Content */}
                  <p className="text-slate-500 text-center text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                    {service.content}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 flex justify-center">
                    <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-slate-50 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 bg-white rounded-2xl shadow-xl border border-slate-100">
            <div className="px-6 py-3">
              <p className="text-sm text-slate-500">Ready to experience premium hosting?</p>
              <p className="text-lg font-bold text-slate-900">Start your journey today</p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* CSS for scroll animation */}
      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Service;