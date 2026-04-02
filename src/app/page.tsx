import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Interests from "@/components/Interests";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <div className="absolute inset-0 mesh-gradient pointer-events-none -z-10" />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Writing />
        <Interests />
        <section className="py-40 px-6 text-center max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-foreground tracking-tighter leading-[0.9]">
            Let&apos;s build the <span className="text-primary italic">next big thing.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            I&apos;m always open to discussing AI, startup architecture, or the best running routes.
          </p>
          <a
            href="mailto:6bikramsutar@gmail.com"
            className="inline-flex items-center gap-4 px-10 py-5 bg-white text-zinc-950 font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg shadow-2xl hover:scale-105"
          >
            Say Hello
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}