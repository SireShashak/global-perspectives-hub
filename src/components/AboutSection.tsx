import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto section-padding">
        {isVisible && (
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center max-w-4xl">
            {/* Avatar / visual */}
            <div className="animate-reveal">
              <div className="aspect-square rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="font-display text-6xl font-bold text-primary/40">B</span>
              </div>
            </div>

            {/* Bio */}
            <div className="animate-reveal animate-reveal-delay-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-highlight mb-3">About Me</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance leading-tight mb-4">
                The Mind Behind Biduronomics
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed text-pretty">
                <p>
                  I'm an independent thinker with a deep interest in how macroeconomic forces, public policy, and governance structures shape the world around us. This platform is where I share my unfiltered perspectives on the issues that matter most.
                </p>
                <p>
                  From central bank decisions to climate policy, from institutional accountability to geopolitical shifts — I believe informed discourse is the foundation of better outcomes. My goal is to spark thoughtful conversation, not echo chambers.
                </p>
                <p>
                  Whether you agree or challenge my views, you're welcome here. The best ideas are stress-tested, not sheltered.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
