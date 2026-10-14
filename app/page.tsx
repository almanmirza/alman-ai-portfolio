"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const CV_PATH = "/Alman-Ahmad-CV.pdf";

const experiences = [
  ["May 2026 - Oct 2026", "Indigo Tech Solutions", "AI / Accounts Expert", "Zoho Books Integration · QuickBooks Management · Receiveable / Payable Automation"],
  ["Sep 2025 - Oct 2025", "MCB Bank", "AI / Technology Internship", "Network VOIP Integration · Database Administration · HR Management"],
  ["May 2025 - Aug 2025", "Cartlow", "Agentic AI Engineer Intern", "Agentic AI · Chatbot Development"],
  ["Sep 2024 - Oct 2024", "CodeAlpha", "AI Intern", "Python · Tkinter"]
];

const projects = [
  ["01", "StreetFresh", "AI / Computer Vision / Marketplace", "An AI-powered fruit and vegetable marketplace integrating produce recognition, freshness analysis, and vendor-to-customer ordering to make fresh produce shopping smarter and more accessible."],
  ["02", "M&E Garments — AI-Powered E-Commerce", "AI / Full-Stack Development", "A modern AI-powered garments e-commerce platform featuring an engaging shopping experience, an intelligent admin panel, and customer-focused features designed to streamline store management and improve online shopping."],
  ["03", "Gesture Control Calculator", "Computer Vision", "An interactive calculator powered by YOLOv8-based hand gesture recognition, enabling users to perform calculations through intuitive hand movements."],
  ["04", "Qyra", "Agentic AI / Application Development", "A full-fledged AI application developed during my Cartlow experience, incorporating booking agents and agentic workflows to support automated, task-oriented interactions."],
  ["05", "Music Recommendation System", "Machine Learning", "A Python-based recommendation system that analyzes user and item patterns to generate relevant music suggestions and deliver a more personalized listening experience."],
  ["06", "Movie Recommendation System", "Python / Data Structures & Algorithms", "A movie recommendation project combining Python programming and data-structure concepts to organize recommendation logic and help users discover relevant films."],
  ["07", "Climate Change Chatbot", "Natural Language Processing", "A dataset-driven NLP chatbot designed to respond to climate change-related queries and demonstrate how conversational AI can make environmental information more accessible."],
  ["08", "IRIS ML Studio", "Machine Learning / Streamlit", "An interactive machine learning application that uses a trained Iris classification model to predict flower species and demonstrate model inference through a user-friendly Streamlit interface."]
];

const skills = [
  "Machine Learning", "Deep Learning", "Generative AI", "Computer Vision",
  "NLP", "Python", "C++", "TensorFlow", "PyTorch", "Scikit-learn",
  "TypeScript", "Data Analysis", "Git", "Databases", "Streamlit", "Tkinter", "FastAPI", "Docker", "Zoho Books", "YOLOv8"
];

function Reveal({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({
  href,
  children,
  download,
  variant = "solid"
}: {
  href: string;
  children: React.ReactNode;
  download?: string;
  variant?: "solid" | "outline";
}) {
  return (
    <motion.a
      href={href}
      download={download}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={variant === "outline" ? "button outline" : "button"}
    >
      {children}
    </motion.a>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <nav className="nav">
        <a className="brand" href="#top">Alman Ahmad<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:mughal.mirza129@gmail.com">Hire me</a>
      </nav>

      <section id="top" ref={heroRef} className="hero">
        <motion.div className="hero-orb orb-one" style={{ y: orbY }} />
        <motion.div className="hero-orb orb-two" style={{ y: orbY }} />

        <motion.div className="hero-content" style={{ scale: heroScale, opacity: heroOpacity }}>
          <Reveal>
            <div className="eyebrow"><span className="pulse" /> AI / ML ENGINEER</div>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            I build intelligence
            <br />
            <span>that feels human.</span>
          </motion.h1>

          <Reveal delay={0.2}>
            <p className="hero-copy">
              I&apos;m <strong>Alman Ahmad</strong>, an AI/ML engineer focused on
              Machine Learning, Deep Learning, Computer Vision, NLP and Generative AI.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="hero-actions">
              <MagneticButton href="#work">Explore my work <span>↓</span></MagneticButton>
              <MagneticButton href={CV_PATH} download="Alman-Ahmad-CV.pdf" variant="outline">
                Download CV <span>⭳</span>
              </MagneticButton>
              <a className="text-link" href="mailto:mughal.mirza129@gmail.com">Let&apos;s talk ↗</a>
            </div>
          </Reveal>

          <div className="scroll-hint">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"><span /></div>
          </div>
        </motion.div>
      </section>

      <section className="statement">
        <Reveal>
          <p className="section-kicker">THE IDEA</p>
          <h2>
            From <em>data</em> to decisions.
            <br />
            From models to <span>impact.</span>
          </h2>
        </Reveal>
      </section>

      <section id="work" className="section">
        <div className="section-heading">
          <Reveal>
            <p className="section-kicker">SELECTED WORK</p>
            <h2>Things I&apos;ve built.</h2>
          </Reveal>
        </div>

        <div className="project-grid">
          {projects.map(([num, title, category, description], i) => (
            <Reveal key={title} delay={i * 0.04} className={i === 0 ? "project-card featured" : "project-card"}>
              <motion.article whileHover={{ y: -10 }} transition={{ duration: 0.35 }}>
                <div className="project-top">
                  <span>{num}</span>
                  <span>{category}</span>
                </div>
                <div className="project-visual">
                  <div className="visual-grid" />
                  <div className="visual-core">{i === 0 ? "CV" : i === 1 ? "AI" : "ML"}</div>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="project-arrow">View concept ↗</span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="dark-section">
        <div className="section-heading">
          <Reveal>
            <p className="section-kicker light">EXPERIENCE</p>
            <h2>Learning by building.</h2>
          </Reveal>
        </div>

        <div className="timeline">
          {experiences.map(([year, company, role, details], i) => (
            <Reveal key={company} delay={i * 0.08}>
              <div className="timeline-row">
                <span className="timeline-year">{year}</span>
                <div>
                  <h3>{role}</h3>
                  <p className="company">{company}</p>
                  <p>{details}</p>
                </div>
                <span className="timeline-dot" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="section about-section">
        <Reveal>
          <p className="section-kicker">ABOUT ALMAN</p>
          <div className="about-layout">
            <h2>Curious by default.<br /><span>Builder by choice.</span></h2>
            <div>
              <p className="large-copy">
                I&apos;m pursuing a Bachelor&apos;s degree in Artificial Intelligence
                at the University of Central Punjab, Lahore, while building practical
                experience across AI, data and software projects.
              </p>
              <p>
                My toolkit spans Python, C++, TensorFlow, PyTorch, Scikit-learn,
                TypeScript, data analysis and Git. I enjoy taking an idea from
                experimentation to something people can actually use.
              </p>
              <div className="skill-cloud">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="education-strip">
        <Reveal>
          <span>Oct 2022 — Sep 2026</span>
          <h3>BSc Artificial Intelligence</h3>
          <p>University of Central Punjab · Lahore</p>
        </Reveal>
      </section>

      <section id="contact" className="contact">
        <motion.div
          className="contact-inner"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="section-kicker light">LET&apos;S CONNECT</p>
          <h2>Have an AI problem<br /><span>worth solving?</span></h2>
          <p className="contact-copy">
            Recruiters, employers, collaborators and curious humans — my inbox is open.
          </p>
          <MagneticButton href="mailto:mughal.mirza129@gmail.com">
            mughal.mirza129@gmail.com ↗
          </MagneticButton>
          <div style={{ height: 14 }} />
          <MagneticButton href={CV_PATH} download="Alman-Ahmad-CV.pdf" variant="outline">
            Download CV <span>⭳</span>
          </MagneticButton>

          <div className="socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </motion.div>
      </section>

      <footer>
        <span>© 2026 Alman Ahmad</span>
        <span>Designed for AI. Built for humans.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}