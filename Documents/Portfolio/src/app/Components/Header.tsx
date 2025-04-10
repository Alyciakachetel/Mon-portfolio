"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ArrowDown } from "react-feather";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
  const greetings = [
    "Bonjour",
    "Hello",
    "Guten Tag",
    "Buongiorno",
    "Hola",
    "こんにちは",
    "안녕하세요",
    "مرحبًا",
  ];

  return (
    <div className="relative h-screen bg-cover bg-center flex flex-col header-bg font-mono">
      {/* Navbar */}
      <Navbar />

      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow px-8 md:px-16">
        {/* Texte d'accueil */}
        <div className="text-center mb-4 text-white md:text-left md:w-1/2 space-y-1">
          <h1 className="text-3xl md:text-4xl font-bold">
            <Typewriter
              words={greetings}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Je m&apos;appelle{" "}
            <span className="gradient-text font-bold">Alycia</span>
          </motion.h2>

          <motion.h3
            className="text-xl md:text-2xl font-medium"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Etudiante en L3 MIAGE{" "}
            <span className="gradient-text font-bold">
              passionnée par la gestion de projet et l&apos;optimisation des SI
            </span>
          </motion.h3>
        </div>

        {/* Image du profil */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center mt-4 md:mt-0"
        >
          <Image
            src="/images/Photo.jpg"
            alt="Profil"
            width={300}
            height={300}
            className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </div>

      {/* Flèche pour descendre */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-4 left-[calc(50%-16px)] justify-center items-center text-center transform -translate-x-1/2"
      >
        <Link href="#About">
          <ArrowDown color="white" size={60} />
        </Link>
      </motion.div>
    </div>
  );
}
