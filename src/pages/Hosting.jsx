import React, { useEffect, useRef } from 'react'
import { FaCheckCircle, FaServer, FaArrowRight, FaCloud, FaDatabase } from 'react-icons/fa'
import { assets } from '../assets/assets'

const Hosting = () => {
  const sectionsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  const hostingPlans = [
    {
      icon: FaServer,
      title: 'Shared Hosting',
      description: 'Perfect for beginners and small websites. Launch your site quickly with our optimized shared hosting environment.',
      features: ['Easy-to-use control panel', 'One-click WordPress install', 'Free website migration'],
      image: assets.sharedDomainImg,
      imageAlt: 'Shared Hosting',
      reverse: false
    },
    {
      icon: FaCloud,
      title: 'VPS Hosting',
      description: 'Get more power and flexibility with dedicated resources and full control over your virtual server.',
      features: ['Dedicated resources', 'Full root access', 'Scalable infrastructure'],
      image: assets.vpsDomainImg,
      imageAlt: 'VPS Hosting',
      reverse: true
    },
    {
      icon: FaDatabase,
      title: 'Dedicated Server',
      description: 'Maximum performance, enhanced security and complete server ownership for enterprise-level projects.',
      features: ['Entire server resources', 'Advanced security', '24/7 monitoring'],
      image: assets.sharedDomainImg,
      imageAlt: 'Dedicated Server',
      reverse: false
    }
  ]

  return (
    <div className='py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden'>
      <div className='container mx-auto px-6'>

        {/* Heading */}
        <div 
          ref={addToRefs}
          className='text-center mb-20 opacity-0 translate-y-10 transition-all duration-1000 ease-out'
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
            Web Hosting Solution
          </h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Find the perfect hosting plan designed for performance, reliability and scalability.
          </p>
        </div>

        {/* Hosting Plans */}
        {hostingPlans.map((plan, index) => (
          <div 
            key={index}
            ref={addToRefs}
            className={`flex flex-col ${plan.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mb-24 last:mb-0 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-${index * 200}`}
          >
            {/* Content */}
            <div className='w-full md:w-1/2 p-6 md:p-10 group/content'>
              <div className='relative'>
                <plan.icon className='text-5xl text-blue-600 mb-6 transform transition-all duration-500 group-hover/content:scale-110 group-hover/content:rotate-3' />
                <div className='absolute -inset-4 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover/content:opacity-30 transition-opacity duration-500' />
              </div>

              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative'>
                {plan.title}
                <span className='absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover/content:w-24' />
              </h2>

              <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                {plan.description}
              </p>

              <ul className='space-y-4 mb-8'>
                {plan.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className='flex items-center gap-3 group/item'
                  >
                    <FaCheckCircle className='text-blue-600 text-lg transform transition-all duration-300 group-hover/item:scale-125 group-hover/item:text-purple-600' />
                    <span className='text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300'>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="group/btn inline-flex items-center gap-3 px-8 py-4 
                bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl 
                shadow-lg shadow-blue-500/30 cursor-pointer relative overflow-hidden
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 hover:scale-105
                active:scale-95"
              >
                <span className='relative z-10'>View Details</span>
                <FaArrowRight className="relative z-10 transition-all duration-500 group-hover/btn:translate-x-2" />
                <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500' />
              </a>
            </div>

            {/* Image */}
            <div className='w-full md:w-1/2 group/image'>
              <div className='relative overflow-hidden rounded-3xl shadow-2xl'>
                <img
                  src={plan.image}
                  alt={plan.imageAlt}
                  className='w-full h-auto transform transition-all duration-700 ease-out group-hover/image:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500' />
                <div className='absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl' />
              </div>
            </div>
          </div>
        ))}

        {/* Footer Credit */}
        <div className='mt-20 pt-10 border-t border-gray-200 text-center'>
          <p className='text-sm text-gray-500 font-medium tracking-wide'>
            Built by Malik Oman
          </p>
        </div>

      </div>
    </div>
  )
}

export default Hosting