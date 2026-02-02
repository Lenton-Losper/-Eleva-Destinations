import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Instagram, AlertTriangle } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Safari Schedule', href: '#safari' },
    { name: 'Our Services', href: '#packages' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Terms & Conditions', href: '#terms' }
  ];

  return (
    <footer id="contact" className="bg-[#0B2B26] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl text-[#D4AF37] mb-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
              Eleva Destinations
            </h3>
            <p className="text-[#FDFBF7]/70 mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
              Elevating travel experiences across Namibia and beyond. Female-owned and operated with passion, integrity, and expertise.
            </p>
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <div className="px-3 py-1 bg-[#D4AF37]/20 rounded-full border border-[#D4AF37]/30 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Female Owned
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-[#FDFBF7] mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: '700' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#FDFBF7]/70 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
                  >
                    <span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-[#FDFBF7] mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: '700' }}>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/264812345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#FDFBF7]/70 hover:text-[#D4AF37] transition-colors group"
                >
                  <Phone size={20} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                      WhatsApp
                    </div>
                    <div className="text-[#FDFBF7]" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                      +264 81 234 5678
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@safarinoir.com"
                  className="flex items-start gap-3 text-[#FDFBF7]/70 hover:text-[#D4AF37] transition-colors group"
                >
                  <Mail size={20} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                      Email
                    </div>
                    <div className="text-[#FDFBF7]" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                      info@safarinoir.com
                    </div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#FDFBF7]/70">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                    Location
                  </div>
                  <div className="text-[#FDFBF7]" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                    Windhoek, Namibia
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Column 4 - Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-[#FDFBF7] mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: '700' }}>
              Connect With Us
            </h4>
            
            <p className="text-[#FDFBF7]/70 mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
              Follow our adventures and stay updated with exclusive offers
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#D4AF37]/20 hover:bg-[#D4AF37] rounded-full transition-all group"
              >
                <Facebook size={20} className="text-[#D4AF37] group-hover:text-[#0B2B26]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#D4AF37]/20 hover:bg-[#D4AF37] rounded-full transition-all group"
              >
                <Instagram size={20} className="text-[#D4AF37] group-hover:text-[#0B2B26]" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#D4AF37]/20 hover:bg-[#D4AF37] rounded-full transition-all group"
              >
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-[#0B2B26]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-[#1a4a40] border border-[#D4AF37]/30 rounded-lg text-[#FDFBF7] placeholder:text-[#FDFBF7]/50 focus:outline-none focus:border-[#D4AF37] mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}
              />
              <button className="w-full px-4 py-2 bg-[#E67E22] hover:bg-[#d16d1a] text-white rounded-lg transition-all">
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem', fontWeight: '600' }}>
                  Subscribe
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scammer Warning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-8 p-6 bg-[#E67E22]/10 border-l-4 border-[#E67E22] rounded-lg"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-[#E67E22] flex-shrink-0 mt-1" size={24} />
            <div>
              <h5 className="text-[#FDFBF7] mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
                Beware of Scammers
              </h5>
              <p className="text-[#FDFBF7]/80" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                We will never ask for payment via unofficial channels. Always verify our contact details 
                through this website. If you receive suspicious communication claiming to be from Eleva Destinations, 
                please contact us immediately at <a href="mailto:info@safarinoir.com" className="text-[#D4AF37] hover:underline">info@safarinoir.com</a> or <a href="https://wa.me/264812345678" className="text-[#D4AF37] hover:underline">+264 81 234 5678</a>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FDFBF7]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#FDFBF7]/50 text-center md:text-left" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
              © 2026 Eleva Destinations. All rights reserved. Proudly crafted in Namibia.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-[#FDFBF7]/50 hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                Privacy Policy
              </a>
              <a href="#terms" className="text-[#FDFBF7]/50 hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}