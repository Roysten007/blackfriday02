"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useCart } from "@/context/CartContext";
import { Icon } from "@/components/common/Icon";

export const CheckoutModal: React.FC = () => {
  const {
    items,
    isCheckoutOpen,
    setIsCheckoutOpen,
    total,
    promoDiscount,
    isPromoApplied,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    city: "Cotonou",
    neighborhood: "",
    phone: "",
    paymentMethod: "mtn_momo",
    notes: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0E5A45", "#FF7A1A", "#15785C", "#FFB27D"],
      });
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.neighborhood || !formData.phone) {
      alert("Veuillez renseigner votre nom, votre quartier et votre numéro de téléphone.");
      return;
    }

    setIsProcessing(true);
    const newOrderId = `SOL-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);

    // Simulate payment transaction
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      triggerConfetti();
    }, 1800);
  };

  // Generate customized WhatsApp order confirmation link
  const generateWhatsAppLink = () => {
    const phoneVendor = "22990000000";
    const paymentLabel =
      formData.paymentMethod === "mtn_momo"
        ? "MTN Mobile Money"
        : formData.paymentMethod === "moov_money"
        ? "Moov Money"
        : "Paiement à la livraison";

    const itemsSummary = items
      .map((i) => `• ${i.quantity}x ${i.product.name} (${(i.product.salePrice * i.quantity).toLocaleString("fr-FR")} F)`)
      .join("\n");

    const text = `🌿 *NOUVELLE COMMANDE SOLARA #${orderId}*
━━━━━━━━━━━━━━━━━━━━
👤 *Client :* ${formData.name}
📍 *Livraison :* ${formData.city} - ${formData.neighborhood}
📞 *Téléphone :* ${formData.phone}
💳 *Paiement :* ${paymentLabel}

📦 *Articles commandés :*
${itemsSummary}

💰 *Total à régler :* ${total.toLocaleString("fr-FR")} FCFA ${isPromoApplied ? "(Code PEAU15 inclus)" : ""}
━━━━━━━━━━━━━━━━━━━━
_Merci de confirmer la prise en charge de ma commande !_`;

    return `https://wa.me/${phoneVendor}?text=${encodeURIComponent(text)}`;
  };

  const handleFinish = () => {
    clearCart();
    setIsSuccess(false);
    setIsCheckoutOpen(false);
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isProcessing && setIsCheckoutOpen(false)}
            className="fixed inset-0 bg-solara-charcoal/70 backdrop-blur-sm"
          />

          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-solara-border overflow-hidden p-6 sm:p-8 z-10"
            >
              {!isSuccess ? (
                <>
                  {/* Modal Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-solara-border">
                    <div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-solara-orange">
                        Finalisation express
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-solara-emerald">
                        Votre commande SOLARA
                      </h3>
                    </div>
                    <button
                      onClick={() => setIsCheckoutOpen(false)}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-solara-charcoal transition-colors"
                      aria-label="Fermer"
                    >
                      <Icon name="close" className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Order mini-summary */}
                  <div className="my-4 p-3.5 rounded-2xl bg-solara-emerald-soft/60 border border-solara-emerald/10 text-xs">
                    <div className="flex justify-between font-semibold text-solara-emerald mb-1">
                      <span>Total des soins ({items.length})</span>
                      <span className="font-serif text-sm font-bold text-solara-orange">
                        {total.toLocaleString("fr-FR")} FCFA
                      </span>
                    </div>
                    {isPromoApplied && (
                      <div className="text-[11px] text-emerald-800">
                        ✓ Code privilège PEAU15 déduit (-{promoDiscount.toLocaleString("fr-FR")} F)
                      </div>
                    )}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-solara-charcoal mb-1">
                        Nom & Prénoms <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex : Aminata Dossou"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-solara-border text-sm focus:outline-none focus:border-solara-emerald"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-solara-charcoal mb-1">
                          Ville <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-solara-border text-sm focus:outline-none focus:border-solara-emerald bg-white"
                        >
                          <option value="Cotonou">Cotonou (Bénin)</option>
                          <option value="Abomey-Calavi">Abomey-Calavi</option>
                          <option value="Porto-Novo">Porto-Novo</option>
                          <option value="Abidjan">Abidjan (Côte d&apos;Ivoire)</option>
                          <option value="Lomé">Lomé (Togo)</option>
                          <option value="Autre">Autre localité</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-solara-charcoal mb-1">
                          Quartier précis <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.neighborhood}
                          onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                          placeholder="Ex : Haie Vive, rue 450"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-solara-border text-sm focus:outline-none focus:border-solara-emerald"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-solara-charcoal mb-1">
                        Numéro WhatsApp pour la livraison <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+229 97 00 00 00"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-solara-border text-sm focus:outline-none focus:border-solara-emerald"
                      />
                    </div>

                    {/* Payment Method Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-solara-charcoal mb-1.5">
                        Mode de règlement <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <label
                          className={`cursor-pointer p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                            formData.paymentMethod === "mtn_momo"
                              ? "border-solara-orange bg-solara-orange/5 ring-2 ring-solara-orange/30"
                              : "border-solara-border hover:bg-gray-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value="mtn_momo"
                            checked={formData.paymentMethod === "mtn_momo"}
                            onChange={() => setFormData({ ...formData, paymentMethod: "mtn_momo" })}
                            className="sr-only"
                          />
                          <span className="w-6 h-6 rounded-full bg-yellow-400 text-black font-extrabold text-[10px] flex items-center justify-center">
                            MTN
                          </span>
                          <span className="text-[11px] font-semibold text-solara-charcoal">MTN MoMo</span>
                        </label>

                        <label
                          className={`cursor-pointer p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                            formData.paymentMethod === "moov_money"
                              ? "border-solara-orange bg-solara-orange/5 ring-2 ring-solara-orange/30"
                              : "border-solara-border hover:bg-gray-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value="moov_money"
                            checked={formData.paymentMethod === "moov_money"}
                            onChange={() => setFormData({ ...formData, paymentMethod: "moov_money" })}
                            className="sr-only"
                          />
                          <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-extrabold text-[10px] flex items-center justify-center">
                            MOOV
                          </span>
                          <span className="text-[11px] font-semibold text-solara-charcoal">Moov Money</span>
                        </label>

                        <label
                          className={`cursor-pointer p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                            formData.paymentMethod === "cash_delivery"
                              ? "border-solara-orange bg-solara-orange/5 ring-2 ring-solara-orange/30"
                              : "border-solara-border hover:bg-gray-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value="cash_delivery"
                            checked={formData.paymentMethod === "cash_delivery"}
                            onChange={() => setFormData({ ...formData, paymentMethod: "cash_delivery" })}
                            className="sr-only"
                          />
                          <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                            <Icon name="hand-holding-heart" className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-[11px] font-semibold text-solara-charcoal">À la livraison</span>
                        </label>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full py-3.5 px-6 rounded-2xl bg-solara-orange hover:bg-solara-orange-hover text-white font-semibold text-sm shadow-xl shadow-solara-orange/25 flex items-center justify-center gap-2.5 transition-all disabled:opacity-70"
                      >
                        {isProcessing ? (
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Connexion sécurisée Mobile Money...</span>
                          </div>
                        ) : (
                          <>
                            <span>Confirmer ma commande ({total.toLocaleString("fr-FR")} FCFA)</span>
                            <Icon name="arrow-right" className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[10px] text-center text-solara-muted">
                      Simulation de paiement sécurisée • Récapitulatif envoyé automatiquement par WhatsApp
                    </p>
                  </form>
                </>
              ) : (
                /* Success Screen */
                <div className="text-center py-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-solara-emerald flex items-center justify-center mx-auto mb-2">
                    <Icon name="circle-check" className="w-9 h-9" />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-solara-emerald-soft text-solara-emerald text-xs font-bold uppercase tracking-wider">
                    Commande validée : {orderId}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-solara-emerald">
                    Merci {formData.name} !
                  </h3>

                  <p className="text-xs text-solara-muted max-w-sm mx-auto leading-relaxed">
                    Votre commande de soins bruts a bien été enregistrée pour une livraison à{" "}
                    <strong>{formData.city} ({formData.neighborhood})</strong>. Votre colis est en cours de préparation artisanale.
                  </p>

                  <div className="p-4 rounded-2xl bg-gray-50 border border-solara-border text-left space-y-1.5 text-xs text-solara-charcoal">
                    <div className="flex justify-between font-bold text-solara-emerald">
                      <span>Montant total :</span>
                      <span>{total.toLocaleString("fr-FR")} FCFA</span>
                    </div>
                    <div className="flex justify-between text-solara-muted">
                      <span>Règlement :</span>
                      <span>{formData.paymentMethod === "cash_delivery" ? "Espèces à la réception" : "Mobile Money validé"}</span>
                    </div>
                    <div className="flex justify-between text-solara-muted">
                      <span>Contact livreur :</span>
                      <span>{formData.phone}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all"
                    >
                      <Icon name="whatsapp" className="w-4 h-4 fill-white" />
                      <span>Envoyer mon récapitulatif sur WhatsApp</span>
                    </a>

                    <button
                      onClick={handleFinish}
                      className="w-full py-2.5 px-4 text-xs font-semibold text-solara-emerald hover:text-solara-emerald-light transition-colors"
                    >
                      Retourner à la boutique
                    </button>
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
