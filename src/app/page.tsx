"use client";

import { Header } from "@/components/header";
import { OpeningHome } from "@/template/home/opening";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function Home() {
  return (
    <>
      <motion.div
        className="w-[1920px] h-screen fixed bg-zinc-700 z-50"
        initial={{
          right: "-1920px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <motion.div
        className="w-[1920px] h-screen fixed bg-zinc-800 z-50"
        initial={{
          right: "-2200px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      <motion.div
        className="w-[1920px] h-screen fixed bg-zinc-900 z-50"
        initial={{
          right: "-2500px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="w-screen h-screen fixed bg-zinc-950 z-40 "
        initial={{ opacity: 1, display: "block" }}
        animate={{ opacity: 0, display: "none" }}
        transition={{ duration: 1 }}
      ></motion.div>

      <Header />

      <div className="w-full h-[800px] flex items-center justify-around flex-wrap relative">
        <motion.span
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{
            opacity: 80,
          }}
          exit={{
            opacity: 0,
          }}
          className="w-[600px] h-[600px]  bg-zinc-900 rounded-[50%] blur-2xl absolute inset z-10"
        ></motion.span>
        <motion.div className="w-auto flex flex-col items-center z-20">
          <motion.p
            initial={{ opacity: 0, x: 300 }}
            transition={{ duration: 1.5 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            exit={{
              opacity: 0,
              x: 300,
              transition: {
                duration: 1,
              },
            }}
            className="text-8xl text-white font-bebas"
          >
            GUSTAVO
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 500 }}
            transition={{ duration: 2 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            exit={{
              opacity: 0,
              x: 500,
              transition: {
                duration: 1,
              },
            }}
            className="text-8xl text-white font-bebas tracking-wider"
          >
            CARDILHO
          </motion.p>
          <motion.span
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{
              opacity: 80,
            }}
            exit={{
              opacity: 0,
            }}
            className="w-full h-[2px] bg-white my-2"
          ></motion.span>
          <motion.p
            initial={{ opacity: 0, x: 700 }}
            transition={{ duration: 3 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            exit={{
              opacity: 0,
              x: 700,
              transition: {
                duration: 1,
              },
            }}
            className="text-8xl text-white font-bebas"
          >
            DEV BACK-END
          </motion.p>

          <div className="w-auto flex flex-row gap-4 text-lg">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 1 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
              exit={{
                opacity: 0,
                y: 50,
                transition: {
                  duration: 1,
                },
              }}
              className="text-white font-kanit border border-white rounded-lg px-4 py-2 transition-all hover:bg-zinc-800"
            >
              Tecnologias
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 1 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
              exit={{
                opacity: 0,
                y: 50,
                transition: {
                  duration: 1,
                },
              }}
              className="text-white font-kanit border border-white rounded-lg px-4 py-2 transition-all hover:bg-zinc-800"
            >
              Contatos
            </motion.button>
          </div>
        </motion.div>

        <motion.div className="absolute flex flex-col w-auto left-[200px] top-0 gap-4 items-center justify-center">
          <motion.span
            className="w-[3px]  bg-zinc-700 rounded-lg"
            initial={{
              opacity: 0,
              y: -100,
              height: 50,
            }}
            transition={{ duration: 1 }}
            animate={{
              opacity: 1,
              y: 0,
              height: 350,
            }}
          ></motion.span>
          <motion.div
            className="w-auto flex items-center justify-center relative"
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 0.5, delay: 1 }}
            animate={{
              opacity: 1,
            }}
          >
            <span className="absolute left-[6%] top-[25%] w-[30px] h-[30px] border-b border-white border-dashed opacity-70 blur-lg z-10"></span>
            <Code className="text-white my-4 z-20" size={25} />
          </motion.div>
          <motion.span
            className="w-[3px] h-[300px] bg-zinc-700 rounded-lg"
            initial={{
              opacity: 0,
              y: -25,
              height: 1,
            }}
            transition={{ duration: 1, delay: 1.5 }}
            animate={{
              opacity: 1,
              y: 0,
              height: 350,
            }}
          ></motion.span>
        </motion.div>
      </div>
    </>
  );
}
