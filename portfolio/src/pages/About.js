import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-16 bg-gray-100 text-gray-900">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I am a passionate frontend developer skilled in building responsive and
        engaging websites. My expertise includes React.js, Tailwind CSS, and
        advanced JavaScript. I enjoy creating interactive user interfaces and
        solving complex coding challenges.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="p-4 bg-white shadow-md rounded">
          <h3 className="font-bold text-xl">Frontend Development</h3>
          <p>React.js, JavaScript, HTML, CSS</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded">
          <h3 className="font-bold text-xl">Styling</h3>
          <p>Tailwind CSS, Bootstrap</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded">
          <h3 className="font-bold text-xl">Tools</h3>
          <p>Git, GitHub, VS Code</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
