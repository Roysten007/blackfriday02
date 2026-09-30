"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { REVIEWS } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "@/components/common/Icon";

export const ReviewsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  // Duplicate reviews for seamless continuous flow
  const allReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section id="avis" className="py-20 lg:py-28 bg-solara-emerald-soft/35 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-solara-emerald px-4 py-1.5 rounded-full bg-solara-emerald-soft border border-solara-emerald/20">
              <Icon name="star" className="w-3.5 h-3.5 text-solara-orange" />
              <span>{t.reviewsBadge}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-solara-emerald tracking-tight">
              {t.reviewsTitle}
            </h2>
            <p className="text-sm text-solara-muted">
              {t.reviewsSubtitle}
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-solara-border hover:border-solara-emerald bg-white text-solara-emerald hover:bg-solara-emerald-soft flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Avis précédents"
            >
              <Icon name="arrow-left" className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-solara-border hover:border-solara-emerald bg-white text-solara-emerald hover:bg-solara-emerald-soft flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Avis suivants"
            >
              <Icon name="arrow-right" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Single-line Scrolling Track */}
      <div className="relative w-full">
        {/* Soft edge gradients */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-solara-emerald-soft/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-solara-emerald-soft/60 to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar py-4 px-4 sm:px-8 scroll-smooth"
        >
          {allReviews.map((rev, idx) => {
            const commentText = language === "en" && rev.commentEn ? rev.commentEn : rev.comment;

            return (
              <motion.div
                key={`${rev.id}-${idx}`}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="w-[300px] sm:w-[360px] lg:w-[400px] shrink-0 p-6 sm:p-7 rounded-3xl bg-white border border-solara-border hover:border-solara-emerald/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Stars and Demo Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-solara-orange gap-1 text-xs">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Icon key={i} name="star" className="w-3.5 h-3.5" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-solara-muted bg-gray-100 px-2.5 py-0.5 rounded-full">
                      {t.reviewDemoBadge}
                    </span>
                  </div>

                  {/* Comment Quote */}
                  <p className="text-xs sm:text-sm text-solara-charcoal leading-relaxed font-normal italic line-clamp-4">
                    &laquo; {commentText} &raquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-solara-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-solara-emerald text-white font-serif font-bold text-sm flex items-center justify-center shrink-0">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-solara-emerald">
                        {rev.author}
                      </h4>
                      <span className="text-[11px] text-solara-muted block truncate max-w-[190px]">
                        {rev.city} • <strong className="font-medium text-solara-charcoal">{rev.product}</strong>
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold text-solara-muted shrink-0">
                    {rev.timeAgo}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Trust Badge */}
      <div className="mt-12 text-center max-w-7xl mx-auto px-4">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-solara-border text-xs text-solara-charcoal shadow-sm">
          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <Icon name="certificate" className="w-3.5 h-3.5" />
          </span>
          <span>{t.reviewsAverage}</span>
        </div>
      </div>
    </section>
  );
};
