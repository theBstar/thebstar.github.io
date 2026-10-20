import { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { notFound } from "next/navigation";

interface ProjectLinks {
  github?: string;
  twitter?: string;
  website?: string;
}

interface Post {
  title: string;
  url: string;
  date?: string;
}

interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  impact: string;
  links: ProjectLinks;
  posts?: Post[];
}

const projectsData: Record<string, Project> = {
  suvi: {
    title: "Suvi",
    role: "Founder",
    description: "An Android launcher for children that replaces blanket parental controls with earned freedom. Reading, learning apps and time outdoors earn points toward a real-world reward the child chooses, while demonstrated responsibility unlocks phone features one at a time.",
    tech: ["Android", "Kotlin", "Astro"],
    impact: "Shaped by workshops with 100+ kids since 2024. Launching software first, on a phone the family already owns.",
    links: { website: "https://mysuvi.com/" }
  },
  numen: {
    title: "Numen",
    role: "Creator",
    description: "Proactive work intelligence for engineering teams. Numen connects Linear, GitHub, Slack, Jira, Notion and Google Docs into one context graph, scores what deserves attention, and answers in Slack. Search tools answer when you ask. Numen tells you before you ask.",
    tech: ["Python", "FastAPI", "MCP", "Docker"],
    impact: "Open source and self-hosted under AGPL-3.0. The only network egress is to the LLM endpoint you configure, which can run on your own hardware.",
    links: { github: "https://github.com/theBstar/numen" }
  },
  shipreel: {
    title: "Shipreel",
    role: "Creator",
    description: "An agent skill that turns a pull request into a short narrated walkthrough video. Your coding agent reads the diff, writes the story, draws the diagrams, records the real app if the change has a UI, and renders a compact MP4 with captions and an ambient music bed.",
    tech: ["Node.js", "Puppeteer", "ffmpeg", "Agent Skills"],
    impact: "Free and local by default: no API keys, no uploads. Reviewers watch the change instead of reverse-engineering it. Works with Claude Code, Codex, Cursor and other agents.",
    links: { github: "https://github.com/theBstar/shipreel", website: "https://www.thebstar.com/shipreel/" }
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
    links: { website: "https://x.com/thebstar13/status/1844012117591695640" },
    posts: []
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
