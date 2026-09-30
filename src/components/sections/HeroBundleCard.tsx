"use client";

import React from "react";
import Image from "next/image";
import { BUNDLE_HERO } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "@/components/common/Icon";

export const HeroBundleCard: React.FC = () => {
  const { addBundleHero, setIsCartOpen } = useCart();
  const { language, t } = useLanguage();
  const stockPercent = Math.round((BUNDLE_HERO.stockLeft / BUNDLE_HERO.initialStock) * 100);

  const bundleName = language === "en" && BUNDLE_HERO.nameEn ? BUNDLE_HERO.nameEn : BUNDLE_HERO.name;
  const bundleSubtitle = language === "en" && BUNDLE_HERO.subtitleEn ? BUNDLE_HERO.subtitleEn : BUNDLE_HERO.subtitle;
  const bonus1 = language === "en" ? BUNDLE_HERO.freeBonusesEn[0] : BUNDLE_HERO.freeBonuses[0];
  const bonus2 = language === "en" ? BUNDLE_HERO.freeBonusesEn[1] : BUNDLE_HERO.freeBonuses[1];

  const handleOrderBundle = () => {
    addBundleHero();
    setIsCartOpen(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Stack Card with Deep Emerald Frame & Arch Accents */}
        <div className="rounded-[40px] bg-solara-emerald text-white p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden border-2 border-solara-emerald-light/40">
          {/* Subtle botanical glow background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-solara-emerald-light/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-solara-orange/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b border-white/15 relative z-10">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-solara-orange text-white text-xs font-black uppercase tracking-wider shadow-md">
                {t.bundleFeaturedBadge}
              </span>
              <span className="text-white/80 text-xs font-medium hidden sm:inline">
                {t.bundleFavoriteNotice}
              </span>
            </div>

            {/* Scarcity pill */}
            <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-solara-orange animate-ping" />
              <span>
                {t.bundleDemoStock} <strong className="text-solara-orange">{BUNDLE_HERO.stockLeft}</strong> {t.bundleDemoStockEnd}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Visual Arch */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm arch-image overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/5] bg-solara-emerald-dark">
                <Image
                  src={BUNDLE_HERO.image}
                  alt={bundleName}
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 300px, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solara-emerald-deep/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 text-solara-charcoal shadow-lg backdrop-blur-md text-xs space-y-1">
                  <span className="font-serif font-bold text-solara-emerald text-sm block">
                    {bundleName}
                  </span>
                  <span className="text-solara-muted block">
                    Karité 250g + Savon Noir 200g + Baume 15g
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Alex Hormozi Value Stack Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  {bundleName}
                </h3>
                <p className="text-white/80 text-sm sm:text-base mt-2 leading-relaxed font-normal">
                  {bundleSubtitle}
                </p>
              </div>

              {/* The Value Stack List */}
              <div className="space-y-3 bg-white/5 rounded-2xl p-5 border border-white/10">
                <span className="text-xs uppercase font-extrabold tracking-widest text-solara-orange block">
                  {t.bundleIncludes}
                </span>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Icon name="check" className="w-3.5 h-3.5 text-solara-orange" />
                      <span>1x Beurre de karité sauvage d&apos;Atacora 250 g</span>
                    </span>
                    <span className="text-white/60 font-mono">3 900 F</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Icon name="check" className="w-3.5 h-3.5 text-solara-orange" />
                      <span>1x Savon noir traditionnel aux cendres de cacao 200 g</span>
                    </span>
                    <span className="text-white/60 font-mono">2 200 F</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Icon name="check" className="w-3.5 h-3.5 text-solara-orange" />
                      <span>1x Baume à lèvres karité-vanille Bourbon 15 g</span>
                    </span>
                    <span className="text-white/60 font-mono">1 500 F</span>
                  </div>

                  {/* Free Bonuses */}
                  <div className="flex items-center justify-between text-emerald-200 font-medium">
                    <span className="flex items-center gap-2">
                      <Icon name="gift" className="w-3.5 h-3.5 text-solara-orange" />
                      <span>{bonus1}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-solara-orange text-white text-[10px] font-black uppercase">
                      {t.free}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-emerald-200 font-medium">
                    <span className="flex items-center gap-2">
                      <Icon name="gift" className="w-3.5 h-3.5 text-solara-orange" />
                      <span>{bonus2}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-solara-orange text-white text-[10px] font-black uppercase">
                      {t.free}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between text-xs text-white/70">
                  <span>{t.bundleTotalValue}</span>
                  <span className="line-through">{BUNDLE_HERO.totalValue.toLocaleString("fr-FR")} FCFA</span>
                </div>
              </div>

              {/* Price & Savings Highlight */}
              <div className="p-5 rounded-2xl bg-white text-solara-charcoal shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-solara-muted block font-medium">
                    {t.bundleSpecialPrice}
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-3xl sm:text-4xl font-black text-solara-orange">
                      {BUNDLE_HERO.salePrice.toLocaleString("fr-FR")} FCFA
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                      {t.savingsLabel} {BUNDLE_HERO.savings.toLocaleString("fr-FR")} FCFA
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleOrderBundle}
                  className="py-4 px-8 rounded-xl bg-solara-orange hover:bg-solara-orange-hover text-white font-bold text-sm shadow-xl shadow-solara-orange/25 transition-all transform active:scale-98 flex items-center justify-center gap-2 shrink-0"
                >
                  <Icon name="cart" className="w-4 h-4" />
                  <span>{t.bundleTakeBtn}</span>
                </button>
              </div>

              {/* Stock Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-white/80">
                  <span>{t.bundleStockLabel}</span>
                  <span>{BUNDLE_HERO.stockLeft} restants sur {BUNDLE_HERO.initialStock}</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-solara-orange rounded-full transition-all duration-700"
                    style={{ width: `${stockPercent}%` }}
                  />
                </div>
              </div>

              {/* 7-Day Money-Back Guarantee (Hormozi Risk Reversal) */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-white/90">
                <span className="w-8 h-8 rounded-full bg-solara-orange/20 text-solara-orange flex items-center justify-center shrink-0">
                  <Icon name="shield-halved" className="w-4 h-4" />
                </span>
                <div className="space-y-1">
                  <strong className="text-white font-semibold block">
                    {t.bundleGuaranteeTitle}
                  </strong>
                  <p className="text-white/80 text-[11px] leading-relaxed">
                    {t.bundleGuaranteeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
