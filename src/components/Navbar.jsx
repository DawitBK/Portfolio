import React, { useState } from "react";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  // Handle link click to close menu and ensure smooth scrolling
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold text-xl">
          Dawit <span className="text-primary">BK</span>
        </a>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-2 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀️" : "☾"}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl px-2"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "✕" : "☰"} {/* Show close icon when menu is open */}
          </button>
        </div>

        <ul
          id="menu"
          className={`${
            open ? "block" : "hidden"
          } md:flex items-center gap-6 absolute md:static top-16 left-0 right-0 bg-white dark:bg-slate-900 md:bg-transparent md:dark:bg-transparent rounded-b md:rounded-none p-4 md:p-0 shadow md:shadow-none transition-all duration-300 ease-in-out`}
        >
          {["about", "projects", "blog", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={handleLinkClick}
                className="block py-2 md:py-0 hover:text-primary transition"
              >
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="inline-flex items-center px-4 py-2 rounded bg-primary text-white hover:bg-secondary transition"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
