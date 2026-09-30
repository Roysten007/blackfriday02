"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/common/Icon";
import { useLanguage } from "@/context/LanguageContext";

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const titleLines = [
    t.heroTitle1,
    t.heroTitle2
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-white">
      {/* Organic morphing background blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-solara-emerald-soft/50 rounded-full blur-3xl -z-10 animate-blob pointer-events-none" />
      <div className="absolute bottom-6 left-1/4 w-80 h-80 bg-solara-orange-light/50 rounded-full blur-3xl -z-10 animate-blob pointer-events-none" style={{ animationDelay: "4s" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8">
          {/* Centered Pill Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-solara-emerald-soft border border-solara-emerald/20 text-xs sm:text-sm font-semibold text-solara-emerald"
          >
            <span className="w-2 h-2 rounded-full bg-solara-orange animate-ping" />
            <span>{t.heroPill}</span>
          </motion.div>

          {/* Centered Main Headline with Masked Word Reveal */}
          <div className="space-y-1">
            {titleLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.h1
                  key={line}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: idx * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-solara-emerald tracking-tight leading-[1.14]"
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Centered concrete subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base sm:text-lg text-solara-muted max-w-2xl mx-auto font-normal leading-relaxed"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* Centered Trust Checkmarks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-solara-charcoal font-medium"
          >
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-solara-emerald text-white flex items-center justify-center text-[10px]">
                <Icon name="check" className="w-2.5 h-2.5" />
              </span>
              <span>{t.heroBadge1}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-solara-emerald text-white flex items-center justify-center text-[10px]">
                <Icon name="check" className="w-2.5 h-2.5" />
              </span>
              <span>{t.heroBadge2}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-solara-emerald text-white flex items-center justify-center text-[10px]">
                <Icon name="check" className="w-2.5 h-2.5" />
              </span>
              <span>{t.heroBadge3}</span>
            </div>
          </motion.div>

          {/* Centered Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a
              href="#produits"
              className="w-full sm:w-auto py-4 px-8 rounded-full bg-solara-orange hover:bg-solara-orange-hover text-white font-semibold text-sm sm:text-base text-center shadow-lg shadow-solara-orange/30 hover:shadow-xl hover:shadow-solara-orange/40 transition-all transform active:scale-98 flex items-center justify-center gap-3"
            >
              <span>{t.heroCtaOffers}</span>
              <Icon name="arrow-right" className="w-4 h-4" />
            </a>

            <a
              href="#coffret-sur-mesure"
              className="w-full sm:w-auto py-4 px-8 rounded-full bg-white hover:bg-solara-emerald-soft text-solara-emerald font-semibold text-sm sm:text-base text-center border-2 border-solara-emerald/25 hover:border-solara-emerald transition-all flex items-center justify-center gap-2"
            >
              <span>{t.heroCtaBox}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-solara-orange/15 text-solara-orange font-bold">
                -15%
              </span>
            </a>
          </motion.div>

          {/* Discreet Reassurance Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-solara-muted border-t border-solara-border/60 max-w-lg mx-auto"
          >
            <span className="flex items-center gap-1.5">
              <Icon name="truck-fast" className="w-3.5 h-3.5 text-solara-emerald" />
              {t.heroShippingReassurance}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Icon name="shield-halved" className="w-3.5 h-3.5 text-solara-emerald" />
              {t.heroGuaranteeReassurance}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
