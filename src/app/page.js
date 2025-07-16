import Image from "next/image";
// import bg from "../../public/background/home-bg.jpeg";
import bg from "../../public/background/R.jpeg";

import RenderModel from "../app/components/RenderModel";
// import Wizard from "@/app/components/models/Wizard";
import Navigation from '../app/components/navigation';

import dynamic from "next/dynamic";
import FireFliesBackground from "./components/FireFliesBackground";
const Wizard = dynamic(() => import('../app/components/models/Wizard'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative ">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-100"
      />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <h1 className="font-bold  text-6xl xs:text-7xl
           sm:text-8xl  lg:text-9xl text-accent">
            FoziaK
          </h1>
        
      </div>
    

      <div
        className="-z-50 w-full h-full object-cover object-center opacity-100"

      >
      </div>

      <div className="w-full h-screen">
        <FireFliesBackground />

        <Navigation />
        {/* <RenderModel>
          <Wizard />
        </RenderModel> */}

      </div>
    </main>
  );
}