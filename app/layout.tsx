import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alman Ahmad — AI/ML Engineer",
  description:
    "Alman Ahmad — AI/ML Engineer | Machine Learning, Computer Vision, NLP, Generative AI & Business Operations",
  keywords: [
    "Alman Ahmad",
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "Computer Vision",
    "NLP",
    "Accounts Operations",
    "Business Operations"
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