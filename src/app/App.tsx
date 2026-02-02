import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { AnimalSlider } from '@/app/components/AnimalSlider';
import { ServicesGrid } from '@/app/components/ServicesGrid';
import { TrustSection } from '@/app/components/TrustSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  // Animal slider data with Big Five
  const animals = [
    {
      id: 1,
      name: 'The Skeleton Coast Lion',
      subtitle: 'Desert-adapted predators in their natural habitat',
      image: 'https://images.unsplash.com/photo-1588442025058-dffe84001858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbGlvbiUyMHBvcnRyYWl0JTIwd2lsZGxpZmV8ZW58MXx8fHwxNzcwMDY0MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$3,500'
    },
    {
      id: 2,
      name: 'The Desert Elephant',
      subtitle: 'Majestic giants of the Namib wilderness',
      image: 'https://images.unsplash.com/photo-1761073832881-bf1203a5bbff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZWxlcGhhbnQlMjBkZXNlcnR8ZW58MXx8fHwxNzcwMDY0MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$4,200'
    },
    {
      id: 3,
      name: 'The African Leopard',
      subtitle: 'Elusive masters of stealth and grace',
      image: 'https://images.unsplash.com/photo-1712182263165-9b02acc1f991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbGVvcGFyZCUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MDA2NDExNnww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$4,800'
    },
    {
      id: 4,
      name: 'The Black Rhinoceros',
      subtitle: 'Rare and endangered African treasure',
      image: 'https://images.unsplash.com/photo-1768737829317-8458524c7053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcmhpbm9jZXJvcyUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MDA2NDExNnww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$5,500'
    },
    {
      id: 5,
      name: 'The Cape Buffalo',
      subtitle: 'Powerful herds roaming the savanna',
      image: 'https://images.unsplash.com/photo-1653293143975-3eb9562b43b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYnVmZmFsbyUyMHdpbGRsaWZlfGVufDF8fHx8MTc3MDA2NDExNnww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '$3,200'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection 
        heroImage="https://images.unsplash.com/photo-1721655800914-868afcfb2ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYW1pYmlhbiUyMGRlc2VydCUyMHN1bnNldCUyMHJvYWR8ZW58MXx8fHwxNzcwMDY0MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />
      <AnimalSlider animals={animals} />
      <ServicesGrid />
      <TrustSection 
        founderImage="https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBBZnJpY2FuJTIwd29tYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDA2NDExN3ww&ixlib=rb-4.1.0&q=80&w=1080"
      />
      <Footer />
    </div>
  );
}
