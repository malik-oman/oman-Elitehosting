import React, { useRef, useEffect } from 'react'
import { FaArrowRight, FaServer, FaDatabase, FaCloud, FaShieldAlt, FaRocket, FaGlobe } from 'react-icons/fa'
import { serviceProvider } from '../assets/assets'

const Features = () => {
  const cardsRef = useRef([]);

  // 3D tilt effect on mouse move
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    }
  };

  // Icon mapping for fallback
  const iconMap = [FaServer, FaDatabase, FaCloud, FaShieldAlt, FaRocket, FaGlobe];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating dots pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, indigo 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            We Provide <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Hosting</span>
            <br />Solutions
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Select your solution and we will help you narrow down our best 
            high-speed options to perfectly fit your needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceProvider.map((service, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            
            return (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                
                {/* Inner content with glass effect */}
                <div className="absolute inset-0.5 rounded-3xl bg-white -z-5" />

                {/* Icon Container with animation */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-indigo-500/25">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <IconComponent className="w-8 h-8 text-indigo-600" />
                    )}
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500">
                    <FaArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                  {service.content}
                </p>

                {/* Animated Link */}
                <div className="flex items-center gap-2 text-indigo-600 font-semibold group/link cursor-pointer">
                  <span className="relative">
                    View Details
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover/link:w-full transition-all duration-300" />
                  </span>
                  <FaArrowRight className="transform group-hover/link:translate-x-2 transition-transform duration-300" />
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-50 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Number indicator */}
                <div className="absolute bottom-4 right-4 text-6xl font-bold text-slate-100 group-hover:text-indigo-50 transition-colors duration-500 select-none">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 p-2 pr-6 bg-white rounded-full shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <FaRocket className="text-white text-xl" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-900">Ready to get started?</p>
              <p className="text-xs text-slate-500">Explore all features</p>
            </div>
            <button className="ml-4 px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors duration-300">
              View All
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features