import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ThumbsUp, Reply } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Comment {
  id: number;
  author: string;
  initials: string;
  time: string;
  text: string;
  likes: number;
}

const sampleComments: Comment[] = [
  {
    id: 1,
    author: "Priya Nair",
    initials: "PN",
    time: "2 hours ago",
    text: "The analysis on central bank independence is spot on. We're seeing similar dynamics play out in emerging markets where fiscal dominance is eroding monetary credibility.",
    likes: 14,
  },
  {
    id: 2,
    author: "Marcus Engström",
    initials: "ME",
    time: "5 hours ago",
    text: "I'd push back on the sustainability framing — the real constraint isn't political will, it's the cost of capital for green infrastructure in developing economies. Until that's addressed, ESG remains a rich-world luxury.",
    likes: 23,
  },
  {
    id: 3,
    author: "Amara Osei",
    initials: "AO",
    time: "1 day ago",
    text: "Governance failures rarely happen in isolation. The connection you drew between institutional erosion and macroeconomic instability deserves a deeper series.",
    likes: 9,
  },
];

const DiscussionSection = () => {
  const [newComment, setNewComment] = useState("");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="discussion" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto section-padding">
        {isVisible && (
          <>
            <div className="max-w-xl mb-12 animate-reveal">
              <p className="text-xs font-semibold tracking-widest uppercase text-highlight mb-3">Open Forum</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance leading-tight">
                Join the Conversation
              </h2>
              <p className="mt-3 text-muted-foreground text-pretty">
                Share your perspective. Thoughtful disagreement is welcome — this is a space for substantive exchange.
              </p>
            </div>

            {/* Comment input */}
            <div className="max-w-2xl mb-10 animate-reveal animate-reveal-delay-1">
              <textarea
                className="w-full rounded-lg border border-border bg-background p-4 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                rows={3}
                placeholder="What's on your mind? Sign in to contribute..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <div className="flex justify-end mt-3">
                <Button size="sm" disabled={!newComment.trim()}>
                  <MessageCircle size={14} />
                  Post Comment
                </Button>
              </div>
            </div>

            {/* Comments */}
            <div className="max-w-2xl space-y-6">
              {sampleComments.map((c, i) => (
                <article
                  key={c.id}
                  className="flex gap-4 animate-reveal"
                  style={{ animationDelay: `${(i + 2) * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                    {c.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-sm font-semibold">{c.author}</span>
                      <span className="text-xs text-muted-foreground">{c.time}</span>
                    </div>
                    <p className="text-sm text-foreground/85 leading-relaxed text-pretty">{c.text}</p>
                    <div className="flex gap-4 mt-2">
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                        <ThumbsUp size={13} /> {c.likes}
                      </button>
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                        <Reply size={13} /> Reply
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DiscussionSection;
