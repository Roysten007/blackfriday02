"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "@/components/common/Icon";
import { Product } from "@/types";

export const ProductsPinnedScroll: React.FC = () => {
  const { addItem, setIsCartOpen } = useCart();
  const { language, t } = useLanguage();

  // Split into 2 blocks as requested:
  // Block 1: Purifying & Detox (Savon noir, Argile verte, Huile de coco)
  // Block 2: Nourishing & Regenerating (Karité pur, Moringa, Baume lèvres)
  const block1Products = [PRODUCTS[0], PRODUCTS[1], PRODUCTS[2]]; // savon-noir, masque-argile, huile-coco
  const block2Products = [PRODUCTS[3], PRODUCTS[4], PRODUCTS[5]]; // karite-pur, huile-moringa, baume-levres

  const renderProductCard = (product: Product) => {
    const stockPercent = Math.round((product.stockLeft / product.initialStock) * 100);
    const productName = language === "en" && product.nameEn ? product.nameEn : product.name;
    const productTagline = language === "en" && product.taglineEn ? product.taglineEn : product.tagline;
    const productDesc = language === "en" && product.descriptionEn ? product.descriptionEn : product.description;
    const benefitsList = language === "en" && product.benefitsEn ? product.benefitsEn : product.benefits;

    return (
      <motion.div
        key={product.id}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="rounded-3xl bg-white border border-solara-border hover:border-solara-emerald/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
      >
        {/* Improved Top Visual Rectangle */}
        <div className="relative aspect-square sm:aspect-[4/3] bg-solara-emerald-soft overflow-hidden">
          <Image
            src={product.image}
            alt={productName}
            fill
            className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          />

          {/* Discount Badge */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-solara-orange text-white text-xs font-black shadow-md tracking-wider">
              -{product.discountPercent}% BF
            </span>
          </div>

          {/* Volume Pill */}
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-solara-charcoal text-xs font-semibold shadow-sm">
              {product.volume}
            </span>
          </div>

          {/* Terroir origin label */}
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] text-white bg-solara-charcoal/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl">
            <span className="flex items-center gap-1.5 font-medium truncate">
              <Icon name="seedling" className="w-3 h-3 text-solara-orange shrink-0" />
              <span>{t.originLabel} {product.origin}</span>
            </span>
            <span className="text-white/80 shrink-0 font-semibold">100% Brut</span>
          </div>
        </div>

        {/* Improved Bottom Content Rectangle */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-solara-charcoal group-hover:text-solara-emerald transition-colors leading-snug">
                {productName}
              </h3>
              <p className="text-xs font-medium text-solara-muted mt-1 leading-relaxed">
                {productTagline}
              </p>
            </div>

            <p className="text-xs text-solara-charcoal/80 leading-relaxed line-clamp-2">
              {productDesc}
            </p>

            {/* Benefit Icons */}
            <div className="space-y-2 pt-3 border-t border-gray-100">
              {benefitsList.map((b, bIdx) => (
                <div key={bIdx} className="flex items-center gap-2.5 text-xs text-solara-charcoal">
                  <span className="w-5 h-5 rounded-full bg-solara-emerald-soft text-solara-emerald flex items-center justify-center shrink-0 text-[10px]">
                    <Icon name={b.icon} className="w-2.5 h-2.5" />
                  </span>
                  <span className="font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stock Gauge & Pricing & Add Button */}
          <div className="space-y-4 pt-4 border-t border-solara-border">
            {/* Stock Gauge */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-solara-muted font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-solara-orange animate-pulse" />
                  <span>
                    {t.stockRemaining} <strong>{product.stockLeft}</strong> / {product.initialStock} (démo)
                  </span>
                </span>
                <span className="text-[11px] font-bold text-solara-orange">
                  {t.highDemand}
                </span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-solara-orange rounded-full transition-all duration-700"
                  style={{ width: `${stockPercent}%` }}
                />
              </div>
            </div>

            {/* Pricing Row */}
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-gray-400 line-through block font-medium">
                  {product.originalPrice.toLocaleString("fr-FR")} FCFA
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-black text-solara-orange">
                  {product.salePrice.toLocaleString("fr-FR")}{" "}
                  <span className="text-sm font-sans font-bold text-solara-charcoal">FCFA</span>
                </span>
              </div>

              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg">
                {t.savingsLabel} {(product.originalPrice - product.salePrice).toLocaleString("fr-FR")} F
              </span>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                addItem(product, 1);
                setIsCartOpen(true);
              }}
              className="w-full py-3.5 px-6 rounded-2xl bg-solara-emerald hover:bg-solara-emerald-light text-white font-semibold text-xs sm:text-sm shadow-md shadow-solara-emerald/15 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-98"
            >
              <Icon name="plus" className="w-3.5 h-3.5" />
              <span>{t.addToRitual}</span>
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="produits" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-solara-orange px-4 py-1.5 rounded-full bg-solara-orange/10">
            <Icon name="tag" className="w-3.5 h-3.5" />
            <span>{t.productsSectionBadge}</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-solara-emerald tracking-tight leading-tight">
            {t.productsSectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-solara-muted leading-relaxed">
            {t.productsSectionSubtitle}
          </p>
        </div>

        {/* BLOCK 1: Purifiants & Détoxifiants */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-solara-border">
            <span className="w-10 h-10 rounded-2xl bg-solara-emerald text-white flex items-center justify-center shrink-0">
              <Icon name="sparkles" className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-solara-emerald">
                {t.block1Title}
              </h3>
              <p className="text-xs sm:text-sm text-solara-muted mt-0.5">
                {t.block1Subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {block1Products.map((p) => renderProductCard(p))}
          </div>
        </div>

        {/* BLOCK 2: Nourrissants & Régénérants */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-solara-border">
            <span className="w-10 h-10 rounded-2xl bg-solara-orange text-white flex items-center justify-center shrink-0">
              <Icon name="heart" className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-solara-emerald">
                {t.block2Title}
              </h3>
              <p className="text-xs sm:text-sm text-solara-muted mt-0.5">
                {t.block2Subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {block2Products.map((p) => renderProductCard(p))}
          </div>
        </div>
      </div>
    </section>
  );
};
