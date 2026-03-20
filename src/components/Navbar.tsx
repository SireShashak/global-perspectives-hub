import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const topicItems = [
  { label: "Macroeconomics", href: "#topics" },
  { label: "Government Policy", href: "#topics" },
  { label: "Governance", href: "#topics" },
  { label: "Sustainability", href: "#topics" },
  { label: "Global Affairs", href: "#topics" },
  { label: "Others", href: "#topics" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 section-padding">
        <a href="#" className="font-display text-xl font-semibold tracking-tight text-foreground">
          Biduronomics
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {/* Topics dropdown */}
          <div className="relative group">
            <a
              href="#topics"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
            >
              Topics
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                {topicItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#discussion" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
            Discussion
          </a>
          <a href="#schedule" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
            Schedule
          </a>
          <Button size="sm" className="ml-2">Sign In</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-border bg-background section-padding pb-4 space-y-3">
          <button
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground w-full"
            onClick={() => setMobileTopicsOpen(!mobileTopicsOpen)}
          >
            Topics
            <ChevronDown size={14} className={`transition-transform duration-200 ${mobileTopicsOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileTopicsOpen && (
            <div className="pl-4 space-y-2">
              {topicItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
          <a href="#discussion" className="block text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
            Discussion
          </a>
          <a href="#schedule" className="block text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
            Schedule
          </a>
          <Button size="sm" className="w-full">Sign In</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
