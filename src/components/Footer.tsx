export const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-10">
      <div className="section-container text-center">
        <p className="text-xs text-muted-foreground/40 tracking-wide">
          © {new Date().getFullYear()} Kaushal
        </p>
      </div>
    </footer>
  );
};
