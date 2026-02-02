import { motion } from 'motion/react';
import { Compass, Users, Briefcase, Plane, FileText, Car } from 'lucide-react';

interface Service {
  id: number;
  category: string;
  icon: React.ReactNode;
  services: string[];
  color: string;
}

export function ServicesGrid() {
  const services: Service[] = [
    {
      id: 1,
      category: 'Bespoke Adventures',
      icon: <Compass size={40} />,
      services: ['Safari Expeditions', 'Traditional Experiences', 'Solo Holidays', 'Custom Itineraries'],
      color: '#D4AF37'
    },
    {
      id: 2,
      category: 'Corporate & Events',
      icon: <Briefcase size={40} />,
      services: ['Conference Planning', 'Corporate Bookings', 'Team Building', 'Executive Retreats'],
      color: '#E67E22'
    },
    {
      id: 3,
      category: 'Travel Concierge',
      icon: <Plane size={40} />,
      services: ['Flight Bookings', 'Visa Assistance', 'Car Rentals', 'Accommodation'],
      color: '#D4AF37'
    }
  ];

  return (
    <section id="packages" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0B2B26] tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem' }}>
            Services We Provide
          </span>
          <h2 
            className="text-[#0B2B26] mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '700'
            }}
          >
            Crafted for Every Journey
          </h2>
          <p className="text-[#0B2B26]/70 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.125rem' }}>
            From intimate safaris to corporate retreats, we handle every detail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#0B2B26] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
                style={{ color: service.color }}
              >
                {service.icon}
              </motion.div>

              {/* Category */}
              <h3 
                className="text-[#FDFBF7] mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
                  fontWeight: '700'
                }}
              >
                {service.category}
              </h3>

              {/* Services List */}
              <ul className="space-y-3">
                {service.services.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + idx * 0.1 }}
                    className="flex items-center gap-3 text-[#FDFBF7]/80"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }}></div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Learn More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-full py-3 border-2 rounded-full transition-all"
                style={{ 
                  borderColor: service.color,
                  color: service.color,
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600'
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-[#0B2B26]/10"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                <Users className="text-[#D4AF37]" size={24} />
              </div>
              <h4 className="text-[#0B2B26]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
                Group Tours
              </h4>
            </div>
            <p className="text-[#0B2B26]/70" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
              Join fellow adventurers on curated group experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-[#0B2B26]/10"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-[#E67E22]/10 rounded-lg">
                <FileText className="text-[#E67E22]" size={24} />
              </div>
              <h4 className="text-[#0B2B26]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
                Documentation
              </h4>
            </div>
            <p className="text-[#0B2B26]/70" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
              Complete visa and travel document assistance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-[#0B2B26]/10"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                <Car className="text-[#D4AF37]" size={24} />
              </div>
              <h4 className="text-[#0B2B26]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
                Transport
              </h4>
            </div>
            <p className="text-[#0B2B26]/70" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem' }}>
              Luxury vehicle rentals and airport transfers
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
