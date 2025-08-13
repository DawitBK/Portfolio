import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind",
    "Framer Motion",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "JWT",
    "Testing",
    "CI/CD",
  ];

  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="https://picsum.photos/seed/dawit/640/420"
          alt="Portrait"
          className="rounded-xl shadow-soft"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-slate-600 dark:text-slate-300">
            I am a Full-Stack Developer and Creative Designer with hands-on
            experience across front-end, back-end, database, infrastructure,
            UI/UX design, and multimedia content creation. Skilled in delivering
            scalable and user-focused solutions with a modern technology stack.
            Passionate about clean code, intuitive interfaces, and impactful
            visual storytelling.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
