import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { PortfolioBento } from "@/components/portfolio-bento";
import { ResearchShowcase } from "@/components/research-showcase";
import { SiteNavbar } from "@/components/site-navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="noise-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.035]" />
      <SiteNavbar />
      <HeroSection />
      <ResearchShowcase />
      <PortfolioBento />
      <Footer />
    </main>
  );
}
