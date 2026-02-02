import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Animal {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  price: string;
}

interface AnimalSliderProps {
  animals: Animal[];
}

export function AnimalSlider({ animals }: AnimalSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % animals.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + animals.length) % animals.length);
  };

  return (
    <section id="safari" className="py-24 bg-gradient-to-b from-[#0a1f1c] to-[#0B2B26]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem' }}>
            Wildlife Encounters
          </span>
          <h2 
            className="text-[#FDFBF7] mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '700'
            }}
          >
            The Big Five Experience
          </h2>
          <p className="text-[#FDFBF7]/70 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.125rem' }}>
            Witness Africa's most iconic wildlife in their natural habitat
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#D4AF37] text-[#0B2B26] p-3 rounded-full hover:bg-[#c49f2f] transition-all shadow-lg -ml-4 hidden lg:block"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#D4AF37] text-[#0B2B26] p-3 rounded-full hover:bg-[#c49f2f] transition-all shadow-lg -mr-4 hidden lg:block"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / 3)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {animals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-[#D4AF37] text-[#0B2B26] p-3 rounded-full hover:bg-[#c49f2f] transition-all shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#D4AF37] text-[#0B2B26] p-3 rounded-full hover:bg-[#c49f2f] transition-all shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {animals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-[#D4AF37]' 
                    : 'w-2 bg-[#D4AF37]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimalCard({ animal }: { animal: Animal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-[calc(33.333%-1rem)] relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        {/* Image */}
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B26] via-[#0B2B26]/50 to-transparent"></div>
        
        {/* Inner Shadow for Text Pop */}
        <div className="absolute inset-0 shadow-[inset_0_-120px_80px_-50px_rgba(11,43,38,0.9)]"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 
              className="text-[#FDFBF7] mb-2"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.875rem',
                fontWeight: '700'
              }}
            >
              {animal.name}
            </h3>
            <p className="text-[#FDFBF7]/80 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {animal.subtitle}
            </p>
          </motion.div>

          {/* Expandable Content */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              height: isHovered ? 'auto' : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#D4AF37]/30 pt-4 mt-2 flex items-center justify-between">
              <div>
                <div className="text-[#D4AF37]/80 text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Starting at
                </div>
                <div className="text-[#D4AF37] text-2xl" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
                  {animal.price}
                </div>
              </div>
              <button className="px-6 py-2.5 bg-[#E67E22] text-white rounded-full hover:bg-[#d16d1a] transition-all shadow-lg">
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
                  View Safari
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
