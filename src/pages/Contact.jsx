import React, { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaMapLocation, FaPhone } from "react-icons/fa6";
import { FaPaperPlane, FaClock, FaHeadset } from "react-icons/fa";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: FaMapLocation,
      title: "Address",
      content: "Multan BCG Chowk",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+92 35580655",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "elitehosting@gmail.com",
      color: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div ref={sectionRef} className="py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div 
          className={`text-center mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Get in{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions? Our team is here to help you with any inquiries.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* CONTACT FORM */}
          <div 
            className={`w-full lg:w-1/2 transform transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-10 border border-gray-200 transition-all duration-500 hover:shadow-2xl relative overflow-hidden group/form">
              {/* Decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-0 group-hover/form:opacity-100 transition-opacity duration-700" />
              
              <form className="relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {['firstName', 'lastName'].map((field, idx) => (
                    <div key={field} className="relative">
                      <input
                        type="text"
                        name={field}
                        placeholder={field === 'firstName' ? 'First Name' : 'Last Name'}
                        value={formData[field]}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-6 py-4 rounded-xl border-2 outline-none transition-all duration-300 bg-gray-50/50 ${
                          focusedField === field 
                            ? 'border-blue-500 bg-white shadow-lg shadow-blue-500/10' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ${focusedField === field ? 'w-full' : 'w-0'}`} />
                    </div>
                  ))}
                </div>

                {['email', 'subject'].map((field, idx) => (
                  <div key={field} className="relative mb-6">
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      placeholder={field === 'email' ? 'Email Address' : 'Subject'}
                      value={formData[field]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 rounded-xl border-2 outline-none transition-all duration-300 bg-gray-50/50 ${
                        focusedField === field 
                          ? 'border-blue-500 bg-white shadow-lg shadow-blue-500/10' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ${focusedField === field ? 'w-full' : 'w-0'}`} />
                  </div>
                ))}

                <div className="relative mb-8">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Enter your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-6 py-4 rounded-xl border-2 outline-none transition-all duration-300 bg-gray-50/50 resize-none ${
                      focusedField === 'message' 
                        ? 'border-blue-500 bg-white shadow-lg shadow-blue-500/10' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ${focusedField === 'message' ? 'w-full' : 'w-0'}`} />
                </div>

                {/* BUTTON */}
                <button className="relative w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30 group/btn active:scale-95">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Message
                    <FaPaperPlane className="transform transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-500" />
                </button>
              </form>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div 
            className={`w-full lg:w-1/2 space-y-8 transform transition-all duration-1000 delay-400 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* INFO CARD */}
            <div className="bg-white shadow-xl rounded-3xl p-10 border border-gray-200 transition-all duration-500 hover:shadow-2xl relative overflow-hidden group/info">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-50 rounded-bl-full opacity-50" />
              
              <h3 className="text-3xl font-bold text-gray-800 mb-8 relative">
                Contact Information
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-6 group/item cursor-pointer"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg transform transition-all duration-500 group-hover/item:scale-110 group-hover/item:rotate-3 group-hover/item:shadow-xl`}>
                      <item.icon />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-gray-800 mb-1 group-hover/item:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">
                        {item.content}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transform translate-x-4 group-hover/item:translate-x-0 transition-all duration-300">
                      <FaPaperPlane className="text-gray-400 text-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SUPPORT HOURS */}
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-3xl p-10 shadow-xl overflow-hidden group/hours transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover/hours:opacity-100 transition-opacity duration-700" />
              
              {/* Floating shapes */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                    <FaHeadset className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    Support Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', hours: '24/7', icon: FaClock },
                    { day: 'Saturday', hours: '24/7', icon: FaClock },
                    { day: 'Sunday', hours: '24/7', icon: FaClock }
                  ].map((schedule, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 group/schedule"
                    >
                      <div className="flex items-center gap-3">
                        <schedule.icon className="text-white/70 group-hover/schedule:text-white transition-colors duration-300" />
                        <span>{schedule.day}</span>
                      </div>
                      <span className="font-bold text-lg bg-white/20 px-4 py-1 rounded-full group-hover/schedule:bg-white/30 transition-colors duration-300">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20 flex items-center gap-3 text-sm text-white/80">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Currently online and ready to help</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Credit */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-400 font-medium tracking-wider uppercase">
            Built by Malik Oman
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;