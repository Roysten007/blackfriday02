"use client";

import React, { useState } from "react";
import { Icon } from "@/components/common/Icon";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-solara-emerald-deep text-white border-t border-solara-emerald-light/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-3xl font-black tracking-widest text-white block">
              SOLARA
            </span>
            <p className="text-xs uppercase tracking-[0.25em] text-solara-orange font-semibold">
              {t.brandTagline}
            </p>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              {t.footerDesc}
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-white/60">
              <span className="flex items-center gap-1">
                <Icon name="seedling" className="w-3.5 h-3.5 text-solara-orange" />
                {t.footerOriginNote}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white tracking-wide">
              {t.footerNavTitle}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#produits" className="hover:text-solara-orange transition-colors">
                  {t.navOffers}
                </a>
              </li>
              <li>
                <a href="#origine" className="hover:text-solara-orange transition-colors">
                  {t.navOrigin}
                </a>
              </li>
              <li>
                <a href="#coffret-sur-mesure" className="hover:text-solara-orange transition-colors">
                  {t.navCustomBox}
                </a>
              </li>
              <li>
                <a href="#diagnostic" className="hover:text-solara-orange transition-colors">
                  {t.navQuiz}
                </a>
              </li>
              <li>
                <a href="#avis" className="hover:text-solara-orange transition-colors">
                  {t.navReviews}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-solara-orange transition-colors">
                  {t.navFaq}
                </a>
              </li>
            </ul>
          </div>

          {/* Skincare Commitments */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white tracking-wide">
              {t.footerIngredientsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>Beurre de karité sauvage</li>
              <li>Huile de moringa pure</li>
              <li>Savon noir traditionnel</li>
              <li>Argile montmorillonite</li>
              <li>Huile de coco première pression</li>
              <li>Baume karité-vanille</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white tracking-wide">
              {t.footerJournalTitle}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              {t.footerJournalDesc}
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.newsletterPlaceholder}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-white/40 focus:outline-none focus:border-solara-orange"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-solara-orange hover:bg-solara-orange-hover text-white text-xs font-semibold shrink-0 transition-colors"
                  >
                    {t.newsletterBtn}
                  </button>
                </div>
                <span className="text-[10px] text-white/50 block">
                  {t.newsletterNoSpam}
                </span>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-solara-emerald-soft/20 text-emerald-300 text-xs flex items-center gap-2">
                <Icon name="check" className="w-3.5 h-3.5 text-solara-orange" />
                <span>{t.newsletterSuccess}</span>
              </div>
            )}

            {/* Payment simulation icons */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-white/50 block mb-2">
                {t.acceptedPayments}
              </span>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-yellow-400 text-black font-extrabold text-[10px]">
                  MTN MoMo
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-extrabold text-[10px]">
                  Moov Money
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-700 text-white font-medium text-[10px]">
                  Cash on Delivery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Demo Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>{t.footerCopyright}</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{t.legalNotice}</span>
            <span>•</span>
            <span>{t.privacyPolicy}</span>
            <span>•</span>
            <span>{t.guaranteeNotice}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
