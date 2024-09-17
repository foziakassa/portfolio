"use client";

import Image from "next/image";
import bg from "../../../../public/background/pppppppproject.jpeg";
import ProjectList from "../../components/projects";
import { projectsData } from "../../data";
import ProductPagination from '../ProductPagination/page'

import RenderModel from "../../components/RenderModel";
import dynamic from "next/dynamic";
import FireFliesBackground from "../../components/FireFliesBackground";

const Staff = dynamic(() => import("../../components/models/Staff"), {
  ssr: false,
});

// export const metadata = {
//   title: "Projects",
// }

export default function Home() {
  return (
    <>
      <FireFliesBackground />
      <Image
        src={bg}
        alt="nothing here "
        className="-z-50 fixed top-0 left-0 w-full 
        h-full object-cover object-center opacity-100"
        priority
        sizes="100vw"
      />

      {/* Background overlay with 50% opacity */}
      {/* <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div> */}

      <ProjectList />
      <ProductPagination/>


      <div
        className="flex items-center justify-center fixed top-16
       lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen"
      >
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
