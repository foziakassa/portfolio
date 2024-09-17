
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceData {
  // [x: string]: ReactNode;

  title: string;
  description: string;
  
}

interface ServicesProps {
  serviceData: ServiceData;
  onClick: () => void;
  className?: string;
}

const Card = ({ serviceData, onClick }: ServicesProps) => {
  return (
    <motion.div
      className="flex flex-col 
       hover:bg-accent
       bg-accent/20 
       active-bg-
        justify-center gap-20 overflow-hidden 
       shadow-lg rounded-md
       hover:translate-x-1
         hover:shadow-lg transition w-80 h-14"
      onClick={onClick}
    >
      <div className="p-2 space-y-2">
        <h3 className="text-lg font-semibold text-white
         hover:text-black
       
        ">{serviceData.title}</h3>
      </div>
    </motion.div>
  );
};

export default Card;