import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background w-full py-20 px-8 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-xl font-bold font-headline text-primary">
            Bikram Sutar
          </div>
          <div className="text-muted-foreground font-medium text-xs tracking-widest uppercase Inter opacity-60">
            © {currentYear} Bikram Sutar. Built for the void.
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
           <FooterLink href="https://github.com/thebstar" label="GitHub" icon={<Github size={16} />} />
           <FooterLink href="https://www.linkedin.com/in/thebstar/" label="LinkedIn" icon={<Linkedin size={16} />} />
           <FooterLink href="https://x.com/thebstar13" label="Twitter" icon={<Twitter size={16} />} />
           <FooterLink href="mailto:6bikramsutar@gmail.com" label="Say Hello" icon={<Mail size={16} />} />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-xs tracking-widest uppercase flex items-center gap-2 group opacity-80 hover:opacity-100"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
