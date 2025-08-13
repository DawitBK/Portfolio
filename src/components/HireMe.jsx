import React from "react";

const HireMe = () => {
  return (
    <section
      id="hire-me"
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 text-white text-center"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="mb-8 text-lg">
          I’m always excited to collaborate on innovative projects and help
          bring your vision to life. Whether you need a developer, designer, or
          consultant — I’m here to make it happen.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition duration-300"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default HireMe;
