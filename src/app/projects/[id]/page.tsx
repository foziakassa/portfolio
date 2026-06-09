import FireFliesBackground from "../../components/FireFliesBackground";
import Image from "next/image";
import bg from '../../../../public/background/R.jpeg'
import { notFound } from 'next/navigation';
import Link from "next/link";
import HomeBtn from "../../components/HomeBtn";
import ProjectBtn from "../../components/ProjectBtn";

// Mock data
const mockData = {
  data: [
    {
      id: 1,
      title: "emebet Job",
      description: "Contributed to the development of emebet, a job matching my role was as a mobile application developer and maintaining admin dashborsed, under Vintage Technologies.",
       skillgained :"In addition to facing real-world project problems and enhancing my mobile application development skills through this project, I gained new skills such as Ethiopia National ID integration, handling WebViews in a mobile app using a plugin, understanding how job-matching platforms work, gaining knowledge of Flutter Web applications, and implementing payment integration and Mandate concept." , 
      technologyUsed: "Flutter, React.js",
      link: "",

      // link: "",
      from: "2025-8-20",
      to: "2026-5-14",

    },
    {
      id: 2,
      title: "Linq transport",
      description: "At Vintage Technologies, I participated in Linq transport solution — a driver app, an internal admin dashboard, and a separate dashboard for transport companies. This project gave me end-to-end experience in both mobile and web platforms for a real-world logistics ecosystem",
      technologyUsed: "Flutter, React.js",
       skillgained :"In addition to facing real-world project problems and enhancing my mobile application development skills through this project, I gained new skills such as Ethiopia National ID integration, handling WebViews in a mobile app using a plugin, understanding how job-matching platforms work, gaining knowledge of Flutter Web applications, and implementing payment integration and Mandate concept." , 


      link: "",
     from: "2025-8-20",
      to: "2026-5-14",
    },
    {
      id: 3,
      title: "kabba transport",
      description: "At Vintage Technologies, I participated in building the Kabba transport system — a passanger app and an administrative dashboard. This project gave me hands-on experience in developing solutions for a real-world transport platform.",
       skillgained :"In addition to facing real-world project problems and enhancing my mobile application development skills through this project, I gained new skills such as Ethiopia National ID integration, handling WebViews in a mobile app using a plugin, understanding how job-matching platforms work, gaining knowledge of Flutter Web applications, and implementing payment integration and Mandate concept." , 

      technologyUsed: "Flutter, React.js",
      link: "",
     from: "2025-8-20",
      to: "2026-5-14",
    },
    {
      id: 4,
      title: "tuteapp",
      description: "I contributed to tuteapp, an educational social media app under Vintage Technologies, where I helped build features for user interaction, content sharing, and community learning — bridging the gap between education and social connectivity.",
       skillgained :"In addition to facing real-world project problems and enhancing my mobile application development skills through this project, I gained new skills such as Ethiopia National ID integration, handling WebViews in a mobile app using a plugin, understanding how job-matching platforms work, gaining knowledge of Flutter Web applications, and implementing payment integration and Mandate concept." , 

      technologyUsed: "Flutter",
      link: "",
      from: "2025-8-20",
      to: "2026-5-14",
    },
   
    {
      id: 5,
      title: "Comercial Website",
      description: "I built a commercial website for a local business to showcase their products and services with a responsive design, product galleries, and easy customer access to business information",
      technologyUsed: "Next.js, Node.js",
       skillgained :"In addition to facing real-world project problems and enhancing my mobile application development skills through this project, I gained new skills such as Ethiopia National ID integration, handling WebViews in a mobile app using a plugin, understanding how job-matching platforms work, gaining knowledge of Flutter Web applications, and implementing payment integration and Mandate concept." , 

      link: "https://commercial-advertisement-web.vercel.app/",
      from: "2025-9-10",
    },
    {
      id: 6,
      title: "LWIE",
      description: "We built a web-based platform (ልዋጭ) that allows users to swap, sell, and post products and services — enabling people to exchange what they have for what they need through listings, search filters, and user interaction tools.",
      technologyUsed: "Next.js, Node.js",
      link: "https://lwie-platform-foziakassas-projects.vercel.app/",
       skillgained :"In addition to facing real-world project problems and enhancing my mobile application development skills through this project, I gained new skills such as Ethiopia National ID integration, handling WebViews in a mobile app using a plugin, understanding how job-matching platforms work, gaining knowledge of Flutter Web applications, and implementing payment integration and Mandate concept." , 

      from: "2024-3-10",
    },
    {
      id: 7,
      title: "LWIE Dashboard",
      description: "We built a user-friendly dashboard to manage and track swaps, sales, charity, and advertisements on LWIE — providing centralized control over listings, transactions, donations, and ad performance",
      technologyUsed: "Next.js, Node.js",
      link: "https://lwiedashboard.vercel.app/login",
       skillgained :"In addition to facing real-world project problems and enhancing my mobile application development skills through this project, I gained new skills such as Ethiopia National ID integration, handling WebViews in a mobile app using a plugin, understanding how job-matching platforms work, gaining knowledge of Flutter Web applications, and implementing payment integration and Mandate concept." , 

      from: "2024-03-01",
    },
    {
      id: 8,
      title: "EMASW",
      description: "I built a multilingual web application for electronics maintenance and sales — supporting Amharic, Tigrigna, Afan Oromo, and Somali — featuring service requests, product listings, and repair tracking for broader accessibility across Ethiopia.",
      technologyUsed: "Next.js, Node.js, i18n",
      link: "https://github.com/foziakassa/electronics-maintainance-andsala-website.git",
       skillgained :"In addition to facing real-world project problems and enhancing my mobile application development skills through this project, I gained new skills such as Ethiopia National ID integration, handling WebViews in a mobile app using a plugin, understanding how job-matching platforms work, gaining knowledge of Flutter Web applications, and implementing payment integration and Mandate concept." , 

      from: "2024-01-01",
    },
    {
      id: 9,
      title: "Developer portfolio",
      description: "A clean, formal developer portfolio template designed to showcase technical skills, work experience, and client projects — featuring organized sections for project highlights, tech stacks, and professional contact information.",
      technologyUsed: "Next, TypeScript",
      link: "https://portio-foziakassas-projects.vercel.app/",
       skillgained :"In addition to facing real-world project problems and enhancing my mobile application development skills through this project, I gained new skills such as Ethiopia National ID integration, handling WebViews in a mobile app using a plugin, understanding how job-matching platforms work, gaining knowledge of Flutter Web applications, and implementing payment integration and Mandate concept." , 

      from: "2024-01-01",
    },
   
    {
      id: 10,
      title: "Ethiopian Calander",
      description: "I built a mobile app for the Ethiopian calendar — featuring date conversion between Ethiopian and Gregorian calendars, holiday listings, and event reminders.",
      technologyUsed: "Flutter",
      link: "https://github.com/foziakassa/ethiopian-calander.git",
       skillgained :"In addition to facing real-world project problems and enhancing my mobile application development skills through this project, I gained new skills such as Ethiopia National ID integration, handling WebViews in a mobile app using a plugin, understanding how job-matching platforms work, gaining knowledge of Flutter Web applications, and implementing payment integration and Mandate concept." , 

      from: "2024-01-01",
    },
    {
      id: 11,
      title: "Employee Management",
      description: "I built a web-based hierarchical tree view for an employee management system — displaying organizational structure with expandable nodes, employee details, and reporting relationships for easy navigation.",
      technologyUsed: "Angular",
      link: "https://github.com/foziakassa/hierarchical-tree-view.git",
       skillgained :"In addition to facing real-world project problems and enhancing my mobile application development skills through this project, I gained new skills such as Ethiopia National ID integration, handling WebViews in a mobile app using a plugin, understanding how job-matching platforms work, gaining knowledge of Flutter Web applications, and implementing payment integration and Mandate concept." , 

      from: "2024-01-01",
    },
  ]
};

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  const projectId = parseInt(params.id);
  const project = mockData.data.find(p => p.id === projectId);

  // Show 404 if project not found
  if (!project) {
    notFound();
  }

  return (
    <>
      <FireFliesBackground />
      <Image
        src={bg}
        alt="background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-100"
        priority
        sizes="100vw"
      />
      <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-10">
            <ProjectBtn />
             <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:mx-0 md:mx-36">
        <div className=" custom-bg
        border border-accent/30 backdrop-blur-md rounded-2xl p-8  ">
         

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>

          {/* Technologies */}
          <div className="mb-6">
            <span className="inline-block bg-amber-600/30 backdrop-blur-sm border border-amber-500 rounded-full px-4 py-1.5 text-sm font-medium text-amber-300">
              {project.technologyUsed}
            </span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Description</h2>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
           <div className="mb-6">
           
            <p className="text-gray-300 leading-relaxed">
              {project?.skillgained}
            </p>
          </div>
           {/* my role  */}
           {/* <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">My engagement</h2>
            <p className="text-gray-300 leading-relaxed">
              {project?.myrole}
            </p>
          </div> */}

          {/* Date */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Date</h2>
            <p className="text-gray-300">
              {new Date(project.from).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              {project?.to  != null && (
                <>
               <span className="text-amber-300" > to </span>
               {new Date(project?.to).toLocaleDateString('en-US', {
                
                year: 'numeric',
                month: 'long',
                day: 'numeric'

              })}
              </>
            )
            }
            </p>
            
          </div>

          {/* Live Link */}
          {project.link ?(
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Project Linq</h2>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                {project.link}
              </a>
            </div>
          ) :
          (
         <div>
              {/* <h2 className="text-2xl font-semibold text-white mb-2">Project Link</h2> */}
              <p 
             
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-200 "
              >
              App are live in appstore and playstore
              </p>
            </div>
          )
        }
        </div>
      </div>
          </main>
      
      {/* Content */}
     
    </>
  );
}