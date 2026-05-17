import {
    Github,
    Home,
    Linkedin,
    NotebookText,
    Palette,
    Phone,
    Twitter,
    Mail,
    User,
  } from "lucide-react";
  import Link from "next/link";
  import React, { useState, useEffect } from "react";
  import ResponsiveComponent from "../ResponsiveComponent";
  import clsx from "clsx";
  import { motion } from "framer-motion";
  
  const getIcon = (icon) => {
    switch (icon) {
      case "home":
        return <Home className="w-full h-auto " strokeWidth={3.5} />;
      case "about":
        return <User className="w-full h-auto" strokeWidth={1.5} />;
      case "projects":
        return <Palette className="w-full h-auto" strokeWidth={1.5} />;
      case "contact":
        return <Phone className="w-full h-auto" strokeWidth={1.5} />;
      case "github":
        return <Github className="w-full h-auto" strokeWidth={1.5} />;
      case "linkedin":
        return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
      case "mail":
        return <Mail className="w-full h-auto" strokeWidth={1.5} />;
      case "resume":
        return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
  
      default:
        return <Home className="w-full h-auto" strokeWidth={1.5} />;
    }
  };
  
  const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };
  
  const NavLink = motion(Link);
  
  const NavButton = ({
    x,
    y,
    label,
    link,
    icon,
    newTab,
    labelDirection = "right",
    sequenceIndex = 0,
    showLabels = false,
  }) => {
    const [showLabel, setShowLabel] = useState(false);
  
    useEffect(() => {
      if (showLabels) {
        // Show labels in sequence with delay based on index
        const timer = setTimeout(() => {
          setShowLabel(true);
        }, sequenceIndex * 200); // 200ms delay between each label
        return () => clearTimeout(timer);
      } else {
        setShowLabel(false);
      }
    }, [showLabels, sequenceIndex]);
  
    return (
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            // for large size 
            <div
              className="absolute cursor-pointer z-50"
              style={{ transform: `translate(${x}, ${y})` }}
            >
              <NavLink
                variants={item}
                href={link}
                target={newTab ? "_blank" : "_self"}
                className="text-foreground rounded-full flex 
                items-center justify-center
                bg-accent/40 border border-accent/100
                border-solid backdrop:blur-[6px]
                shadow-glass-sm group"
                aria-label={label}
                name={label}
                prefetch={false}
                scroll={false}
              >
                <span className="relative w-14 h-14 p-4 
                animate-spin-slow-reverse group-hover:pause
                text-white hover:text-white">
                  {getIcon(icon)}
  
                  <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
  
                  {/* Label that shows on hover OR when showLabel is true */}
                  <span className={clsx(
                    "absolute px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap transition-opacity duration-300",
                    showLabel ? "opacity-100 block" : "opacity-0 hidden group-hover:opacity-100 group-hover:block"
                  )}>
                    {label}
                  </span>
                </span>
              </NavLink>
            </div>
          ) : (
            // for small size
            <div className="w-fit cursor-pointer z-50">
              <NavLink
                variants={item}
                href={link}
                target={newTab ? "_blank" : "_self"}
                className="text-foreground rounded-full 
                flex items-center justify-center group"
                aria-label={label}
                name={label}
                prefetch={false}
                scroll={false}
              >
                <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                  {getIcon(icon)}
  
                  <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
  
                  {/* Label that shows on hover OR when showLabel is true */}
                  <span
                    className={clsx(
                      "absolute px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap transition-opacity duration-300",
                      labelDirection === "left" ? "right-full left-auto" : "",
                      showLabel ? "opacity-100 block" : "opacity-0 hidden group-hover:opacity-100 group-hover:block"
                    )}
                  >
                    {label}
                  </span>
                </span>
              </NavLink>
            </div>
          );
        }}
      </ResponsiveComponent>
    );
  };
  
  export default NavButton;