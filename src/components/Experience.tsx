type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
  isCurrent?: boolean;
};

const experiences: Experience[] = [
  {
    year: "2026 - Present",
    role: "Founder",
    company: "Stealth",
    description: "Building the future of human productivity and AI interaction from the ground up.",
    isCurrent: true,
  },
  {
    year: "2025 - 2026",
    role: "Senior Software Engineer",
    company: "LaunchDarkly",
    description: "Joined through acquisition. Scaling enterprise feature management for millions of monthly active users.",
  },
  {
    year: "2022 - 2025",
    role: "Founding Engineer (#1)",
    company: "Houseware",
    description: "Architected core data systems and built the engineering team. Orchestrated product evolution from inception to acquisition.",
  },
  {
    year: "2020 - 2022",
    role: "Full Stack Engineer (#3)",
    company: "OrangeHealth (YC S20)",
    description: "Led development of COVID-19 diagnostic software. Built foundation for customer-facing React Native and Web apps.",
  },
  {
    year: "2019 - 2020",
    role: "Software Engineer",
    company: "RADICALi",
    description: "Second engineering hire. Led frontend development and mentored engineers in high-performance Web apps.",
  },
];

export default function Experience() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto" id="experience">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-headline font-bold text-foreground mb-4">
          The Journey
        </h2>
        <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
      </div>

      <div className="relative border-l border-white/10 ml-0 md:ml-4 space-y-16 md:space-y-24">
        {experiences.map((exp) => (
          <div key={exp.year} className="relative pl-8 md:pl-12 group transition-all duration-500">
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-background transition-all duration-500 group-hover:scale-125 ${
              exp.isCurrent 
                ? "bg-secondary outline outline-4 outline-secondary/20 scale-125" 
                : "bg-primary border-background outline outline-4 outline-primary/10"
            }`}></div>
            <div className="space-y-2">
              <span className={`text-[9px] md:text-[10px] font-headline uppercase tracking-widest block font-bold transition-colors ${
                exp.isCurrent ? "text-secondary" : "text-muted-foreground"
              }`}>
                {exp.year}
              </span>
              <h4 className="text-xl md:text-2xl font-headline font-bold text-foreground">
                {exp.company}
              </h4>
              <p className="text-primary font-medium text-base md:text-lg leading-relaxed">
                {exp.role}
              </p>
              <p className="text-muted-foreground max-w-xl text-sm md:text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
