import { motion } from 'motion/react';
import { Award, Heart, Shield } from 'lucide-react';

interface TrustSectionProps {
  founderImage: string;
}

export function TrustSection({ founderImage }: TrustSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B2B26] to-[#0a1f1c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={founderImage}
                alt="Founder"
                className="w-full h-[600px] object-cover"
              />
              {/* Decorative Border */}
              <div className="absolute inset-0 border-4 border-[#D4AF37]/30 rounded-2xl"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-[#0B2B26] px-8 py-4 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Award size={32} />
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700', fontSize: '1.25rem' }}>
                    Female Owned
                  </div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                    & Operated
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#D4AF37] tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem' }}>
              Meet the Founder
            </span>
            
            <h2 
              className="text-[#FDFBF7] mb-6"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                lineHeight: '1.2'
              }}
            >
              Building Trust Through Authentic Experiences
            </h2>

            <p className="text-[#FDFBF7]/80 mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.125rem' }}>
              As a proud female entrepreneur, I founded Eleva Destinations to share the extraordinary beauty of Namibia with the world. Our mission is to create personalized, sustainable travel experiences that honor both our guests and our land.
            </p>

            <p className="text-[#FDFBF7]/80 mb-8 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.125rem' }}>
              Every journey we craft is infused with local knowledge, cultural respect, and a commitment to excellence that has earned us the trust of travelers from across the globe.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D4AF37]/20 rounded-lg">
                  <Heart className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <h4 className="text-[#FDFBF7] mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
                    Personalized Care
                  </h4>
                  <p className="text-[#FDFBF7]/70 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Every detail tailored to your dreams
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E67E22]/20 rounded-lg">
                  <Shield className="text-[#E67E22]" size={24} />
                </div>
                <div>
                  <h4 className="text-[#FDFBF7] mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
                    Licensed & Insured
                  </h4>
                  <p className="text-[#FDFBF7]/70 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Your safety is our priority
                  </p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="border-t border-[#D4AF37]/30 pt-6"
            >
              <div className="text-[#D4AF37] text-3xl mb-2" style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
                Signature
              </div>
              <div className="text-[#FDFBF7]/70" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
                Founder & CEO, Eleva Destinations
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#1a4a40] rounded-2xl p-8"
        >
          <div className="text-center">
            <div className="text-[#D4AF37] text-4xl mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
              10+
            </div>
            <div className="text-[#FDFBF7]/70" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#D4AF37] text-4xl mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
              98%
            </div>
            <div className="text-[#FDFBF7]/70" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
              Satisfaction Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#D4AF37] text-4xl mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
              500+
            </div>
            <div className="text-[#FDFBF7]/70" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
              Happy Travelers
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#D4AF37] text-4xl mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
              24/7
            </div>
            <div className="text-[#FDFBF7]/70" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
              Support Available
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}