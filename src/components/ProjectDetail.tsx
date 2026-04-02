"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Github, Globe, Share2 } from "lucide-react";
import Link from "next/link";

interface ProjectLinks {
  github?: string;
  twitter?: string;
  website?: string;
}

interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  impact: string;
  links: ProjectLinks;
}

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="absolute inset-0 mesh-gradient pointer-events-none -z-10" />
      <Navigation />
      
      <main className="pt-24 md:pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-12 md:space-y-16">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        
        <div className="space-y-8">
          <div className="space-y-3 md:space-y-4">
             <h1 className="text-4xl md:text-7xl font-headline font-bold text-foreground tracking-tight leading-tight">
               {project.title}
             </h1>
             <p className="text-xl md:text-2xl font-headline text-primary font-medium">
               {project.role}
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pt-4 md:pt-8">
             <div className="md:col-span-2 space-y-10 md:space-y-12">
                <section className="space-y-4">
                   <h2 className="text-sm md:text-xl font-headline font-bold uppercase tracking-widest text-muted-foreground">About</h2>
                   <p className="text-lg md:text-xl leading-relaxed text-foreground opacity-90">
                     {project.description}
                   </p>
                </section>
                
                <section className="space-y-4">
                   <h2 className="text-sm md:text-xl font-headline font-bold uppercase tracking-widest text-muted-foreground">Impact</h2>
                   <p className="text-lg md:text-xl leading-relaxed text-foreground opacity-90">
                     {project.impact}
                   </p>
                </section>
             </div>
             
             <div className="space-y-10 md:space-y-12">
                <section className="space-y-4">
                   <h2 className="text-sm md:text-xl font-headline font-bold uppercase tracking-widest text-muted-foreground">Tech Stack</h2>
                   <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs md:text-sm text-primary font-medium">
                          {t}
                        </span>
                      ))}
                   </div>
                </section>
                
                <section className="space-y-4">
                   <h2 className="text-sm md:text-xl font-headline font-bold uppercase tracking-widest text-muted-foreground">Links</h2>
                   <div className="flex flex-col gap-4">
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                           <Github size={18} className="group-hover:text-primary" />
                           <span className="font-medium text-base md:text-lg">GitHub Repository</span>
                        </a>
                      )}
                      {project.links.website && (
                        <a href={project.links.website} target="_blank" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                           <Globe size={18} className="group-hover:text-primary" />
                           <span className="font-medium text-base md:text-lg">Project Link</span>
                        </a>
                      )}
                      {project.links.twitter && (
                        <a href={project.links.twitter} target="_blank" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                           <Share2 size={18} className="group-hover:text-primary" />
                           <span className="font-medium text-base md:text-lg">Twitter Updates</span>
                        </a>
                      )}
                   </div>
                </section>
             </div>
          </div>
        </div>
        
        <section className="pt-16 md:pt-20 border-t border-white/10">
           <div className="glass-card rounded-2xl p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-headline font-bold">Have a similar project in mind?</h2>
              <p className="text-base md:text-lg text-muted-foreground italic">Let&apos;s build something extraordinary together.</p>
              <a href="mailto:6bikramsutar@gmail.com" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform shadow-xl text-sm md:text-base">
                 Work with me
              </a>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
