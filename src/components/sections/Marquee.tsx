"use client";

import React from "react";
import { Icon } from "@/components/common/Icon";

export const Marquee: React.FC = () => {
  const ingredients = [
    { name: "Beurre de karité sauvage", icon: "shield-halved", terroir: "Natitingou, Bénin" },
    { name: "Huile de moringa vierge", icon: "droplet", terroir: "Parakou, Sahel" },
    { name: "Argile montmorillonite pure", icon: "fire", terroir: "Collines de Dassa" },
    { name: "Huile de coco vierge", icon: "sun", terroir: "Littoral Atlantique" },
    { name: "Cendres de gousses de cacao", icon: "soap", terroir: "Saponification artisanale" },
    { name: "Cire d'abeille d'apiculture", icon: "heart", terroir: "Forêts sacrées" },
    { name: "Extrait pur de vanille", icon: "sparkles", terroir: "Gousses macérées" },
  ];

  return (
    <div className="py-4 bg-solara-emerald-soft/70 border-y border-solara-emerald/10 overflow-hidden relative select-none">
      {/* Subtle fade edges */}
      <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {/* First set */}
        <div className="flex items-center space-x-10 shrink-0 pr-10">
          {ingredients.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-solara-emerald text-white flex items-center justify-center text-xs shrink-0">
                <Icon name={item.icon} className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="text-sm font-serif font-bold text-solara-emerald tracking-wide block">
                  {item.name}
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-solara-muted block">
                  {item.terroir}
                </span>
              </div>
              <span className="text-solara-orange ml-6 text-xs font-black">•</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for endless loop */}
        <div className="flex items-center space-x-10 shrink-0 pr-10">
          {ingredients.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-solara-emerald text-white flex items-center justify-center text-xs shrink-0">
                <Icon name={item.icon} className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="text-sm font-serif font-bold text-solara-emerald tracking-wide block">
                  {item.name}
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-solara-muted block">
                  {item.terroir}
                </span>
              </div>
              <span className="text-solara-orange ml-6 text-xs font-black">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
