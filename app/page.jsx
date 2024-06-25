"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        mainpage
      </motion.div>
    </main>
  );
}
