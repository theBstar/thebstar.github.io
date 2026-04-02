import { Footprints, Trophy, Users, Star, ArrowUpRight } from "lucide-react";

export default function Interests() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="interests">
      <div className="mb-16 space-y-4">
        <h2 className="text-4xl font-headline font-bold text-foreground">
          Beyond the Terminal
        </h2>
        <p className="text-muted-foreground text-lg italic">
          The fuels that keep the experimenter running.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Running */}
        <div className="md:col-span-8 glass-card rounded-lg p-6 md:p-10 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="space-y-6">
              <Footprints className="w-10 h-10 md:w-12 md:h-12 text-secondary" strokeWidth={1.5} />
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
                  Running
                </h3>
                <p className="text-muted-foreground max-w-md text-base md:text-lg leading-relaxed">
                  Lacing up for mental clarity and a 1:52min Half-marathon PB (April 2023). Every mile is a meditation.
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-12 flex flex-wrap gap-4">
              <div className="px-4 py-2 md:px-6 md:py-3 bg-background/50 rounded-full border border-white/10 flex items-center gap-3">
                <span className="text-xl md:text-2xl font-bold text-secondary">1:52min</span>
                <span className="text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                  21.1K PB
                </span>
              </div>
              <div className="px-4 py-2 md:px-6 md:py-3 bg-background/50 rounded-full border border-white/10 flex items-center gap-3">
                <span className="text-xl md:text-2xl font-bold text-primary">22:36</span>
                <span className="text-[8px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                  5K PB
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 grayscale group-hover:opacity-20 group-hover:scale-105 transition-all duration-700 pointer-events-none">
            {/* Ambient decoration */}
            <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent"></div>
          </div>
        </div>

        {/* Cricket */}
        <div className="md:col-span-4 glass-card rounded-lg p-6 md:p-10 flex flex-col justify-between group">
          <div className="space-y-6">
            <Trophy className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-headline font-bold text-foreground">
                Cricket
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Founder of Khavya Cricket Club, now 50+ members strong. Strategist on and off the field.
              </p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <a
              href="https://www.facebook.com/khavyaclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 md:px-4 md:py-1.5 bg-primary/10 text-primary text-[9px] md:text-[10px] font-bold tracking-widest uppercase rounded hover:bg-primary/20 transition-colors"
            >
              Visit Club
            </a>
            <Users className="text-primary/40 group-hover:text-primary transition-colors" />
          </div>
        </div>

        {/* Kids Community Events */}
        <div className="md:col-span-12 glass-card rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 group overflow-hidden">
          <div className="max-w-2xl space-y-6">
            <Star className="w-10 h-10 md:w-12 md:h-12 text-secondary animate-pulse" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
                Kids Community Events
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Creating spaces for the next generation of builders and dreamers. Since July 2024, running workshops for 100+ local kids.
              </p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/posts/thebstar_i-have-been-organising-community-events-for-activity-7242037721219653632-jY5c"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all group"
          >
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">View Journey</span>
            <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
