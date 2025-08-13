import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[92vh] flex items-center justify-center pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl px-4"
      >
        <p className="text-primary font-semibold">Hello, I’m Dawit</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
          I build clean, fast, accessible web experiences.
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          React + TypeScript specialist with full-stack skills (NestJS,
          Postgres, JWT).
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a
            href="#projects"
            className="px-5 py-2 rounded bg-primary text-white hover:bg-secondary transition shadow-soft"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
