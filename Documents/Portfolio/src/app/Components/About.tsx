"use client";

import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import {
  Camera,
  ClipboardPenLine,
  Globe,
  LaptopMinimalCheck,
  MessageCircle,
  Smile,
} from "lucide-react";
import React from "react";

const scrollToAbout = () => {
  const section = document.getElementById("About");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function About() {
  return (
    <div
      id="About"
      className="relative flex flex-col items-center justify-center min-h-screen bg-center font-mono"
    >
      {/* Titre principal */}
      <h1
        className="text-5xl mt-10 font-extrabold text-center relative inline-block mb-4 gradient-text"
        onMouseEnter={scrollToAbout}
      >
        Mon Portfolio
      </h1>
      <h2 className="mb-10 text-2xl font-bold text-white animate-bounce text-rose-300">
        À propos de moi
      </h2>

      {/* Contenu des cadres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full mb-5 ">
        {/* Premier cadre */}
        <div className="max-w-lg flex justify-center mx-2">
          <NeonGradientCard className=" items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              <div className="flex justify-center my-4">
                <MessageCircle
                  size={40}
                  className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                />
              </div>
              <p className="text-lg font-mono bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-medium text-justify">
                Actuellement en Licence 3 MIAGE, je me prépare à intégrer un
                Master MIAGE en apprentissage. Mes études m’ont permis de
                renforcer mes compétences en informatique et gestion, et je suis
                impatiente de mettre ces connaissances en pratique dans un
                environnement professionnel. <br />
                <div className="flex justify-center my-4">
                  <Globe
                    size={40}
                    className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                  />
                </div>
                <br />
                Passionnée par les nouvelles technologies, le traitement des big
                data, loptimisation des systèmes d&apos;information et
                l&apos;intelligence artificielle, je suis à la recherche
                d&apos;une alternance de 24 mois en tant que chef de projet IT
                dans le cadre de mon Master MIAGE. Je suis motivée à mettre mes
                compétences au service d’un projet ambitieux et à contribuer à
                l&apos;innovation technologique en entreprise.
                <br />
                <div className="flex justify-center my-4">
                  <ClipboardPenLine
                    size={40}
                    className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                  />
                </div>
                <br />
                Le Master MIAGE est une formation qui combine informatique et
                gestion des entreprises. Il permet dacquérir des compétences en
                gestion de projet, développement de solutions logicielles,
                analyse de données (Big Data), optimisation des systèmes
                d&apos;information, et intelligence artificielle. Ce programme
                prépare à des rôles stratégiques, comme chef de projet IT, en
                fournissant une expertise technique tout en intégrant des
                aspects de gestion et de leadership pour répondre aux défis
                technologiques des entreprises.
              </p>
            </span>
          </NeonGradientCard>
        </div>

        {/* Deuxième cadre */}
        <div className=" max-w-lg flex justify-center mx-2">
          <NeonGradientCard className=" items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              <div className="flex justify-center my-4">
                <LaptopMinimalCheck
                  size={40}
                  className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                />
              </div>
              <p className="text-lg font-mono bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-medium text-justify">
                En plus de mes études en informatique, je travaille à temps
                partiel en tant que fleuriste. Cette expérience m&apos;a permis
                de développer des compétences en gestion, créativité et relation
                client, que j&apos;intègre au quotidien dans mes projets
                universitaire.
                <br />
                <div className="flex justify-center my-4">
                  <Camera
                    size={40}
                    className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                  />
                </div>
                <br />
                Enfin, en plus de ma passion pour le secteur IT, je suis
                également passionnée par la musique, en particulier le chant,
                qui me permet de transmettre des émotions au public à travers
                les notes. Mes loisirs principaux incluent la lecture de romans
                et la découverte de nouvelles cultures en voyageant.
                <br />
                <div className="flex justify-center my-4">
                  <Smile
                    size={40}
                    className="text-pink-500 drop-shadow-[0_0_10px_rgb(255,105,180)]"
                  />
                </div>
                <br />
                Aujourd’hui, je suis pleinement épanouie dans ma formation et
                prête à relever des défis en tant que chef de projet IT en
                alternance. Mon objectif est de piloter des projets innovants,
                coordonner des équipes et optimiser des solutions tout en
                continuant d&apos;apprendre et d&apos;évoluer dans ce domaine
                passionnant.
              </p>
            </span>
          </NeonGradientCard>
        </div>
      </div>
    </div>
  );
}
