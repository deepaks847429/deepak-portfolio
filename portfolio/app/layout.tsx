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
  title: "Deepak Kumar — Software Engineer | Full Stack + Cloud + DevOps",
  description:
    "Software Engineer with 3 years building scalable web platforms, backend systems, AWS infrastructure, and Kubernetes deployments. Open to international remote opportunities and relocation.",
  metadataBase: new URL("https://deepak-portfolio.vercel.app"),
  openGraph: {
    title: "Deepak Kumar — Software Engineer",
    description:
      "Full Stack + Cloud + DevOps + Scalable Backend Systems. 3 years of production engineering experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Kumar — Software Engineer",
    description:
      "Full Stack + Cloud + DevOps + Scalable Backend Systems.",
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
