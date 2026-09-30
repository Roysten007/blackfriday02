"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "@/components/common/Icon";

export const FaqSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-solara-emerald px-3.5 py-1 rounded-full bg-solara-emerald-soft border border-solara-emerald/20">
            <Icon name="info" className="w-3.5 h-3.5 text-solara-orange" />
            <span>{t.faqBadge}</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-solara-emerald tracking-tight">
            {t.faqTitle}
          </h2>
          <p className="text-sm text-solara-muted max-w-lg mx-auto">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const questionText = language === "en" && faq.qEn ? faq.qEn : faq.q;
            const answerText = language === "en" && faq.aEn ? faq.aEn : faq.a;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-solara-emerald bg-solara-emerald-soft/20 shadow-sm"
                    : "border-solara-border hover:border-solara-emerald/40 bg-white"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-solara-charcoal">
                    {questionText}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-250 ${
                      isOpen
                        ? "bg-solara-emerald text-white rotate-180"
                        : "bg-gray-100 text-solara-charcoal"
                    }`}
                  >
                    <Icon name="chevron-down" className="w-3.5 h-3.5" />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-solara-muted leading-relaxed border-t border-solara-emerald/10 pt-4">
                        {answerText}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Help box */}
        <div className="mt-12 p-6 rounded-3xl bg-solara-emerald-soft border border-solara-emerald/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-solara-emerald text-white flex items-center justify-center shrink-0">
              <Icon name="phone" className="w-4 h-4" />
            </span>
            <div>
              <h4 className="font-serif font-bold text-sm text-solara-emerald">
                {t.faqQuestionNeed}
              </h4>
              <p className="text-xs text-solara-muted">
                {t.faqWhatsappAnswer}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/22990000000?text=Bonjour%20SOLARA%2C%20j%27ai%20une%20question%20sur%20vos%20soins"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-5 rounded-full bg-solara-emerald hover:bg-solara-emerald-light text-white text-xs font-semibold shrink-0 transition-colors flex items-center gap-2"
          >
            <Icon name="whatsapp" className="w-3.5 h-3.5 fill-white" />
            <span>{t.faqWhatsappBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
