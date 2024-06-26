// import React from "react";

// const ProjectTag = ({ name, onClick, isSelected }) => {
//   const buttonStyles = isSelected
//     ? "text-white border-primary-500"
//     : "text-[#ADB7BE] border-slate-600 hover:border-white";
//   return (
//     <button
//       className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
//       onClick={() => onClick(name)}
//     >
//       {name}
//     </button>
//   );
// };

// export default ProjectTag;

import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500 bg-[#33353F]"
    : "text-[#ADB7BE] border-slate-600 hover:text-white hover:border-white";

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-colors duration-300 ease-in-out`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
