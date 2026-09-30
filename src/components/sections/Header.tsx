"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "@/components/common/Icon";

export const Header: React.FC = () => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.navOffers, href: "#produits" },
    { label: t.navOrigin, href: "#origine" },
    { label: t.navCustomBox, href: "#coffret-sur-mesure" },
    { label: t.navQuiz, href: "#diagnostic" },
    { label: t.navReviews, href: "#avis" },
    { label: t.navFaq, href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-solara-border py-3.5"
          : "bg-white/60 backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif text-2xl sm:text-3xl font-black tracking-widest text-solara-emerald group-hover:text-solara-emerald-light transition-colors">
            SOLARA
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase font-medium tracking-[0.25em] text-solara-muted -mt-1">
            {t.brandTagline}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold text-solara-charcoal tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-solara-charcoal/80 hover:text-solara-emerald transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-solara-emerald hover:after:w-full after:transition-all after:duration-250"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Language Switcher, Cart Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Bilingual Toggle Pill */}
          <div className="flex items-center p-0.5 rounded-full bg-solara-emerald-soft border border-solara-emerald/20 text-[11px] font-bold">
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                language === "fr"
                  ? "bg-solara-emerald text-white shadow-xs"
                  : "text-solara-emerald hover:text-solara-charcoal"
              }`}
              aria-label="Passer en Français"
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                language === "en"
                  ? "bg-solara-emerald text-white shadow-xs"
                  : "text-solara-emerald hover:text-solara-charcoal"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Cart Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-solara-emerald-soft text-solara-emerald hover:bg-solara-emerald hover:text-white transition-all duration-200 border border-solara-emerald/20"
            aria-label={t.myRitual}
          >
            <Icon name="bag-shopping" className="w-4 h-4" />
            <span className="hidden sm:inline text-xs font-bold tracking-wide">{t.myRitual}</span>
            <span className="w-5 h-5 rounded-full bg-solara-orange text-white text-[10px] font-extrabold flex items-center justify-center">
              {totalItemsCount}
            </span>
          </motion.button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-solara-charcoal hover:bg-gray-100 transition-colors"
            aria-label="Menu de navigation"
          >
            <Icon name={mobileMenuOpen ? "close" : "sliders"} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-b border-solara-border bg-white px-6 py-5 shadow-lg space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-solara-charcoal hover:text-solara-emerald py-1.5 border-b border-gray-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};
