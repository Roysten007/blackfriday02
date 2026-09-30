"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/common/Icon";

export const OriginSection: React.FC = () => {
  const commitments = [
    {
      icon: "seedling",
      title: "100% Matière Première Brute & Active",
      badge: "Engagement n°1 (démo)",
      text: "Contrairement aux crèmes industrielles coupées à 80% d'eau et d'épaississants synthétiques, chaque pot SOLARA ne contient que l'actif pur végétal dans sa concentration vivante originelle.",
    },
    {
      icon: "hand-holding-heart",
      title: "Coopératives Féminines du Sahel au Prix Juste",
      badge: "Engagement n°2 (démo)",
      text: "Nous achetons directement les amandes de karité et les graines de moringa auprès de 180 productrices du Nord-Bénin avec un préfinancement garanti supérieur de +40% au cours moyen du marché.",
    },
    {
      icon: "certificate",
      title: "Zéro Raffinage Chimique & Flacons Verre",
      badge: "Engagement n°3 (démo)",
      text: "Aucun blanchiment au solvant, aucune désodorisation à haute température. Nos huiles sont pressées à froid et conditionnées dans des flacons en verre ambré protégeant les vitamines de la lumière.",
    },
  ];

  return (
    <section id="origine" className="py-20 lg:py-28 bg-solara-emerald text-white relative overflow-hidden">
      {/* Decorative leaf watermarks in background */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-solara-emerald-light/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-solara-emerald-dark/60 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-solara-orange">
            Le manifeste SOLARA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            La peau ne demande pas de miracles. Elle mérite du vrai.
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Notre démarche prend racine dans la savane ouest-africaine. Nous refusons les promesses d&apos;artifice :
            nous proposons des textures brutes dont la chimie végétale s&apos;accorde biologiquement avec l&apos;épiderme.
          </p>
        </div>

        {/* 2-Columns: Origin Story & Editorial Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-4">
              <span className="text-xs font-bold text-solara-orange tracking-widest uppercase block">
                Terroirs & Récolte
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                D&apos;où viennent nos matières premières ?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Les amandes de karité grandissent à l&apos;état sauvage dans les savanes protégées de l&apos;Atacora.
                Nos graines de moringa proviennent de plantations agroécologiques de Parakou, et notre argile verte est extraite
                des formations rocheuses de Dassa, séchée lentement au soleil tropical pour concentrer ses oligo-éléments vivants.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-4">
              <span className="text-xs font-bold text-solara-orange tracking-widest uppercase block">
                Savoir-Faire & Extraction
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Comment sont fabriqués nos soins ?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Pas d&apos;usines pétrochimiques. Le karité est trié à la main, concassé puis baratté à l&apos;eau tiède selon
                la méthode ancestrale des femmes Batombu. Le savon noir est cuit doucement aux cendres de cabosses de cacao
                et à l&apos;huile végétale noble. Une alchimie sans ajout d&apos;eau ni solvant.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative arch-image overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/5] w-full max-w-lg mx-auto">
              <Image
                src="/images/origine-artisanat.jpg"
                alt="Textures brutes et artisanat du karité"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solara-emerald-deep/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-1">
                <span className="font-serif text-base font-bold block">Cueillette sauvage & pressage artisanal</span>
                <span className="text-white/70 block">Bénin • Sahel • Forêts Côtières</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Concrete commitments cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="p-7 rounded-3xl bg-white text-solara-charcoal shadow-xl border border-white/80 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-solara-emerald-soft text-solara-emerald flex items-center justify-center text-lg">
                    <Icon name={c.icon} className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-solara-emerald-soft text-solara-emerald">
                    {c.badge}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-bold text-solara-emerald leading-snug">
                  {c.title}
                </h4>
                <p className="text-xs text-solara-muted leading-relaxed">
                  {c.text}
                </p>
              </div>

              <div className="pt-3 border-t border-solara-border flex items-center gap-2 text-xs font-semibold text-solara-emerald">
                <Icon name="circle-check" className="w-3.5 h-3.5 text-solara-orange" />
                <span>Traçabilité certifiée à 100%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
