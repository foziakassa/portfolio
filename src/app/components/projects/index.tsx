// 'use client'
// import useSwr from "swr";
// import fetcher from '../../../shared/utils/fetcher';
// import { CollectionQuery } from "../../../models/collection-query.model";

// import { motion } from "framer-motion";
// import ProjectLayout from "./ProjectLayout";
// import About from "../../(sub)/about/page";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 1.5,
//     },
//   },
// };

// const ProjectList = () => {
//   const collection: CollectionQuery = {
      
//   };
//   const {
//     data,
//   } = useSwr(
//     { url: "/portal-portfolios/get-projects", params: collection },
//     fetcher
//   );
//   if(data){

  
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto
//        lg:px-16
//        space-y-6 md:space-y-8 flex flex-col items-center 
       
//         "
//     >
//       {data.data.map((item: any, index: number) => {
//         return(
//           // <div className="mt-36">
//            <ProjectLayout ProductData={item} key={index}  />

//           // </div>
//           );
//       })}
//     </motion.div>
//   );}
// };

// export default ProjectList;
'use client';

import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";
import About from "../../(sub)/about/page";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const mockData = {
  data: [
    

     {
      title: "LWIE",
      description: "A web application for to swap and sale what you have for what you need.",
      technologyUsed: "Next.js, TypeScript , Node.js ,PostgerSQL , Render",
      link: "https://lwie-platform-foziakassas-projects.vercel.app/",
      from: "2024-01-01",
    },
     {
      title: "Project One",
      description: "This is the first mock project description.",
      technologyUsed: "React, TypeScript",
      link: "https://example.com/project-one",
      from: "2024-01-01",
    },
     {
      title: "Project One",
      description: "This is the first mock project description.",
      technologyUsed: "React, TypeScript",
      link: "https://example.com/project-one",
      from: "2024-01-01",
    },
  ]
};

const ProjectList = () => {
  const data = mockData;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {data.data.map((item, index) => (
        <ProjectLayout ProductData={item} key={index} />
      ))}
    </motion.div>
  );
};

export default ProjectList;
