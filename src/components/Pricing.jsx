import React, { useState, useRef } from "react";
import { FaCheckCircle, FaFire, FaCrown, FaRocket, FaArrowRight, FaStar } from "react-icons/fa";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRefs = useRef([]);

  // 3D tilt effect handler
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
      index === 1 ? 'scale(1.05)' : 'scale(1)'
    } translateZ(20px)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) ${
        index === 1 ? 'scale(1.05)' : 'scale(1)'
      } translateZ(0)`;
    }
    setHoveredCard(null);
  };

  const plans = [
    {
      name: "Starter",
      description: "Best for personal websites & portfolios",
      monthlyPrice: 2.99,
      yearlyPrice: 29.99,
      icon: FaRocket,
      color: "from-blue-500 to-cyan-500",
      features: [
        "1 Website",
        "10GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Business Pro",
      description: "Perfect for growing startups & companies",
      monthlyPrice: 7.99,
      yearlyPrice: 79.99,
      icon: FaCrown,
      color: "from-indigo-600 to-purple-600",
      features: [
        "10 Websites",
        "50GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL & Domain",
        "24/7 Priority Support",
        "CDN Included"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Advanced solution for large businesses",
      monthlyPrice: 14.99,
      yearlyPrice: 149.99,
      icon: FaFire,
      color: "from-orange-500 to-red-500",
      features: [
        "Unlimited Websites",
        "200GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL & Domain",
        "Dedicated Support",
        "Daily Backups",
        "Advanced Security"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
            <FaStar className="text-indigo-500" />
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Flexible <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Hosting</span> Plans
          </h2>
          
          <p className="text-lg text-slate-600 mb-10">
            Choose a powerful hosting plan that grows with your business.
            No hidden charges. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
              Monthly
            </span>
            
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-indigo-100 rounded-full p-1 transition-colors duration-300 hover:bg-indigo-200"
            >
              <div className={`absolute top-1 w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-0'}`} />
            </button>
            
            <span className={`text-sm font-semibold transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
              Yearly
            </span>
            
            {isYearly && (
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full animate-bounce">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isPopular = plan.popular;
            
            return (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onMouseEnter={() => setHoveredCard(index)}
                className={`relative group rounded-3xl transition-all duration-500 ease-out ${
                  isPopular ? 'md:-my-4 md:py-12' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                      <FaCrown />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Card Background with Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10`} />
                
                {/* Main Card Content */}
                <div className={`relative h-full rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500 ${
                  isPopular 
                    ? 'bg-white shadow-2xl border-indigo-100' 
                    : 'bg-white/80 shadow-lg border-slate-100 hover:border-indigo-200'
                }`}>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="text-white text-2xl" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-slate-500 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-slate-900">
                        ${price}
                      </span>
                      <span className="text-slate-400 font-medium">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-green-600 mt-1 font-medium">
                        Save ${((plan.monthlyPrice * 12) - plan.yearlyPrice).toFixed(2)} per year
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    isPopular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-1'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:-translate-y-1'
                  }`}>
                    {isPopular ? 'Start Business' : index === 0 ? 'Get Started' : 'Contact Sales'}
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Features List */}
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-600">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isPopular ? 'bg-indigo-100' : 'bg-slate-100'}`}>
                          <FaCheckCircle className={`text-sm ${isPopular ? 'text-indigo-600' : 'text-slate-500'}`} />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-50 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-sm text-slate-400 mb-4">Trusted by 50,000+ businesses worldwide</p>
          <div className="flex items-center justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-slate-300" />
              <span className="font-bold text-slate-600">Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-slate-300" />
              <span className="font-bold text-slate-600">Vercel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-slate-300" />
              <span className="font-bold text-slate-600">Notion</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;