import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepak Kumar — Platform / DevOps / SRE Engineer | Cloud + DevSecOps + AIOps",
  description:
    "Platform / DevOps / SRE engineer with 3+ years running production Kubernetes on AWS — GitOps CI/CD, Terraform, DevSecOps, observability, and AI-driven incident auto-remediation. Open to international remote roles and relocation.",
  metadataBase: new URL("https://deepak-portfolio.vercel.app"),
  openGraph: {
    title: "Deepak Kumar — Platform / DevOps / SRE Engineer",
    description:
      "Kubernetes · GitOps CI/CD · Terraform · DevSecOps · Observability · AIOps. 3+ years of production infrastructure experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Kumar — Platform / DevOps / SRE Engineer",
    description:
      "Kubernetes · GitOps · Terraform · DevSecOps · Observability · AIOps.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-ink-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
