const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto section-padding flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-semibold tracking-tight">The Discourse</p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} All rights reserved. Independent analysis, personal views.
      </p>
    </div>
  </footer>
);

export default Footer;
