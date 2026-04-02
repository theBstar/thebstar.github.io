import { ArrowUpRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "Learnings from building Agentic UIs",
    subtitle: "The future of application Interfaces and human-AI interaction.",
    url: "https://www.linkedin.com/pulse/learnings-from-building-agentic-uis-future-interfaces-bikram-sutar-pg4pc",
    tag: "Design"
  },
  {
    title: "Learn Typescript in 15 minutes",
    subtitle: "A high-speed guide to the most essential features of TypeScript.",
    url: "https://medium.com/front-end-weekly/learn-typescript-in-15-minutes-bf921cf355f5",
    tag: "TypeScript"
  },
  {
    title: "React Hooks in TypeScript",
    subtitle: "A guide on how to write functional components and hooks with type safety.",
    url: "https://javascript.plainenglish.io/write-react-functional-components-and-hooks-with-typescript-cd1539e2bc2a",
    tag: "React"
  },
  {
    title: "Retention is hard, but it's the ultimate reward",
    subtitle: "Reflections on the most important metric for any product or community.",
    url: "https://www.linkedin.com/posts/thebstar_i-have-been-organising-community-events-for-activity-7242037721219653632-jY5c",
    tag: "Product"
  },
  {
    title: "CSS Selectors & Specificity",
    subtitle: "Everything you need to know about how CSS rules are applied.",
    url: "https://medium.com/swlh/everything-you-need-to-know-about-css-selectors-and-specificity-28d4bda10cdb",
    tag: "CSS"
  },
  {
    title: "Virtualization in React",
    subtitle: "Rendering thousands of items without impacting app performance.",
    url: "https://medium.com/dev-genius/render-thousands-of-items-in-react-without-impacting-performance-with-virtualization-932572999a2f",
    tag: "Performance"
  },
  {
    title: "Raising Mentally Strong Kids",
    subtitle: "The path to confidence and resilience in a fast-changing world.",
    url: "https://www.linkedin.com/pulse/raising-mentally-strong-kids-path-confidence-resilience-bikram-sutar-0xh0c",
    tag: "Parenting"
  },
  {
    title: "Don't just say 'Hi'",
    subtitle: "A practical guide to networking and reaching out for job seekers.",
    url: "https://www.linkedin.com/pulse/dont-say-hi-practical-guide-reach-out-job-seekers-bikram-sutar-thwqc",
    tag: "Career"
  },
  {
    title: "Life Journals",
    subtitle: "Personal reflections and the raw notes of a builder.",
    url: "https://thebstar.com/blogs",
    tag: "Personal"
  }
];

export default function Writing() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="writing">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
        <div className="space-y-4">
          <span className="text-primary font-headline tracking-widest uppercase text-[10px] font-bold block">
            Thinking & Writing
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground">
            Digital Ink
          </h2>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground italic text-base md:text-lg">
          <BookOpen className="w-5 h-5" />
          <span>Documenting the journey, one essay at a time.</span>
        </div>
      </div>

      <div className="space-y-4">
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative p-6 md:p-10 glass-card rounded-lg hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[8px] md:text-[9px] font-bold tracking-widest uppercase rounded">
                    {article.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-lg">
                  {article.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2 text-primary opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Read Article</span>
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            
            {/* Hover Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </a>
        ))}
      </div>
    </section>
  );
}
