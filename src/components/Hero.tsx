import Image from "next/image";
import { ArrowRight, Github, Linkedin, Share2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-7xl mx-auto"
      id="home"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] gap-8 md:gap-12 items-center text-center lg:text-left">
        {/* Profile Image - Top on Mobile, Right on Desktop */}
        <div className="order-first lg:order-last relative group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full lg:rounded-lg blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-full lg:h-[500px] lg:aspect-[4/5] overflow-hidden rounded-full lg:rounded-lg border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <Image
              src="/bikram_pp.png"
              alt="Bikram Sutar - Founding Engineer & AI Startup Enthusiast"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-last lg:order-first space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
              Available for collaboration
            </span>
          </div>
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-headline font-bold tracking-tighter text-foreground leading-none">
              Hey! I&apos;m <span className="text-primary italic">Bikram.</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-headline font-medium text-foreground/90 max-w-3xl leading-snug">
              I build things, run long distances, and believe the next big thing is <span className="opacity-70">always one experiment away.</span>
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto lg:mx-0 py-6 md:py-8 border-l border-primary/20 pl-6 md:pl-8 mt-4">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              From being the first hire at Houseware to engineering at LaunchDarkly and OrangeHealth, I’ve been building from 0 to 1 since 2018. I’m a startup enthusiast, a runner, and a chronic optimist currently working on something new in stealth. I’m also deeply passionate about community - whether it’s mentoring the next generation of builders or founding local clubs, I believe the ultimate value of life lies in our capacity to give back.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
            <a
              href="mailto:6bikramsutar@gmail.com"
              className="group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-full font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(192,193,255,0.3)] shadow-lg text-sm md:text-base"
            >
              <span>Get in touch</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-3 md:gap-4">
              <SocialIcon icon={<Github size={18} />} href="https://github.com/thebstar" />
              <SocialIcon icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/thebstar/" />
              <SocialIcon icon={<Share2 size={18} />} href="https://x.com/thebstar13" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:bg-white/10 hover:text-primary transition-all duration-300"
    >
      {icon}
    </a>
  );
}
