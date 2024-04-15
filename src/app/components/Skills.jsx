import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython, faJava, faReact, faAws, faDocker, faNode,
  faHtml5, faCss3, faLinux, faWindows, faGithub, faSalesforce,
  faBootstrap, faJira, faGoogle, faMicrosoft, faDatabase,
  faAndroid, faApple,faCss3Alt,faNodeJs, faUnity, faRProject // Make sure to add other missing imports here if needed
} from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons'; // Make sure this import is correct
import { faJs } from '@fortawesome/free-brands-svg-icons';


// ... rest of your component


const iconStyles = {
  color: '#fff', // Default icon color; replace with your own default color
  width: '50px', // Fixed width for all icons
  height: '50px', // Fixed height for all icons
};

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "C", icon: faServer },
        { name: "C++", icon: faServer },
        { name: "Java", icon: faJava },
        { name: "Python", icon: faPython },
        { name: "JavaScript", icon: faJs },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
       
        // { name: "R", icon: faRProject },
        // { name: "React", icon: faReact },
        // { name: "Node.js", icon: faNodeJs },
        // { name: "Next.js", icon: faNodeJs },
        // { name: "Three.js", icon: faUnity },
      ],
    },
    {
      category: "",
      items: [
        { name: "R", icon: faRProject },
        { name: "React", icon: faReact },
        { name: "Node.js", icon: faNodeJs },
        { name: "Next.js", icon: faNodeJs },
        { name: "Three.js", icon: faUnity },
      ],
    },
    {
      category: "Platforms",
      items: [
        { name: "Azure", icon: faMicrosoft },
        { name: "AWS", icon: faAws },
        { name: "Google Cloud Platform", icon: faGoogle },
        { name: "Salesforce", icon: faSalesforce },
      ],
    },
    // {
    //   category: "Frameworks & Libraries",
    //   items: [
    //     { name: "Django", icon: faPython },
    //     { name: "TensorFlow", icon: faPython },
    //     { name: "PyTorch", icon: faPython },
    //     { name: "Bootstrap", icon: faBootstrap },
    //   ],
    // },
    // {
    //   category: "Analysis Tools",
    //   items: [
    //     { name: "Tableau", icon: faWindows },
    //     { name: "Power BI", icon: faWindows },
    //     { name: "MS Excel", icon: faMicrosoft },
    //   ],
    // },
    {
      category: "Software Tools",
      items: [
        { name: "Jira", icon: faJira },
        { name: "Google Suite", icon: faGoogle },
        { name: "Postman", icon: faGithub },
        { name: "Docker", icon: faDocker },
      ],
    },
    // {
    //   category: "Database Tools",
    //   items: [
    //     { name: "MySQL", icon: faDatabase },
    //     { name: "MongoDB", icon: faDatabase },
    //     { name: "Oracle", icon: faDatabase },
    //     { name: "PostgreSQL", icon: faDatabase },
    //   ],
    // },
    
    {
      category: "Operating Systems",
      items: [
        { name: "Windows", icon: faWindows },
        { name: "Linux", icon: faLinux },
        { name: "Android", icon: faAndroid },
        { name: "iOS", icon: faApple },
      ],
    },
  ];

//   return (
//     <div className="skills-section" > {/* Background color set to black */}
//       <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
//       {skills.map((skillCategory) => (
//         <div key={skillCategory.category}>
//           <h3 className="text-2xl font-semibold text-white mt-3 mb-1">{skillCategory.category}</h3>
//           <ul className="list-none flex flex-wrap justify-center md:justify-start mb-3">
//             {skillCategory.items.map((skill) => (
//               <li key={skill.name} className="flex flex-col items-center m-4">
//                 <FontAwesomeIcon icon={skill.icon} style={iconStyles} />
//                 <span className="mt-2 text-white">{skill.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Skills;
// return (
//   <div className="skills-section" style={{ position: 'relative' }}>
//     <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
//     {skills.map((skillCategory) => (
//       <div key={skillCategory.category}>
//         <h3 className="text-2xl font-semibold text-white mt-3 mb-1">{skillCategory.category}</h3>
//         <ul className="list-none flex flex-wrap justify-center md:justify-start mb-3">
//           {skillCategory.items.map((skill) => (
//             <li key={skill.name} className="flex flex-col items-center m-4">
//               <FontAwesomeIcon icon={skill.icon} style={iconStyles} />
//               <span className="mt-2 text-white">{skill.name}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//     <div 
//       className="skills-usage"
//       style={{ 
//         position: 'absolute',
//         top: '50%', // You will need to adjust this
//         left: '76%', // You will need to adjust this
//         transform: 'translate(-50%, -50%)',
//         width: '80%', // Adjust width as per your requirement
//         padding: '20px',
//         // backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
//         color: '#fff',
//         // border: '1px solid #fff',
//         borderRadius: '10px',
//         zIndex: 10
//       }}
//     >
//       <h3 className="text-2xl font-semibold mb-3">What I do</h3>
//       <ul className="list-none">
//         <li className="mb-2">⚡ Design captivating user interfaces that blend beauty and functionality, creating memorable digital experiences.</li>
//         <li className="mb-2">⚡ Dive into data insights, driving decisions with impactful analysis and visualization techniques.</li>
//         <li className="mb-2">⚡ Explore the world of Progressive Web Applications (PWAs), crafting innovative solutions that push the boundaries of </li>
//         <li className="mb-2"> user interaction.</li>
//         <li className="mb-2">⚡ Seamlessly integrate data-driven insights into design decisions, ensuring every detail enhances user engagement.</li>
//         <li className="mb-2">⚡ Navigate technology's forefront with curiosity and adaptability, ready to shape the future of UI/UX and data-driven </li>
//         <li className="mb-2">  innovation while streamlining development with CI/CD pipelines.</li>
//       </ul>
//     </div>
//   </div>
// );
return (
  <div className="skills-section" style={{ position: 'relative' }}>
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '50%',
        borderLeft: '2px solid gold', // Change the line color to gold
        zIndex: 1,
      }}
    ></div>
    <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
    {skills.map((skillCategory) => (
      <div key={skillCategory.category}>
        <h3 className="text-2xl font-semibold text-white mt-3 mb-1">{skillCategory.category}</h3>
        <ul className="list-none flex flex-wrap justify-center md:justify-start mb-3">
          {skillCategory.items.map((skill) => (
            <li key={skill.name} className="flex flex-col items-center m-4">
              <FontAwesomeIcon icon={skill.icon} style={iconStyles} />
              <span className="mt-2 text-white">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
    {/* <div
      className="skills-usage"
      style={{
        position: 'absolute',
        top: '45%',
        left: '90%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        padding: '20px',
        color: '#fff',
        borderRadius: '10px',
        zIndex: 10,
      }}
    > */}
    <div className="skills-usage" style={{ 
          position: 'absolute',
          top: '45%',
          left: '90%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          padding: '20px',
          color: '#fff',
          borderRadius: '10px',
          zIndex: 10,
          textAlign: 'center', // Center align text
          // background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
          // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
        }}>
      <div
    className="flex justify-center mb-3"
    style={{
      position: 'relative',
      top: '-25px', // Adjust the top value to move the heading up
    }}
  >
    <h3 className="text-6xl font-semibold">What I do</h3>
  </div>
      <ul className="list-none">
        <li className="mb-5 text-xl">⚡ Design captivating user interfaces that blend beauty and functionality, creating memorable digital experiences.</li>
        <li className="mb-5 text-xl">⚡ Dive into data insights, driving decisions with impactful analysis and visualization techniques.</li>
        <li className="mb-5 text-xl">⚡ Explore the world of Progressive Web Applications (PWAs), crafting innovative solutions that push the  </li>
        <li className="mb-2 text-xl"> boundaries of user interaction.</li>
        <li className="mb-5 text-xl">⚡ Seamlessly integrate data-driven insights into design decisions, ensuring every detail enhances user engagement.</li>
        <li className="mb-5 text-xl">⚡ Navigate technology's forefront with curiosity and adaptability, ready to shape the future of UI/UX and  </li>
        <li className="mb-2 text-xl"> data-driven innovation while streamlining development with CI/CD pipelines.</li>
      </ul>
    </div>
  </div>
);
};

export default Skills;
