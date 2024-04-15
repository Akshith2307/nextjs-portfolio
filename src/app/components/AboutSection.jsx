"use client";

import React from 'react';
import Image from 'next/image';

// Each section component can be split further if needed
const AboutMe = () => (
  <div className="text-white py-8 px-4 sm:py-16 xl:px-16">
    <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
      <Image src="/images/about-image.png" alt="About Me Image" width={500} height={500} priority />
      <div>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am a full stack web developer with a passion for creating interactive and responsive web applications.
          My expertise includes working with JavaScript, React, Redux, Node.js, and more. I am committed to learning
          and collaborating on exciting projects.
        </p>
      </div>
    </div>
  </div>
);

// const Skills = () => (
//   <div className="text-white py-8 px-4 sm:py-16 xl:px-16 bg-gray-800">
//     <h2 className="text-4xl font-bold mb-4">Skills</h2>
//     <ul className="list-disc pl-4">
//       <li>Node.js</li>
//       <li>Express</li>
//       <li>PostgreSQL</li>
//       <li>Sequelize</li>
//       <li>JavaScript</li>
//       <li>React</li>
//     </ul>
//   </div>
// );

// const Education = () => (
//   <div className="text-white py-8 px-4 sm:py-16 xl:px-16 bg-gray-700">
//     <h2 className="text-4xl font-bold mb-4">Education</h2>
//     <ul className="list-disc pl-4">
//       <li>Fullstack Academy of Code</li>
//       <li>University of California, Santa Cruz</li>
//     </ul>
//   </div>
// );



const AboutSection = () => {
  return (
    <section>
      <AboutMe />
      {/* <Skills />
      <Education />
      <Certifications /> */}
    </section>
  );
};

export default AboutSection;
