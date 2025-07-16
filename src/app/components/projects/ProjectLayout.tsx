import { motion } from "framer-motion";
import { link } from "fs";
import Link from "next/link";
import ProductPagination from '../../(sub)/ProductPagination/page'
import { projectsData } from "../../data";
// import { projectsData } from "../../data";

interface ProductProps {
  ProductData: {
    description: string;
    title: string;
    technologyUsed?:string;
    link:string;
    from:string;
  };
}
const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = (props: ProductProps) => {
  const { ProductData } = props;

  return (
    <ProjectLink
      variants={item}
      // href={ProductData?.link}
      href={ProductData.link}
      target={"_blank"}
      className=" text-sm md:text-base flex  items-center 
      justify-between w-full relative rounded-lg
       overflow-hidden p-4 md:p-6 
       customm-bg custom-bg
        border border-accent/30 "
    >
      {/*  */}
      <div className="flex items-center justify-center space-x-2 
      ">
        {/* <h2 className="text-gray-50 text-xl ">{ProductData?.title}</h2> */}
  <h2 className="text-gray-50 text-xl xm:text-yellow-500 xm:text-sm sm:text-yellow-500 sm:text-sm">
  {ProductData?.title}
</h2>

        <div className="gap-3 text-sm">
           <p className="text-gray-200 text-muted sm:text-foreground xm:text-foreground">
          {ProductData?.description}</p>
          {/* <p className="text-accent">{ProductData?.technologyUsed}</p> */}
        </div>
       
      </div>
      {/* <div className="self-end flex-1 mx-2 mb-1 bg-transparent 
      border-b border-dashed border-muted" /> */}
      <p className="text-muted sm:text-foreground ">
        {/* {new Date(ProductData?.from).toDateString()} */}
        {ProductData?.technologyUsed}
        {/*  */}
      </p>

    </ProjectLink>
  );
};

export default ProjectLayout;