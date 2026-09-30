"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@/components/common/Icon";
import { useLanguage } from "@/context/LanguageContext";

export const AnnouncementBar: React.FC = () => {
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
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-solara-emerald-deep text-white text-xs py-2 px-4 border-b border-solara-emerald-light/20 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-solara-orange animate-pulse" />
          <span className="font-medium tracking-wide">
            {t.announcement}
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="hidden md:inline text-white/80 font-normal">
            {t.promoNotice} <strong className="text-solara-orange tracking-wider">PEAU15</strong> {t.promoExtra}
          </span>
        </div>

        {/* Countdown in discreet pill */}
        <div className="flex items-center gap-2 bg-solara-emerald/60 border border-solara-emerald-light/40 px-3 py-1 rounded-full text-[11px] shadow-sm">
          <span className="text-white/70 flex items-center gap-1">
            <Icon name="clock" className="w-3 h-3 text-solara-orange" />
            <span className="hidden xs:inline">{t.endsIn}</span>
          </span>
          <div className="font-mono font-bold tracking-wider text-white">
            <span>{String(timeLeft.days).padStart(2, "0")}{t.days}</span> :{" "}
            <span>{String(timeLeft.hours).padStart(2, "0")}{t.hours}</span> :{" "}
            <span>{String(timeLeft.minutes).padStart(2, "0")}{t.minutes}</span> :{" "}
            <span className="text-solara-orange">{String(timeLeft.seconds).padStart(2, "0")}{t.seconds}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
