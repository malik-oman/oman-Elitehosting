import React, { useState } from "react";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaServer, 
  FaTwitter, 
  FaArrowUp, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { name: "Web Hosting", path: "/hosting" },
      { name: "VPS Hosting", path: "/vps" },
      { name: "Dedicated Server", path: "/dedicated" },
      { name: "Domain Name", path: "/domain" },
      { name: "SSL Certificates", path: "/ssl" }
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
      { name: "Press", path: "/press" },
      { name: "Partners", path: "/partners" }
    ],
    support: [
      { name: "Help Center", path: "/help" },
      { name: "Contact", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Status Page", path: "/status" }
    ]
  };

  const socialLinks = [
    { icon: FaTwitter, href: "#", color: "hover:bg-sky-500", label: "Twitter" },
    { icon: FaFacebook, href: "#", color: "hover:bg-blue-600", label: "Facebook" },
    { icon: FaLinkedin, href: "#", color: "hover:bg-blue-700", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", color: "hover:bg-pink-600", label: "Instagram" }
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900/20 pointer-events-none" />
      
      {/* Floating orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Newsletter Section */}
      <div className="relative border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Stay <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Updated</span>
              </h3>
              <p className="text-slate-400 max-w-md">
                Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="w-full max-w-md">
              <div className="relative flex items-center">
                <FaEnvelope className="absolute left-4 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-32 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <FaServer className="text-4xl text-indigo-500 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-indigo-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Elitehosting
              </span>
            </Link>
            
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Premium web hosting solutions with blazing fast speed, reliable performance, and 24/7 expert support.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300">
                <FaMapMarkerAlt className="text-indigo-500" />
                <span>123 Tech Street, Silicon Valley, CA</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300">
                <FaPhone className="text-indigo-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300">
                <FaEnvelope className="text-indigo-500" />
                <span>support@elitehosting.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 ${social.color} hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Elitehosting. All rights reserved.
            </p>
            
            {/* Built by Malik Oman - As requested in memory */}
            <p className="text-slate-500 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Built by <span className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors cursor-pointer">Malik Oman</span>
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 text-sm"
            >
              Back to top
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;