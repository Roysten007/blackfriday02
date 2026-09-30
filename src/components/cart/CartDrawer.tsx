"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "@/components/common/Icon";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    updateQuantity,
    removeItem,
    isPromoApplied,
    applyPromoCode,
    removePromoCode,
    subtotal,
    promoDiscount,
    total,
    totalItemsCount,
  } = useCart();
  const { language, t } = useLanguage();

  const [inputCode, setInputCode] = useState("");
  const [promoFeedback, setPromoFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const freeShippingThreshold = 15000;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode) return;
    const res = applyPromoCode(inputCode);
    setPromoFeedback(res);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-solara-charcoal/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-solara-border flex items-center justify-between bg-solara-emerald-soft/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-solara-emerald text-white flex items-center justify-center text-xs">
                    <Icon name="bag-shopping" className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-bold text-solara-emerald">{t.cartTitle}</h2>
                    <span className="text-xs text-solara-muted">
                      {totalItemsCount} {totalItemsCount > 1 ? t.itemsSelected : t.itemSelected}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-9 h-9 rounded-full bg-white border border-solara-border text-solara-charcoal hover:bg-gray-100 flex items-center justify-center transition-colors"
                  aria-label="Fermer le panier"
                >
                  <Icon name="close" className="w-4 h-4" />
                </button>
              </div>

              {/* Free Shipping Progress bar */}
              <div className="px-6 py-3.5 bg-solara-emerald/5 border-b border-solara-emerald/10">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-solara-emerald font-medium flex items-center gap-1.5">
                    <Icon name="truck-fast" className="w-3.5 h-3.5" />
                    {amountNeededForFreeShipping === 0 ? (
                      <span className="font-bold text-solara-emerald">{t.freeShippingUnlocked}</span>
                    ) : (
                      <span>
                        {t.moreForFreeShipping} <strong className="font-semibold">{amountNeededForFreeShipping.toLocaleString("fr-FR")} FCFA</strong> {t.forFreeShipping}
                      </span>
                    )}
                  </span>
                  <span className="font-bold text-solara-emerald">{progressToFreeShipping}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-solara-emerald rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressToFreeShipping}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                    <div className="w-16 h-16 rounded-full bg-solara-emerald-soft text-solara-emerald flex items-center justify-center mb-4">
                      <Icon name="spa" className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-solara-charcoal mb-2">
                      {t.cartEmptyTitle}
                    </h3>
                    <p className="text-xs text-solara-muted mb-6 max-w-xs leading-relaxed">
                      {t.cartEmptyDesc}
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="px-6 py-2.5 rounded-full bg-solara-emerald text-white text-xs font-semibold hover:bg-solara-emerald-light transition-all"
                    >
                      {t.exploreTreatments}
                    </button>
                  </div>
                ) : (
                  items.map((item) => {
                    const itemName = language === "en" && item.product.nameEn ? item.product.nameEn : item.product.name;
                    return (
                      <motion.div
                        layout
                        key={item.product.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-3.5 rounded-2xl border border-solara-border hover:border-solara-emerald/30 bg-white flex gap-3 transition-colors"
                      >
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-solara-emerald-soft">
                          <Image
                            src={item.product.image}
                            alt={itemName}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="font-serif font-bold text-sm text-solara-charcoal leading-snug line-clamp-1">
                                {itemName}
                              </h4>
                              <span className="text-[11px] text-solara-muted font-medium">
                                {item.product.volume}
                              </span>
                            </div>
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                              aria-label={`Supprimer ${itemName}`}
                            >
                              <Icon name="close" className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                            {/* Quantity selector */}
                            <div className="flex items-center border border-solara-border rounded-lg bg-gray-50/50">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center text-solara-muted hover:text-solara-charcoal hover:bg-gray-100 rounded-l-lg transition-colors"
                                aria-label="Diminuer la quantité"
                              >
                                <Icon name="minus" className="w-2.5 h-2.5" />
                              </button>
                              <span className="w-8 text-center text-xs font-semibold text-solara-charcoal">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center text-solara-muted hover:text-solara-charcoal hover:bg-gray-100 rounded-r-lg transition-colors"
                                aria-label="Augmenter la quantité"
                              >
                                <Icon name="plus" className="w-2.5 h-2.5" />
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <span className="text-xs text-gray-400 line-through mr-1.5">
                                {(item.product.originalPrice * item.quantity).toLocaleString("fr-FR")} F
                              </span>
                              <span className="font-bold text-sm text-solara-orange font-serif">
                                {(item.product.salePrice * item.quantity).toLocaleString("fr-FR")} F
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* Footer Checkout Actions */}
              {items.length > 0 && (
                <div className="p-6 border-t border-solara-border bg-gray-50/80 space-y-4">
                  {/* Promo Code Form */}
                  <div>
                    {!isPromoApplied ? (
                      <form onSubmit={handleApplyCode} className="flex gap-2">
                        <div className="relative flex-1">
                          <input
                            type="text"
                            value={inputCode}
                            onChange={(e) => setInputCode(e.target.value)}
                            placeholder={t.promoPlaceholder}
                            className="w-full px-3.5 py-2 text-xs rounded-xl border border-solara-border focus:outline-none focus:border-solara-emerald uppercase tracking-wider bg-white"
                          />
                        </div>
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-xl bg-solara-emerald text-white text-xs font-semibold hover:bg-solara-emerald-light transition-colors shrink-0"
                        >
                          {t.apply}
                        </button>
                      </form>
                    ) : (
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-solara-emerald-soft border border-solara-emerald/20 text-xs">
                        <div className="flex items-center gap-2 text-solara-emerald font-semibold">
                          <Icon name="tag" className="w-3.5 h-3.5" />
                          <span>{t.codeApplied}</span>
                        </div>
                        <button
                          onClick={removePromoCode}
                          className="text-solara-muted hover:text-red-500 font-medium text-xs transition-colors"
                        >
                          {t.remove}
                        </button>
                      </div>
                    )}
                    {promoFeedback && !isPromoApplied && (
                      <p className={`text-[11px] mt-1.5 ${promoFeedback.success ? "text-emerald-600" : "text-red-500"}`}>
                        {promoFeedback.message}
                      </p>
                    )}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-1.5 text-xs text-solara-charcoal pt-2 border-t border-solara-border/60">
                    <div className="flex justify-between">
                      <span className="text-solara-muted">{t.subtotal}</span>
                      <span>{subtotal.toLocaleString("fr-FR")} FCFA</span>
                    </div>

                    {isPromoApplied && (
                      <div className="flex justify-between text-solara-orange font-semibold">
                        <span>{t.promoDiscountLabel}</span>
                        <span>-{promoDiscount.toLocaleString("fr-FR")} FCFA</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-solara-muted">{t.shippingEst}</span>
                      <span className="text-emerald-700 font-medium">
                        {amountNeededForFreeShipping === 0 ? t.shippingFreeText : t.shippingNextStep}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline pt-2 border-t border-solara-border text-base">
                      <span className="font-serif font-bold text-solara-emerald">{t.totalToPay}</span>
                      <div className="text-right">
                        <span className="font-serif text-xl font-extrabold text-solara-orange">
                          {total.toLocaleString("fr-FR")} FCFA
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsCheckoutOpen(true);
                    }}
                    className="w-full py-3.5 px-6 rounded-2xl bg-solara-orange hover:bg-solara-orange-hover text-white font-semibold text-sm shadow-xl shadow-solara-orange/20 flex items-center justify-center gap-2.5 transition-all transform active:scale-98"
                  >
                    <span>{t.checkoutBtn}</span>
                    <Icon name="arrow-right" className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-solara-muted">
                    <span className="flex items-center gap-1">
                      <Icon name="shield-halved" className="w-3 h-3 text-solara-emerald" />
                      {t.checkoutReassurance1}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Icon name="phone" className="w-3 h-3 text-solara-emerald" />
                      {t.checkoutReassurance2}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
