import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = encodeURIComponent(fd.get("name"));
    const email = encodeURIComponent(fd.get("email"));
    const message = encodeURIComponent(fd.get("message"));
    window.location.href = `mailto:hello@dawit.dev?subject=Portfolio%20Inquiry%20from%20${name}&body=${message}%0A%0Afrom:%20${email}`;
    setStatus("Opening your email client…");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 dark:bg-slate-950/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form
          onSubmit={onSubmit}
          className="space-y-4 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-soft"
        >
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full rounded-md"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-md"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Message"
            className="w-full rounded-md"
          ></textarea>
          <button className="px-5 py-2 rounded bg-primary text-white hover:bg-secondary transition">
            Send
          </button>
          <p
            className="text-sm text-slate-500 dark:text-slate-400"
            aria-live="polite"
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
