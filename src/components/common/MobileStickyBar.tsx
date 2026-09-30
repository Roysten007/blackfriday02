"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Icon } from "./Icon";
import { BUNDLE_HERO } from "@/data/products";

export const MobileStickyBar: React.FC = () => {
  const { totalItemsCount, total, setIsCartOpen, addBundleHero } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-solara-border px-4 py-2.5 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center justify-between gap-3">
            {totalItemsCount > 0 ? (
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2.5 text-left"
              >
                <div className="relative w-10 h-10 rounded-full bg-solara-emerald-soft text-solara-emerald flex items-center justify-center font-bold text-sm">
                  <Icon name="bag-shopping" className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-solara-orange text-white text-[10px] flex items-center justify-center">
                    {totalItemsCount}
                  </span>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-solara-muted">Mon rituel</div>
                  <div className="text-sm font-bold text-solara-emerald font-serif">
                    {total.toLocaleString("fr-FR")} FCFA
                  </div>
                </div>
              </button>
            ) : (
              <div className="text-left">
                <span className="inline-block text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-solara-orange/15 text-solara-orange">
                  Offre Black Friday
                </span>
                <div className="text-xs font-medium text-solara-charcoal">
                  Coffret Trio : <span className="font-bold text-solara-orange">6 500 F</span>
                </div>
              </div>
            )}

            {totalItemsCount > 0 ? (
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex-1 max-w-[200px] py-2.5 px-4 rounded-xl bg-solara-orange hover:bg-solara-orange-hover text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <span>Finaliser</span>
                <Icon name="arrow-right" className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => addBundleHero()}
                className="flex-1 max-w-[200px] py-2.5 px-4 rounded-xl bg-solara-emerald hover:bg-solara-emerald-light text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <span>Prendre le Coffret</span>
                <Icon name="plus" className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
