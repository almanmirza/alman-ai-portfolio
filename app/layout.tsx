import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alman Ahmad — AI/ML Engineer",
  description:
    "Portfolio of Alman Ahmad — AI/ML Engineer focused on Machine Learning, Deep Learning, Computer Vision, NLP and Generative AI.",
  keywords: [
    "Alman Ahmad",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Computer Vision",
    "NLP"
  ],
  openGraph: {
    title: "Alman Ahmad — AI/ML Engineer",
    description: "AI/ML portfolio, projects, experience and contact.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}