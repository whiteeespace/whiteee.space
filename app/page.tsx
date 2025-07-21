"use client";

import Blob from "@/components/Blob";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Popover, Tooltip } from "@ark-ui/react";

import styles from "./page.module.scss";

export default function Home() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty("--x", e.clientX + "px");
      document.body.style.setProperty("--y", e.clientY + "px");
    };

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
    };

    checkMobile();
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkMobile);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleTitleClick = () => {
    if (isMobile) {
      setIsTooltipOpen(!isTooltipOpen);
    }
  };

  // Close tooltip on outside click for mobile
  useEffect(() => {
    if (!isMobile || !isTooltipOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-scope="tooltip"]')) {
        setIsTooltipOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobile, isTooltipOpen]);

  return (
    <div className={styles.container}>
      <Blob className={styles.logo}>whiteee space</Blob>
      <div className={styles.textContainer}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "linear", duration: 1, delay: 0.5 }}
          className={styles.subtitle}
        >
          a design space based in montreal
        </motion.p>
        <Tooltip.Root
          open={isMobile ? isTooltipOpen : undefined}
          openDelay={isMobile ? 0 : 200}
          closeDelay={isMobile ? 0 : 100}
          positioning={{ placement: "bottom" }}
        >
          <Tooltip.Trigger asChild>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "linear", duration: 2 }}
              className={styles.title}
              onClick={handleTitleClick}
            >
              whiteee space
            </motion.h1>
          </Tooltip.Trigger>
          <Tooltip.Positioner>
            <Tooltip.Content className={styles.tooltipContent}>
              websites shouldn&apos;t all look the same. a space for fully custom design + web
              development.
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Tooltip.Root>
      </div>
      <motion.a
        whileHover={{ scale: 1.1 }}
        transition={{ ease: "linear", duration: 0.5 }}
        href={"mailto:info@whiteee.space&subject=Saying hi!"}
        className={styles.email}
      >
        info@whiteee.space
      </motion.a>
      <Popover.Root positioning={{ placement: "bottom-start", gutter: 18 }}>
        <motion.div>
          <Popover.Trigger asChild>
            <p className={styles.pastWorks} tabIndex={0}>
              [works]
            </p>
          </Popover.Trigger>
        </motion.div>
        <Popover.Positioner className={styles.popoverPositioner}>
          <Popover.Content className={styles.popoverContent}>
            <div className={styles.popoverList}>
              <a
                href="https://sageismism.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.popoverLink}
              >
                sageismism.com
              </a>
              <a
                href="https://rbbmanufacturing.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.popoverLink}
              >
                rbbmanufacturing.com
              </a>
              <a
                href="https://thisisnotyourtype.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.popoverLink}
              >
                thisisnotyourtype.com
              </a>
              <a
                href="https://mikafleur.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.popoverLink}
              >
                mikafleur.com
              </a>
              <a
                href="https://clubtheos.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.popoverLink}
              >
                clubtheos.com
              </a>
            </div>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    </div>
  );
}
