export const profile = {
  name: "Deepak Kumar",
  role: "Platform / DevOps / SRE Engineer",
  subtitle: "Cloud Infrastructure · DevSecOps · AIOps · Backend Systems",
  tagline:
    "I build secure, self-healing cloud platforms on Kubernetes — GitOps delivery, full observability, and AI-driven incident auto-remediation. 3+ years running production systems in healthcare and fintech.",
  email: "deepaks9631342845@gmail.com",
  github: "https://github.com/deepaks847429",
  linkedin: "https://www.linkedin.com/in/ambitioushustler/",
  // basePath is NOT auto-applied to raw <a href> links, so prefix it manually.
  resumeUrl: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/deepak_kumar_resume.pdf`,
  location: "Open to international remote opportunities and relocation",
};

export const heroStats = [
  { value: "3+", label: "Years in Production" },
  { value: "6", label: "Platform Projects" },
  { value: "20+", label: "Cloud & DevOps Tools" },
  { value: "99.9%", label: "Uptime Target" },
];

export const skillGroups: {
  title: string;
  items: string[];
}[] = [
  {
    title: "AWS Cloud",
    items: [
      "EC2",
      "EKS",
      "S3",
      "Lambda",
      "IAM",
      "VPC",
      "Route53",
      "CloudWatch",
      "RDS",
    ],
  },
  {
    title: "Containers & Orchestration",
    items: ["Kubernetes", "Docker", "Helm", "Kustomize", "EKS"],
  },
  {
    title: "CI/CD & GitOps",
    items: [
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "Azure DevOps",
      "ArgoCD",
      "Progressive Delivery",
    ],
  },
  {
    title: "Infrastructure as Code",
    items: ["Terraform", "Ansible", "Packer", "Drift Detection", "Policy-as-Code"],
  },
  {
    title: "Observability & SRE",
    items: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Tempo",
      "Datadog",
      "PagerDuty",
      "SLO / SLI / Error Budgets",
    ],
  },
  {
    title: "DevSecOps & Security",
    items: [
      "Trivy",
      "SonarQube",
      "OWASP",
      "OPA / Kyverno",
      "HashiCorp Vault",
      "SBOM / Supply Chain",
      "IAM Hardening",
    ],
  },
  {
    title: "AI / AIOps",
    items: [
      "LLM Integrations (Claude, OpenAI)",
      "Agentic Workflows",
      "LangChain",
      "RAG",
      "AI Incident Auto-Remediation",
      "Vector Databases",
    ],
  },
  {
    title: "Languages & Scripting",
    items: ["Python", "Bash", "Go (basics)", "Node.js", "TypeScript", "SQL"],
  },
  {
    title: "Backend & Data",
    items: [
      "REST APIs",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "Linux Administration",
    ],
  },
];

export const experiences = [
  {
    role: "Platform / DevOps Engineer",
    domain: "Healthcare Domain",
    period: "Production · 3 Years Experience",
    bullets: [
      "Operated production Kubernetes (AWS EKS) workloads for consumer-facing healthcare services",
      "Built GitOps CI/CD pipelines with GitHub Actions, Helm, and ArgoCD across dev/staging/prod",
      "Provisioned AWS infrastructure with Terraform modules and enforced drift detection",
      "Stood up Prometheus + Grafana observability with SLO-based alerting and on-call runbooks",
      "Introduced AI-assisted incident triage to cut mean-time-to-detect and mean-time-to-resolve",
    ],
  },
  {
    role: "Backend / DevSecOps Engineer",
    domain: "Prop Firm / FinTech Domain",
    period: "Payout Risk Engine · Secure Pipelines",
    bullets: [
      "Built a real-time payout risk engine automating Approve / Reject / Manual-Review decisions",
      "Simulated fraud and risk conditions over high-value financial transaction flows",
      "Added security gates to CI/CD: SAST, container scanning (Trivy), and secrets detection",
      "Hardened IAM, secrets management, and enforced SLA-driven vulnerability remediation",
      "Automated scanning and config enforcement with Python and Bash tooling",
    ],
  },
];

export const projects = [
  {
    title: "AIOps Incident Auto-Remediation Engine",
    stack: ["Python", "Claude / OpenAI", "LangChain", "Prometheus", "Kubernetes"],
    description:
      "An agentic AIOps system that ingests Alertmanager alerts, correlates metrics/logs/traces, runs LLM-driven root-cause analysis, and executes safe remediation runbooks on Kubernetes — with human-in-the-loop approval for high-risk actions.",
    impact: "Cut MTTR ~60% and auto-resolved ~40% of recurring incidents without manual intervention.",
    accent: "from-fuchsia-500/20 to-purple-500/10",
  },
  {
    title: "GitOps Continuous Delivery Platform",
    stack: ["Terraform", "ArgoCD", "Helm", "GitHub Actions", "EKS"],
    description:
      "A GitOps-driven delivery platform on AWS EKS with Terraform-provisioned infrastructure, ArgoCD continuous deployment, and progressive delivery (canary + blue-green) across dev, staging, and production.",
    impact: "Cut deployment time ~70%, standardized releases, and eliminated manual release steps.",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "DevSecOps Pipeline with Policy-as-Code Gates",
    stack: ["GitHub Actions", "Trivy", "SonarQube", "OPA / Kyverno", "Vault"],
    description:
      "A secure-by-design CI/CD pipeline enforcing SAST/DAST, container & IaC scanning, secrets detection, SBOM generation, and OPA/Kyverno admission policies — blocking insecure builds before they reach production.",
    impact: "Drove critical vulns reaching prod to near-zero with SLA-driven, SOC2-aligned remediation.",
    accent: "from-rose-500/20 to-red-500/10",
  },
  {
    title: "Observability & Auto-Scaling Platform (SRE)",
    stack: ["Prometheus", "Grafana", "Loki", "Tempo", "EKS", "Helm"],
    description:
      "End-to-end observability across metrics, logs, and traces with SLO-based alerting, Grafana dashboards, and metric-driven HPA/KEDA autoscaling for production Kubernetes workloads.",
    impact: "Reduced incident MTTR and absorbed 3x traffic spikes with zero downtime via error-budget SLOs.",
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    title: "Payout Risk & Fraud Decision Engine",
    stack: ["Node.js", "PostgreSQL", "Redis", "AWS Lambda"],
    description:
      "A rule-based backend engine evaluating high-value payout requests in real time — aggregating user activity, applying fraud/risk heuristics, and automating Approve / Reject / Manual-Review outcomes.",
    impact: "Reduced manual review load and improved payout accuracy on a high-value financial workflow.",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Terraform Landing Zone & FinOps Automation",
    stack: ["Terraform", "AWS", "Python", "Ansible"],
    description:
      "Reusable Terraform modules for a secure multi-account AWS landing zone (IAM guardrails, VPC, drift detection) plus Python FinOps automation for cost-anomaly alerts and right-sizing recommendations.",
    impact: "Cut cloud spend ~25% and enforced consistent, drift-free infrastructure baselines.",
    accent: "from-indigo-500/20 to-blue-500/10",
  },
];

export const reasons = [
  "Kubernetes in Production (AWS EKS)",
  "GitOps CI/CD & Infrastructure as Code",
  "DevSecOps & Policy-as-Code Security",
  "SRE: Observability, SLOs & On-Call",
  "AI / AIOps Automation & Auto-Remediation",
  "End-to-End Ownership & RCA",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
