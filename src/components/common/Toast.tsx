"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Icon } from "./Icon";

export const Toast: React.FC = () => {
  const { toastMessage, clearToast, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="fixed bottom-24 right-4 sm:right-8 z-50 max-w-sm w-full bg-solara-emerald-deep text-white p-4 rounded-2xl shadow-2xl border border-solara-emerald-light/30 flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-solara-orange/20 text-solara-orange flex items-center justify-center shrink-0">
              <Icon name="circle-check" className="w-4 h-4" />
            </span>
            <p className="text-sm font-medium leading-snug">{toastMessage}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                clearToast();
                setIsCartOpen(true);
              }}
              className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-solara-orange text-white hover:bg-solara-orange-hover transition-colors"
            >
              Panier
            </button>
            <button
              onClick={clearToast}
              className="text-white/60 hover:text-white p-1 transition-colors"
              aria-label="Fermer la notification"
            >
              <Icon name="close" className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
