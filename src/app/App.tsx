import { Header } from "@/app/components/header";
import { HeroSection } from "@/app/components/hero-section";
import { ProblemSection } from "@/app/components/problem-section";
import { SolutionSection } from "@/app/components/solution-section";
import { FeaturesSection } from "@/app/components/features-section";
import { SocialProofSection } from "@/app/components/social-proof-section";
import { PricingSection } from "@/app/components/pricing-section";
import { CTASection } from "@/app/components/cta-section";
import { Footer } from "@/app/components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
