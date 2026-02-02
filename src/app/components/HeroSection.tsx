import { motion } from 'motion/react';
import { Search, MapPin, Calendar } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Split Screen Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[50vh] lg:h-screen overflow-hidden"
        >
          <img
            src={heroImage}
            alt="Namibian Sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f1c]/60 to-transparent"></div>
          
          {/* Floating Glassmorphic Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-11/12 max-w-2xl"
          >
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 border border-white/20">
                  <MapPin className="text-[#D4AF37]" size={20} />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="bg-transparent text-white placeholder:text-white/70 outline-none w-full"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  />
                </div>
                <div className="flex-1 flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 border border-white/20">
                  <Calendar className="text-[#D4AF37]" size={20} />
                  <input
                    type="text"
                    placeholder="Dates"
                    className="bg-transparent text-white placeholder:text-white/70 outline-none w-full"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  />
                </div>
                <button className="bg-[#E67E22] hover:bg-[#d16d1a] text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                  <Search size={20} />
                  <span style={{ fontFamily: 'Montserrat, sans-serif' }}>Search</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#0B2B26] flex items-center justify-center p-8 lg:p-16"
        >
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-[#D4AF37] tracking-[0.3em] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem' }}>
                Elevated Travel Experiences
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-6 text-[#FDFBF7]"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '1.1',
                fontWeight: '700'
              }}
            >
              Redefining Personalized Travel
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-[#FDFBF7]/80 mb-8 leading-relaxed"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1.125rem',
                letterSpacing: '0.01em'
              }}
            >
              Experience the untamed beauty of Namibia through bespoke safari adventures. 
              From the Skeleton Coast to the dunes of Sossusvlei, we craft journeys that 
              transcend the ordinary.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-[#E67E22] text-white rounded-full hover:bg-[#d16d1a] transition-all shadow-lg hover:shadow-xl">
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
                  Explore Safaris
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#0B2B26] transition-all">
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
                  View Schedule
                </span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div>
                <div className="text-[#D4AF37] text-3xl mb-1" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
                  500+
                </div>
                <div className="text-[#FDFBF7]/70 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Travelers
                </div>
              </div>
              <div>
                <div className="text-[#D4AF37] text-3xl mb-1" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
                  50+
                </div>
                <div className="text-[#FDFBF7]/70 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Destinations
                </div>
              </div>
              <div>
                <div className="text-[#D4AF37] text-3xl mb-1" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
                  5★
                </div>
                <div className="text-[#FDFBF7]/70 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Rated
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
