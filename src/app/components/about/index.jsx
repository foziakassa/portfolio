import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Education from "./education";
import {Expriance} from "./experiance";
import { Expriance2 } from "./experiance";
import Tech from "./tech";

const AboutDetails = () => {
  return (
    <section className="py-20  w-full ">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2
            className=" text-xl md:text-2xl text-left w-full capitalize
           text-accent font-semibold "
          >
            Front-end Developer , Graphics Designer
          </h2>
          <p className="font-light text-xl sm:text-sm md:text-lg text-gray-200 ">
            My journey in web development is driven by a variety of powerful tools and languages, with JavaScript at the core of my work. I utilize frameworks like React.js, Next.js, and Angular to build seamless websites that connect users across the digital landscape.
          </p>
          <p className="font-light text-xl sm:text-sm md:text-lg text-gray-200">
            I focus on creating fast, secure, and dynamic web experiences, while my design skills ensure that each project is both functional and visually appealing. I am always eager to explore new technologies and enhance my skills to help shape the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        {/* <ItemLayout className={'col-span-full text-accent '}>
        <p className="font-semibold w-full text-center justify-center h-0.5
         text-2xl sm:text-3xl">
          Experience
           
          </p>
          
        </ItemLayout> */}

      

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
        <Expriance/>
          
        </ItemLayout>

        <ItemLayout
         className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
         >
           
           <Expriance2/>
        </ItemLayout>
          <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
        <Education/>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=react,next,css,docker,figma,git,github,graphql,html,js,jquery,mongodb,mysql,nextjs,nodejs,npm,postgres,tailwind,threejs,vscode,dart,java,angular,flutter`}
            alt="fozia"
            loading="lazy"
          />
        </ItemLayout>
        {/* <ItemLayout className={"col-span-full"}>
          <Tech/>
        </ItemLayout> */}


        <ItemLayout className={"col-span-full md:col-span-6 flex-col "}>
        <p className="font-semibold w-full text-accent text-2xl sm:text-2xl">

        most preferd framework</p>
        <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=next,react,postgresql,mysql,figma,nextjs,nodejs,tailwind,angular,flutter`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;
