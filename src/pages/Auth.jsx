import React, { useState, useEffect } from 'react'
import { FaServer, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleAuth = async (e) => {
    e.preventDefault()
    if (email && password) {
      setIsLoading(true)
      // Simulate loading for smooth transition
      await new Promise(resolve => setTimeout(resolve, 800))
      setIsLoading(false)
      navigate("/")
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 flex items-center justify-center p-4 relative overflow-hidden'>
      {/* Animated background shapes */}
      <div className='absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl' />

      <div 
        className={`w-full max-w-md relative z-10 transform transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className='bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden group'>
          {/* Decorative gradient blob */}
          <div className='absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

          {/* Logo */}
          <div
            onClick={() => navigate('/')}
            className='flex items-center justify-center gap-3 mb-10 cursor-pointer group/logo'
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-blue-500 rounded-lg blur-lg opacity-0 group-hover/logo:opacity-50 transition-opacity duration-500' />
              <FaServer className='relative text-3xl text-blue-600 transform transition-all duration-500 group-hover/logo:scale-110 group-hover/logo:rotate-12' />
            </div>
            <span className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 group-hover/logo:to-gray-800 transition-all duration-300'>
              Elitehosting
            </span>
          </div>

          {/* Heading */}
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-800 mb-2 relative inline-block'>
              Welcome Back
              <span className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500' />
            </h1>
            <p className='text-gray-500 text-sm'>Login to access your dashboard</p>
          </div>

          {/* Form */}
          <form onSubmit={handleAuth} className='space-y-6 relative z-10'>

            {/* Email */}
            <div className='relative group/input'>
              <label className='block text-sm font-medium text-gray-700 mb-2 ml-1'>
                Email Address
              </label>
              <div className='relative'>
                <FaEnvelope className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'}`} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="name@example.com"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-gray-50/50 outline-none transition-all duration-300 ${
                    focusedField === 'email'
                      ? 'border-blue-500 bg-white shadow-lg shadow-blue-500/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ${focusedField === 'email' ? 'w-full' : 'w-0'}`} />
              </div>
            </div>

            {/* Password */}
            <div className='relative group/input'>
              <label className='block text-sm font-medium text-gray-700 mb-2 ml-1'>
                Password
              </label>
              <div className='relative'>
                <FaLock className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'password' ? 'text-blue-600' : 'text-gray-400'}`} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your password"
                  className={`w-full pl-12 pr-12 py-4 rounded-xl border-2 bg-gray-50/50 outline-none transition-all duration-300 ${
                    focusedField === 'password'
                      ? 'border-blue-500 bg-white shadow-lg shadow-blue-500/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 focus:outline-none'
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ${focusedField === 'password' ? 'w-full' : 'w-0'}`} />
              </div>
            </div>

            {/* Forgot Password */}
            <div className='flex justify-end'>
              <button 
                type="button"
                className='text-sm text-blue-600 hover:text-purple-600 font-medium transition-colors duration-300 hover:underline'
              >
                Forgot password?
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className='relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group/btn'
            >
              <span className={`relative z-10 flex items-center justify-center gap-2 transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                Login
                <FaArrowRight className='transform transition-all duration-300 group-hover/btn:translate-x-1' />
              </span>
              
              {isLoading && (
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                </div>
              )}
              
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out' />
            </button>

          </form>

          {/* Divider */}
          <div className='relative my-8'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-200' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-4 bg-white text-gray-500'>or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className='grid grid-cols-2 gap-4'>
            {['Google', 'GitHub'].map((provider, idx) => (
              <button
                key={provider}
                type="button"
                className='flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300 group/social'
              >
                <div className='w-5 h-5 bg-gray-200 rounded-full group-hover/social:bg-blue-500 transition-colors duration-300' />
                <span className='text-sm font-medium text-gray-700 group-hover/social:text-blue-600 transition-colors duration-300'>
                  {provider}
                </span>
              </button>
            ))}
          </div>

          {/* Sign Up Link */}
          <p className='mt-8 text-center text-sm text-gray-600'>
            Don't have an account?{' '}
            <button 
              type="button"
              className='font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-300 hover:underline'
            >
              Sign up
            </button>
          </p>
        </div>

        {/* Footer Credit */}
        <div className='mt-8 text-center'>
          <p className='text-xs text-gray-400 font-medium tracking-wider uppercase'>
            Built by Malik Oman
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth