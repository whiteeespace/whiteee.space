"use client";

import Blob from "@/components/Blob";
import { motion } from "framer-motion";
import { useEffect } from "react";

import styles from "./page.module.scss";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty("--x", e.clientX + "px");
      document.body.style.setProperty("--y", e.clientY + "px");
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "linear", duration: 2 }}
          className={styles.title}
        >
          whiteee space
        </motion.h1>
      </div>
      <motion.a
        whileHover={{ scale: 1.2 }}
        transition={{ ease: "linear", duration: 0.5 }}
        href={"mailto:info@whiteee.space&subject=Saying hi!"}
        className={styles.email}
      >
        info@whiteee.space
      </motion.a>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 1, delay: 0.5 }}
        className={styles.pastWorks}
      >
        [works]
      </motion.p>
    </div>
  );
}
