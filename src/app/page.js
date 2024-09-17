import Image from "next/image";
import bg from "../../public/background/home-bg.jpeg";
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
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-100"
      />

      <div className="w-full h-screen">
        <FireFliesBackground/>
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      
      </div>
    </main>
  );
}