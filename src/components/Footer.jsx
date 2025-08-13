import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Dawit BK. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
