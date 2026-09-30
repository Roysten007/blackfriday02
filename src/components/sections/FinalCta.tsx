"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@/components/common/Icon";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export const FinalCta: React.FC = () => {
  const { addBundleHero, setIsCartOpen } = useCart();
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 38,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-solara-emerald text-white relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-solara-emerald-light/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-solara-orange/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-solara-orange">
          {t.finalBadge}
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          {t.finalTitle}
        </h2>

        <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {t.finalSubtitle}
        </p>

        {/* Live Countdown Grid */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto pt-2">
          <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl p-3 sm:p-4 min-w-[70px] sm:min-w-[85px]">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white block">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-medium text-white/70 block">{t.days}</span>
          </div>
          <span className="text-xl font-bold text-white/50">:</span>
          <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl p-3 sm:p-4 min-w-[70px] sm:min-w-[85px]">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white block">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-medium text-white/70 block">{t.hours}</span>
          </div>
          <span className="text-xl font-bold text-white/50">:</span>
          <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl p-3 sm:p-4 min-w-[70px] sm:min-w-[85px]">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white block">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-medium text-white/70 block">{t.minutes}</span>
          </div>
          <span className="text-xl font-bold text-white/50">:</span>
          <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl p-3 sm:p-4 min-w-[70px] sm:min-w-[85px]">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-solara-orange block">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-medium text-solara-orange block">{t.seconds}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => {
              addBundleHero();
              setIsCartOpen(true);
            }}
            className="w-full sm:w-auto py-4 px-8 rounded-full bg-solara-orange hover:bg-solara-orange-hover text-white font-bold text-sm sm:text-base shadow-xl shadow-solara-orange/30 hover:shadow-2xl transition-all flex items-center justify-center gap-3 transform active:scale-98"
          >
            <Icon name="gift" className="w-4 h-4" />
            <span>{t.finalTakeBundle}</span>
          </button>

          <a
            href="#produits"
            className="w-full sm:w-auto py-4 px-8 rounded-full bg-white text-solara-emerald hover:bg-solara-emerald-soft font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
          >
            <span>{t.finalPickUnits}</span>
            <Icon name="arrow-right" className="w-4 h-4" />
          </a>
        </div>

        {/* Trust Guarantees */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-white/80">
          <span className="flex items-center gap-1.5">
            <Icon name="truck-fast" className="w-4 h-4 text-solara-orange" />
            {t.finalDelivery}
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="shield-halved" className="w-4 h-4 text-solara-orange" />
            {t.finalRiskFree}
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="lock" className="w-4 h-4 text-solara-orange" />
            {t.finalPayment}
          </span>
        </div>
      </div>
    </section>
  );
};
