"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./Icon";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "22990000000"; // Numéro de démo Ouest-Africain
  const message = encodeURIComponent(
    "Bonjour l'équipe SOLARA ! J'ai une question sur les soins Black Friday et mon rituel de peau."
  );
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-20 sm:bottom-8 left-5 z-40">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -10, y: 10 }}
            className="absolute bottom-16 left-0 bg-white text-solara-charcoal px-3.5 py-2 rounded-xl shadow-xl border border-solara-border text-xs font-medium whitespace-nowrap flex items-center gap-2 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Conseillère SOLARA en ligne</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter une conseillère SOLARA sur WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10 opacity-75" />
        <Icon name="whatsapp" className="w-7 h-7 fill-white" />
      </motion.a>
    </div>
  );
};
