import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero text-hero-foreground overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto section-padding relative z-10 py-32">
        <div className="max-w-2xl space-y-8">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-hero-foreground/60 animate-reveal">
            Commentary & Analysis
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-balance animate-reveal animate-reveal-delay-1">
            Perspectives on Policy, Markets & the World We Share
          </h1>
          <p className="font-body text-lg text-hero-foreground/75 prose-editorial animate-reveal animate-reveal-delay-2">
            Independent analysis on macroeconomics, governance, sustainability, and the forces shaping our collective future. Join the conversation.
          </p>
          <div className="flex flex-wrap gap-4 animate-reveal animate-reveal-delay-3">
            <Button variant="hero" size="lg">
              Explore Topics
            </Button>
            <Button variant="hero-outline" size="lg">
              Join the Discussion
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#topics"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-hero-foreground/40 hover:text-hero-foreground/70 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
