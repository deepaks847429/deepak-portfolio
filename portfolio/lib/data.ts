export const profile = {
  name: "Deepak Kumar",
  role: "Software Engineer",
  subtitle: "Full Stack Developer | Cloud & DevOps Engineer",
  tagline:
    "Building scalable web platforms, backend systems, cloud infrastructure, and production-grade deployments with 3+ years of real-world engineering experience.",
  email: "deepaks9631342845@gmail.com",
  github: "https://github.com/deepaks847429",
  linkedin: "https://www.linkedin.com/in/ambitioushustler/",
  // basePath is NOT auto-applied to raw <a href> links, so prefix it manually.
  resumeUrl: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/deepak_kumar_resume.pdf`,
  location: "Open to international remote opportunities and relocation",
};

export const heroStats = [
  { value: "3+", label: "Years Experience" },
  { value: "5", label: "Projects Delivered" },
  { value: "10+", label: "Cloud Services" },
  { value: "∞", label: "Problems Solved" },
];

export const skillGroups: {
  title: string;
  items: string[];
}[] = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "WebSockets",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud / DevOps",
    items: [
      "AWS EC2",
      "S3",
      "Lambda",
      "VPC",
      "Subnets",
      "SNS",
      "SQS",
      "EKS",
      "ECR",
      "Route Tables",
      "Kubernetes",
      "Docker",
      "CI/CD Pipelines",
      "Linux",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Jira", "Postman", "VS Code"],
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    domain: "Healthcare Domain",
    period: "Production · 3 Years Experience",
    bullets: [
      "Developed critical product features for healthcare platforms",
      "Managed end-to-end cloud deployments using Kubernetes",
      "Improved system reliability and release processes",
      "Worked closely with backend, frontend, and infrastructure teams",
      "Maintained scalable production environments",
    ],
  },
  {
    role: "Software Engineer",
    domain: "Prop Firm / FinTech Domain",
    period: "Payout Risk Engine",
    bullets: [
      "Built logic that fetched all required payout data in real time",
      "Simulated business rules and fraud / risk conditions",
      "Automated payout decision flow: Approve, Reject, Manual Review",
      "Helped build reliable backend workflows for high-value financial operations",
    ],
  },
];

export const projects = [
  {
    title: "Payout Risk Engine",
    stack: ["Node.js", "AWS", "Kubernetes"],
    description:
      "A rule-based backend engine that evaluates payout requests by fetching user activity, applying risk checks, simulating decision algorithms, and returning final outcomes.",
    impact: "Reduced manual review load and improved payout accuracy.",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Healthcare Cloud Deployment Platform",
    stack: ["AWS", "Kubernetes", "CI/CD"],
    description:
      "Managed deployments of healthcare applications using Kubernetes clusters with secure AWS infrastructure.",
    impact: "Faster releases, improved uptime, scalable deployments.",
    accent: "from-indigo-500/20 to-blue-500/10",
  },
  {
    title: "GitOps CI/CD Delivery Platform",
    stack: ["Terraform", "ArgoCD", "GitHub Actions", "Kubernetes"],
    description:
      "Designed a fully automated GitOps delivery platform with Terraform-provisioned infrastructure and ArgoCD-driven continuous deployment across dev, staging, and production environments.",
    impact: "Cut deployment time ~70% and eliminated manual release steps.",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Observability & Auto-Scaling Infrastructure",
    stack: ["Prometheus", "Grafana", "EKS", "Helm"],
    description:
      "Built end-to-end monitoring, alerting, and horizontal auto-scaling for production Kubernetes workloads using Prometheus, Grafana dashboards, and custom metric-driven HPA policies.",
    impact: "Reduced incident MTTR and absorbed 3x traffic spikes with zero downtime.",
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    title: "Full Stack Internal Dashboard",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "Built admin dashboards for internal operations, analytics, and monitoring across the organization.",
    impact: "Centralized internal tooling and reduced ops turnaround.",
    accent: "from-sky-500/20 to-blue-500/10",
  },
];

export const reasons = [
  "Full Stack Development Experience",
  "AWS + Kubernetes Production Experience",
  "Backend Logic & System Design",
  "End-to-End Ownership",
  "Real Industry Domain Experience",
  "Fast Learner & Problem Solver",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
