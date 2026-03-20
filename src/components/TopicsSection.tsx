import { TrendingUp, Landmark, Shield, Leaf, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const topics = [
  {
    icon: TrendingUp,
    title: "Macroeconomics",
    description: "Interest rates, inflation, monetary policy, and the economic cycles that shape prosperity and risk.",
  },
  {
    icon: Landmark,
    title: "Government Policy",
    description: "Fiscal decisions, regulatory frameworks, and the trade-offs embedded in public governance.",
  },
  {
    icon: Shield,
    title: "Governance",
    description: "Institutional integrity, corporate accountability, and the structures that hold power in check.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Climate action, ESG realities, resource stewardship, and the economics of a liveable future.",
  },
  {
    icon: Globe,
    title: "Global Affairs",
    description: "Geopolitics, trade relations, multilateral cooperation, and the tensions of an interconnected world.",
  },
];

const TopicsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="topics" className="py-24 lg:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto section-padding">
        {isVisible && (
          <>
            <div className="max-w-xl mb-16 animate-reveal">
              <p className="text-xs font-semibold tracking-widest uppercase text-highlight mb-3">Areas of Focus</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance leading-tight">
                What I Write About
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic, i) => (
                <article
                  key={topic.title}
                  className={`group bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer animate-reveal`}
                  style={{ animationDelay: `${(i + 1) * 80}ms` }}
                >
                  <topic.icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-semibold mb-2">{topic.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TopicsSection;
