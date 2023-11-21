"use client";

import Logo from "@/assets/logosemfundobranca.png";
import { AppWindow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header className="w-full flex items-center justify-around p-4">
      <div>
        <Image src={Logo} alt="Logo" className="w-[45px] h-[45px]" />
      </div>
      <div className="w-auto flex items-center gap-6">
        <button className="text-white text-2xl font-kanit">Inicial</button>
        <button className="text-white text-2xl font-kanit">Projetos</button>
        <Link
          href={"/terminal"}
          className="w-auto flex flex-row gap-2 text-white font-kanit items-center border border-white rounded-lg px-4 py-1"
        >
          <AppWindow size={20} />
          <p className="text-white text-2xl font-kanit">Terminal</p>
        </Link>
      </div>
    </motion.header>
  );
};
