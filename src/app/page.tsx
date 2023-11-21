"use client";

import { Header } from "@/components/header";
import { OpeningHome } from "@/template/home/opening";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        className="w-[1920px] h-screen fixed bg-zinc-700 z-20 ]"
        initial={{
          right: "-1920px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <motion.div
        className="w-[1920px] h-screen fixed bg-zinc-800 z-20 ]"
        initial={{
          right: "-2200px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      <motion.div
        className="w-[1920px] h-screen fixed bg-zinc-900 z-20 ]"
        initial={{
          right: "-2500px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="w-screen h-screen fixed bg-zinc-950 z-10 ]"
        initial={{ opacity: 1, display: "block" }}
        animate={{ opacity: 0, display: "none" }}
        transition={{ duration: 1 }}
      ></motion.div>

      <Header />
      <OpeningHome />
    </>
  );
}
