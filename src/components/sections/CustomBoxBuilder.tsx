"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "@/components/common/Icon";

export const CustomBoxBuilder: React.FC = () => {
  const { addCustomBox, setIsCartOpen } = useCart();
  const { language, t } = useLanguage();
  const [selectedIds, setSelectedIds] = useState<string[]>(["karite-pur", "savon-noir", "huile-moringa"]);

  const toggleProduct = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        setSelectedIds([selectedIds[1], selectedIds[2], id]);
      }
    }
  };

  const selectedProducts: Product[] = selectedIds
    .map((id) => PRODUCTS.find((p) => p.id === id)!)
    .filter(Boolean);

  const rawTotal = selectedProducts.reduce((sum, p) => sum + p.salePrice, 0);
  const discount15 = Math.round(rawTotal * 0.15);
  const finalPrice = rawTotal - discount15;

  const isComplete = selectedIds.length === 3;

  const handleAddBox = () => {
    if (!isComplete) return;
    addCustomBox(selectedProducts);
    setIsCartOpen(true);
  };

  return (
    <section id="coffret-sur-mesure" className="py-20 lg:py-28 bg-solara-emerald-soft/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-solara-orange/15 text-solara-orange text-xs font-bold uppercase tracking-wider">
            <Icon name="wand-magic-sparkles" className="w-3.5 h-3.5" />
            <span>{t.boxBadge}</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-solara-emerald tracking-tight leading-tight">
            {t.boxTitle}
          </h2>
          <p className="text-sm sm:text-base text-solara-muted leading-relaxed">
            {t.boxSubtitle}
          </p>
        </div>

        {/* Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Product Selectors (6 items) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {PRODUCTS.map((prod) => {
              const isSelected = selectedIds.includes(prod.id);
              const selectionIndex = selectedIds.indexOf(prod.id);
              const nameDisplay = language === "en" && prod.nameEn ? prod.nameEn : prod.name;

              return (
                <motion.div
                  key={prod.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggleProduct(prod.id)}
                  className={`cursor-pointer rounded-2xl p-3 sm:p-4 border-2 transition-all relative flex flex-col justify-between bg-white shadow-sm ${
                    isSelected
                      ? "border-solara-orange ring-4 ring-solara-orange/15 shadow-md"
                      : "border-solara-border hover:border-solara-emerald/40"
                  }`}
                >
                  {/* Selection Badge Number */}
                  <div className="absolute top-2 right-2 z-10">
                    {isSelected ? (
                      <span className="w-6 h-6 rounded-full bg-solara-orange text-white text-xs font-bold flex items-center justify-center shadow-md">
                        {selectionIndex + 1}
                      </span>
                    ) : (
                      <span className="w-6 h-6 rounded-full border border-solara-border bg-white text-gray-300 flex items-center justify-center hover:border-solara-emerald">
                        <Icon name="plus" className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>

                  <div className="relative aspect-square rounded-xl overflow-hidden bg-solara-emerald-soft mb-3">
                    <Image
                      src={prod.image}
                      alt={nameDisplay}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 150px, 200px"
                    />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-solara-charcoal line-clamp-1">
                      {nameDisplay}
                    </h4>
                    <span className="text-[10px] text-solara-muted block">{prod.volume}</span>
                    <div className="pt-1 flex items-baseline justify-between">
                      <span className="text-xs font-bold text-solara-orange font-serif">
                        {prod.salePrice.toLocaleString("fr-FR")} F
                      </span>
                      <span className="text-[10px] text-gray-400 line-through">
                        {prod.originalPrice.toLocaleString("fr-FR")} F
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Real-time Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-solara-border shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-solara-border">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-solara-muted block">
                    {t.yourSelection}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-solara-emerald">
                    {t.boxCustomCount} ({selectedIds.length}/3)
                  </h3>
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    isComplete
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {isComplete ? t.boxComplete : `${t.boxAddMore} ${3 - selectedIds.length} ${t.boxAddMoreEnd}`}
                </span>
              </div>

              {/* Chosen 3 items preview */}
              <div className="space-y-3 min-h-[160px]">
                {selectedProducts.map((p, idx) => {
                  const pName = language === "en" && p.nameEn ? p.nameEn : p.name;
                  return (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-solara-emerald-soft/40 border border-solara-emerald/10 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                          <Image src={p.image} alt={pName} fill className="object-cover" />
                        </div>
                        <div>
                          <span className="font-serif font-bold text-solara-charcoal block line-clamp-1">
                            {idx + 1}. {pName}
                          </span>
                          <span className="text-[10px] text-solara-muted">{p.volume}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-solara-charcoal">
                          {p.salePrice.toLocaleString("fr-FR")} F
                        </span>
                      </div>
                    </motion.div>
                  );
                })}

                {Array.from({ length: 3 - selectedIds.length }).map((_, emptyIdx) => (
                  <div
                    key={`empty-${emptyIdx}`}
                    className="p-3 rounded-xl border border-dashed border-gray-300 text-center text-xs text-gray-400 bg-gray-50/50 flex items-center justify-center gap-2"
                  >
                    <Icon name="plus" className="w-3 h-3 text-gray-400" />
                    <span>{t.boxPickSide}</span>
                  </div>
                ))}
              </div>

              {/* Dynamic Price Breakdown */}
              <div className="space-y-2 pt-4 border-t border-solara-border text-xs text-solara-charcoal">
                <div className="flex justify-between text-solara-muted">
                  <span>{t.boxCumulative}</span>
                  <span>{rawTotal.toLocaleString("fr-FR")} FCFA</span>
                </div>

                <div className="flex justify-between font-semibold text-solara-orange">
                  <span>{t.boxDiscount}</span>
                  <span>-{discount15.toLocaleString("fr-FR")} FCFA</span>
                </div>

                <div className="flex justify-between items-baseline pt-3 border-t border-solara-border">
                  <span className="font-serif text-base font-bold text-solara-emerald">
                    {t.boxTotal}
                  </span>
                  <div className="text-right">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={finalPrice}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-2xl font-black text-solara-orange"
                      >
                        {finalPrice.toLocaleString("fr-FR")}{" "}
                        <span className="text-xs font-sans font-bold text-solara-charcoal">FCFA</span>
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Add Custom Box Button */}
              <button
                disabled={!isComplete}
                onClick={handleAddBox}
                className="w-full py-3.5 px-6 rounded-2xl bg-solara-orange hover:bg-solara-orange-hover text-white font-semibold text-sm shadow-xl shadow-solara-orange/20 flex items-center justify-center gap-2.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed transform active:scale-98"
              >
                <Icon name="gift" className="w-4 h-4" />
                <span>
                  {isComplete
                    ? `${t.boxAddBtn} (${finalPrice.toLocaleString("fr-FR")} FCFA)`
                    : `${t.boxAddMore} ${3 - selectedIds.length} ${t.boxAddMoreEnd}`}
                </span>
              </button>

              <p className="text-[11px] text-center text-solara-muted">
                {t.boxLinenPouch}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
