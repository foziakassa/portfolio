import FireFliesBackground from "../../components/FireFliesBackground";
import Image from "next/image";
import bg from '../../../../public/background/R.jpeg'
import { notFound } from 'next/navigation';
import Link from "next/link";

// Mock data
const mockData = {
  data: [
    {
      id: 1,
      title: "emebet Job",
      description: "Contributed to the development of Emebet, a job matching mobile app and dashboard, under Vintage Technologies.",
      technologyUsed: "Flutter, React.js",
      myrole : " mobile application developer , and engage in admin dashboard development  (app are live in appstore and playstore) ", 
      link: "",
      from: "2025-8-20",
      to: "2026-5-14",

    },
    {
      id: 2,
      title: "Linq transport",
      description: "participate in Linq driver app , admin dashboard and transport company dashboard under Vintage Technologies.",
      technologyUsed: "Flutter, React.js",
      myrole : " mobile application developer , and engage in admin dashboard  (app are live in appstore and playstore)", 

      link: "",
     from: "2025-8-20",
      to: "2026-5-14",
    },
    {
      id: 3,
      title: "kabba transport",
      description: "participate in kabba passanger app and dashboard under Vintage Technologies.",
      myrole : " mobile application developer , and engage in admin dashboard  (app are live in appstore and playstore)", 

      technologyUsed: "Flutter, React.js",
      link: "",
     from: "2025-8-20",
      to: "2026-5-14",
    },
    {
      id: 4,
      title: "tuteapp",
      description: "participate in tuteapp educational social media app under Vintage Technologies.",
      myrole : " mobile application developer (app are live in appstore and playstore) ", 

      technologyUsed: "Flutter",
      link: "",
      from: "2025-8-20",
      to: "2026-5-14",
    },
    {
      id: 5,
      title: "Maraki",
      description: "participate in Maraki dating media app under Vintage Technologies.",
      technologyUsed: "Flutter",
      myrole : " mobile application developer , and engage in admin dashboard  (app are live in appstore and playstore)", 

      link: "",
      from: "2025-8-20",
      to: "2026-5-14",
    },
    {
      id: 6,
      title: "Comercial Website",
      description: "A commercial website for a local business to showcase their products and services.",
      technologyUsed: "Next.js, Node.js",
      link: "https://commercial-advertisement-web.vercel.app/",
      from: "2025-9-10",
    },
    {
      id: 7,
      title: "LWIE",
      description: "A web-based platform for to swap and sale what you have for what you need.",
      technologyUsed: "Next.js, Node.js",
      link: "https://lwie-platform-foziakassas-projects.vercel.app/",
      from: "2024-3-10",
    },
    {
      id: 8,
      title: "LWIE Dashboard",
      description: "A user-friendly dashboard to manage and track swaps, sales, charity and advertisment on LWIE.",
      technologyUsed: "Next.js, Node.js",
      link: "https://lwiedashboard.vercel.app/login",
      from: "2024-01-01",
    },
    {
      id: 9,
      title: "EMASW",
      description: "A multilingual web application for electronics maintainance and sales",
      technologyUsed: "Next.js, Node.js, i18n",
      link: "https://lwiedashboard-foziakassas-projects.vercel.app/",
      from: "2024-01-01",
    },
    {
      id: 10,
      title: "Developer portfolio",
      description: "Profetional developer portfolip templet.",
      technologyUsed: "Next, TypeScript",
      link: "https://portio-foziakassas-projects.vercel.app/",
      from: "2024-01-01",
    },
    {
      id: 11,
      title: "Currency COnverter",
      description: "mobile app for currency conversion.",
      technologyUsed: "Flutter",
      link: "https://github.com/foziakassa/curruncy-converter.git",
      from: "2024-01-01",
    },
    {
      id: 12,
      title: "Ethiopian Calander",
      description: "moblie app for ethiopian calander.",
      technologyUsed: "Flutter",
      link: "https://github.com/foziakassa/ethiopian-calander.git",
      from: "2024-01-01",
    },
    {
      id: 13,
      title: "Employee Management",
      description: "A web-based hierarchical tree view for an employee management system",
      technologyUsed: "Angular",
      link: "https://github.com/foziakassa/hierarchical-tree-view.git",
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
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className=" custom-bg
        border border-accent/30 backdrop-blur-md rounded-2xl p-8  ">
          {/* Back Button */}
          <Link
            href="/projects" 
            className="inline-block mb-6 text-amber-400 hover:text-amber-300 transition-colors"
          >
            ← Back to Projects
          </Link>

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
           {/* my role  */}
           <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">My engagement</h2>
            <p className="text-gray-300 leading-relaxed">
              {project?.myrole}
            </p>
          </div>

          {/* Date */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Date</h2>
            <p className="text-gray-300">
              {new Date(project.from).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
               <span className="text-amber-300" > to </span>
               {new Date(project?.to).toLocaleDateString('en-US', {
                
                year: 'numeric',
                month: 'long',
                day: 'numeric'

              })}
            </p>
            
          </div>

          {/* Live Link */}
          {project.link && (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Live Project</h2>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                {project.link}
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}