import { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { notFound } from "next/navigation";

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

const projectsData: Record<string, Project> = {
  numen: {
    title: "Numen",
    role: "Core Contributor",
    description: "A specialist design-engineering collective focused on building high-performance, aesthetically exceptional digital interfaces. We bridge the gap between creative vision and technical execution.",
    tech: ["Next.js", "Three.js", "Framer Motion", "Tailwind"],
    impact: "Redefining how early-stage startups and creative agencies approach interactive storytelling and performance-first web experiences.",
    links: { website: "https://numen.team" }
  },
  hoply: {
    title: "Hoply",
    role: "Architect",
    description: "A radically simplified e-commerce stack designed for high-growth brands. Hoply abstracts the complexity of headless commerce into a high-speed, manageable framework.",
    tech: ["React", "Node.js", "GraphQL", "Redis"],
    impact: "Enabling brands to deploy high-conversion shops in a fraction of the time, with 99.9th percentile performance metrics.",
    links: { website: "https://gethoply.com" }
  },
  houseware: {
    title: "Houseware Analytics",
    role: "Founding Engineer (#1)",
    description: "A high-performance analytics platform for B2B SaaS. Architected from the first line of code to handle complex data attribution and user journeys.",
    tech: ["React", "Go", "PostgreSQL", "Snowflake"],
    impact: "Acquired by LaunchDarkly in 2024. Scaled to serve enterprise customers with multi-million dollar ARR.",
    links: { website: "https://houseware.io" }
  },
  orangehealth: {
    title: "OrangeHealth",
    role: "Engineering Lead (#3)",
    description: "Full-stack health diagnostic platform (YC S20). Built the critical infrastructure for diagnostic testing and report generation at national scale.",
    tech: ["React Native", "Node.js", "AWS", "Python"],
    impact: "Processed millions of diagnostic requests, becoming a trusted name for health testing in India.",
    links: { website: "https://orangehealth.in" }
  },
  "ai-experiments": {
    title: "AI Experiments",
    role: "Lead Researcher",
    description: "A series of high-stakes experiments in agentic UI, browser-based automation, and local LLM orchestration. Exploring the edge of human-machine intent synchronization.",
    tech: ["Python", "Ollama", "LangChain", "Puppeteer"],
    impact: "Prototyped several browser-agent hacks that automate complex multi-step workflows directly in the viewport.",
    links: { website: "https://x.com/thebstar13/status/1844012117591695640" }
  },
  hamigorkhali: {
    title: "Hami Gorkhali",
    role: "Founder & Lead",
    description: "The digital home for the Indian Gorkha Diaspora. A platform designed to connect thousands of community members, share heritage, and coordinate social initiatives.",
    tech: ["Next.js", "Firebase", "TypeScript", "Tailwind"],
    impact: "Grown to be the primary digital touchpoint for the community, facilitating local events and cultural preservation programs.",
    links: { website: "https://hamigorkhali.com" }
  }
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projectsData[params.id];
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Projects by Bikram Sutar`,
    description: project.description.substring(0, 160),
    openGraph: {
      title: `${project.title} - ${project.role}`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id: id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
