// // src/app/pages.js or src/app/index.js
// import React from 'react';
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import AboutSection from "./components/AboutSection";
// import ProjectsSection from "./components/ProjectsSection";
// import Certificatesdata from "./components/Certificatesdata"; // Make sure this is the correct component name
// import Skills from "./components/Skills"; // Import the Skills component
// import EmailSection from "./components/EmailSection";
// import Footer from "./components/Footer";
// import EducationSection from './components/Education';
// // import Services from './components/Services.client';

// // import AchievementsSection from "./components/AchievementsSection";

// export default function Home() {
//   return (
//     <main className="flex flex-col min-h-screen bg-[#121212]">
//       <Navbar />
//       <div className="container mx-auto mt-24 px-12 py-4">
//         <HeroSection />
//         <AboutSection />
//         <EducationSection />
//         <Skills />
//         <ProjectsSection />
//         <Certificatesdata />
//         {/* <Services /> */}
//          {/* Include the Certificates section */}
//        {/* Include the Skills section */}
//         {/* <AchievementsSection /> */}
//         <EmailSection />
//       </div>
//       <Footer />
//     </main>
//   );
// }
// src/app/pages.js or src/app/index.js
import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EducationSection from './components/Education';
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import Certificatesdata from "./components/Certificatesdata";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <div className="my-16">
          <HeroSection />
        </div>
        <div className="my-16">
          <AboutSection />
        </div>
        <div className="my-16">
          <EducationSection />
        </div>
        <div className="my-16">
          <Skills />
        </div>
        <div className="my-16">
          <ProjectsSection />
        </div>
        <div className="my-16">
          <Certificatesdata />
        </div>
        <div className="my-16">
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}