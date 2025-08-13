import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Library Manager",
    description:
      "React + NestJS app with JWT auth, staff/members, borrow/return, and reports.",
    img: "https://picsum.photos/seed/lib/800/500",
    live: "https://library-management-system-lyart-pi.vercel.app/",
    code: "https://github.com/DawitBK/Library_Management_System",
  },
  {
    title: "Static portfolio website",
    description: "a static portfolio website using html css and javascript.",
    img: "https://picsum.photos/seed/ana/800/500",
    live: "https://static-portfolio-sigma.vercel.app/",
    code: "https://github.com/DawitBK/Static-Portfolio",
  },
  {
    title: "Figma Design & Publish",
    description:
      "Portfolio website design development and deployment using Figma",
    img: "https://picsum.photos/seed/ux/800/500",
    live: "https://suds-puppet-04344187.figma.site/",
    code: "https://github.com/DawitBK/Library_Management_System",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <motion.article
              key={p.title}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-soft"
            >
              <img
                src={p.img}
                alt={`${p.title} preview`}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {p.description}
                </p>
                <div className="mt-4 flex gap-2">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      className="px-3 py-1 text-sm rounded bg-primary text-white"
                    >
                      Live
                    </a>
                  ) : (
                    <span className="px-3 py-1 text-sm rounded border border-slate-300 dark:border-slate-600 text-slate-500">
                      Live
                    </span>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    className="px-3 py-1 text-sm rounded border border-primary text-primary hover:bg-primary hover:text-white transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
