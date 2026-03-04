import React, { useEffect, useRef, useState } from 'react'
import { domainData } from '../assets/assets'
import { FaArrowRight, FaSearch, FaCheckCircle } from 'react-icons/fa'

const Domain = () => {
  const [searchFocus, setSearchFocus] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className='py-40 bg-gradient-to-b from-white to-gray-50 overflow-hidden'>
      <div className='container mx-auto px-6'>

        {/* Heading Section */}
        <div 
          className={`text-center mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className='text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight'>
            Find Your Perfect{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
              Domain Name
            </span>
          </h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Fast, secure and reliable domain & hosting solutions for your business.
          </p>
        </div>

        {/* Search Box */}
        <div 
          className={`max-w-4xl mx-auto mb-24 transform transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div 
            className={`flex flex-col md:flex-row items-center bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
              searchFocus ? 'border-blue-500 shadow-blue-500/30 scale-[1.02]' : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className='flex-grow flex items-center w-full md:w-auto px-6 py-4'>
              <FaSearch className={`text-xl mr-4 transition-colors duration-300 ${searchFocus ? 'text-blue-600' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder='Search for your domain'
                className='w-full text-lg outline-none bg-transparent placeholder-gray-400'
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              />
            </div>

            <div className='w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-200'>
              <select className='w-full md:w-auto px-6 py-4 text-lg outline-none bg-transparent cursor-pointer hover:bg-gray-50 transition-colors duration-300'>
                <option>.com</option>
                <option>.in</option>
                <option>.net</option>
                <option>.org</option>
                <option>.co</option>
                <option>.io</option>
              </select>
            </div>

            <button className='w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg relative overflow-hidden group transition-all duration-500 ease-out hover:shadow-xl hover:shadow-blue-500/30 active:scale-95'>
              <span className='relative z-10 flex items-center justify-center gap-2'>
                Search
                <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out' />
            </button>
          </div>
          
          {/* Quick Tags */}
          <div className='flex flex-wrap justify-center gap-3 mt-6'>
            {['.com', '.net', '.org', '.io'].map((tag, idx) => (
              <span 
                key={idx}
                className='px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm text-gray-600 border border-gray-200 cursor-pointer hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 hover:scale-105'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing Heading */}
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className='text-4xl md:text-5xl font-extrabold text-gray-800'>
            Straightforward{' '}
            <span className='relative'>
              Domain Pricing
              <svg className='absolute w-full h-3 -bottom-1 left-0 text-blue-200' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <path d='M0 5 Q 50 10 100 5' stroke='currentColor' strokeWidth='8' fill='none' />
              </svg>
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {domainData.map((domain, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-3 overflow-hidden transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Hover Gradient Background */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              
              {/* Content */}
              <div className='relative z-10'>
                <div className='mb-6 relative'>
                  <img
                    className='w-16 h-16 object-contain transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3'
                    src={domain.image}
                    alt={domain.extension || 'Domain'}
                  />
                  <div className='absolute -inset-4 bg-blue-200 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500' />
                </div>

                <p className='text-gray-600 mb-6 leading-relaxed text-sm'>
                  {domain.content}
                </p>

                <div className='flex items-baseline gap-1 mb-6'>
                  <span className='text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300'>
                    {domain.price}
                  </span>
                  <span className='text-gray-400 text-sm'>/year</span>
                </div>

                <a
                  href="#"
                  className='inline-flex items-center gap-2 text-blue-600 font-semibold transition-all duration-300 group-hover:gap-4 relative'
                >
                  <span className='relative'>
                    Get Offer
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300' />
                  </span>
                  <FaArrowRight className='transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110' />
                </a>
              </div>

              {/* Corner Decoration */}
              <div className='absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700' />
            </div>
          ))}
        </div>

        {/* Footer Credit */}
        <div className='mt-24 text-center'>
          <p className='text-sm text-gray-400 font-medium tracking-wider uppercase'>
            Built by Malik Oman
          </p>
        </div>

      </div>
    </div>
  )
}

export default Domain