import { ExternalLink, Github, LucideIcon, BarChart, Activity, ShoppingBag, Layers, Heart, Wand2 } from "lucide-react";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  github?: string;
  website?: string;
  twitter?: string;
  color: string;
  isNew?: boolean;
};

const projects: Project[] = [
  {
    id: "numen",
    title: "Numen",
    description: "Design-engineering collective building interfaces of tomorrow. Specialist focus on interaction design and performance.",
    icon: Layers,
    tags: ["Design", "Engineering", "Interface"],
    website: "https://numen.team",
    color: "text-primary",
    isNew: true,
  },
  {
    id: "hoply",
    title: "Hoply",
    description: "Simplified e-commerce stack for growing brands. Architecting tools for the next generation of online retail.",
    icon: ShoppingBag,
    tags: ["E-commerce", "SaaS", "Stack"],
    website: "https://gethoply.com",
    color: "text-secondary",
  },
  {
    id: "houseware",
    title: "Houseware Analytics",
    description: "Founding Engineer (#1). Building from 0 to 1. Architecting data systems that scale with enterprise needs.",
    icon: BarChart,
    tags: ["Data", "Infrastructure", "Founding"],
    website: "https://houseware.io",
    color: "text-secondary",
  },
  {
    id: "orangehealth",
    title: "OrangeHealth",
    description: "Engineering Lead (#3) (YC S20). Led the development of mission-critical diagnostic software across India.",
    icon: Activity,
    tags: ["Health", "YC", "Leadership"],
    website: "https://orangehealth.in",
    color: "text-primary",
  },
  {
    id: "ai-experiments",
    title: "AI Experiments",
    description: "Agentic browser experiments and local LLM orchestration. Pushing the boundaries of human-AI collaboration.",
    icon: Wand2,
    tags: ["GenAI", "Agents", "Research"],
    website: "https://x.com/thebstar13/status/1844012117591695640",
    color: "text-secondary",
  },
  {
    id: "hamigorkhali",
    title: "Hami Gorkhali",
    description: "Community platform for the Indian Gorkha Diaspora. Bridging cultural heritage with modern digital connectivity.",
    icon: Heart,
    tags: ["Community", "Heritage", "Scale"],
    website: "https://hamigorkhali.com",
    color: "text-primary",
  },
];

export default function Projects() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
        <div className="space-y-4">
          <span className="text-secondary font-headline tracking-widest uppercase text-[10px] font-bold block">
            Selected Works
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground">
            Digital Creations
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md text-base md:text-lg">
          A collection of experiments, tools, and systems built to bridge the gap between human intent and machine execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`glass-card p-6 md:p-10 rounded-lg group cursor-pointer hover:bg-white/[0.03] transition-all duration-500 flex flex-col justify-between min-h-[380px] md:min-h-[420px] ${
              index % 3 === 0 ? "md:col-span-1" : ""
            }`}
          >
            <Link href={`/projects/${project.id}`}>
              <div>
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <project.icon className={`w-8 h-8 md:w-10 md:h-10 ${project.color}`} strokeWidth={1.5} />
                  {project.isNew && (
                    <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/20 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5">
                      Latest
                    </span>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            <div className="flex items-center gap-6">
              {project.github && (
                <a href={project.github} className="text-muted-foreground hover:text-primary transition-all flex items-center gap-2 group/link">
                  <Github size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Source</span>
                </a>
              )}
              {(project.website || project.github) && (
                <a href={project.website || project.github} target="_blank" className="text-muted-foreground hover:text-primary transition-all flex items-center gap-2 group/link">
                  <ExternalLink size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Explore</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
