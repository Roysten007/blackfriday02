"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { QUIZ_QUESTIONS, PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Icon } from "@/components/common/Icon";

export const SkincareQuiz: React.FC = () => {
  const { addItem, setIsCartOpen } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [recommendedProductId, setRecommendedProductId] = useState<string | null>(null);

  const handleSelectOption = (questionId: number, recommendId: string) => {
    const nextAnswers = { ...answers, [questionId]: recommendId };
    setAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Determine final recommendation
      // If majority or last question
      const counts: Record<string, number> = {};
      Object.values(nextAnswers).forEach((id) => {
        counts[id] = (counts[id] || 0) + 1;
      });
      let bestId = recommendId;
      let maxCount = 0;
      Object.entries(counts).forEach(([id, c]) => {
        if (c > maxCount) {
          maxCount = c;
          bestId = id;
        }
      });
      setRecommendedProductId(bestId);
    }
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendedProductId(null);
  };

  const recommendedProduct = recommendedProductId
    ? PRODUCTS.find((p) => p.id === recommendedProductId) || PRODUCTS[0]
    : null;

  return (
    <section id="diagnostic" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-solara-emerald-soft text-solara-emerald text-xs font-bold uppercase tracking-wider">
            <Icon name="spa" className="w-3.5 h-3.5" />
            <span>Diagnostic en 30 secondes</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-solara-emerald tracking-tight">
            Quel soin brut est fait pour votre peau ?
          </h2>
          <p className="text-sm text-solara-muted max-w-lg mx-auto">
            Répondez à 3 questions simples pour cibler la matière première active qui transformera votre confort cutané dès cette semaine.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-solara-emerald-soft/30 rounded-3xl p-6 sm:p-10 border border-solara-border shadow-xl relative min-h-[380px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {!recommendedProduct ? (
              /* Questions Steps */
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Step progress bar */}
                  <div className="flex items-center justify-between text-xs text-solara-muted mb-3">
                    <span className="font-bold text-solara-emerald">
                      Question {currentStep + 1} sur {QUIZ_QUESTIONS.length}
                    </span>
                    <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-solara-border h-1.5 rounded-full overflow-hidden mb-6">
                    <div
                      className="bg-solara-emerald h-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-solara-charcoal mb-1">
                    {QUIZ_QUESTIONS[currentStep].title}
                  </h3>
                  <p className="text-xs text-solara-muted mb-6">
                    {QUIZ_QUESTIONS[currentStep].subtitle}
                  </p>

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {QUIZ_QUESTIONS[currentStep]?.options.map((opt: { label: string; description: string; icon: string; recommendProductId: string }, optIdx: number) => (
                      <motion.button
                        key={optIdx}
                        whileHover={{ y: -4, borderColor: "#0E5A45" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          handleSelectOption(QUIZ_QUESTIONS[currentStep].id, opt.recommendProductId)
                        }
                        className="p-5 rounded-2xl bg-white border border-solara-border text-left hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
                      >
                        <span className="w-10 h-10 rounded-xl bg-solara-emerald-soft text-solara-emerald group-hover:bg-solara-emerald group-hover:text-white flex items-center justify-center transition-colors">
                          <Icon name={opt.icon} className="w-4 h-4" />
                        </span>
                        <div>
                          <span className="font-serif font-bold text-sm text-solara-charcoal block group-hover:text-solara-emerald transition-colors">
                            {opt.label}
                          </span>
                          <span className="text-xs text-solara-muted leading-relaxed block mt-1">
                            {opt.description}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {currentStep > 0 && (
                  <div className="pt-4 border-t border-solara-border/50">
                    <button
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="text-xs font-semibold text-solara-muted hover:text-solara-emerald flex items-center gap-1.5 transition-colors"
                    >
                      <Icon name="arrow-left" className="w-3 h-3" />
                      <span>Question précédente</span>
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              /* Recommendation Screen */
              <motion.div
                key="recommendation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 pb-4 border-b border-solara-border">
                  <div>
                    <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-solara-orange">
                      Diagnostic personnalisé terminé
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-solara-emerald">
                      Votre rituel fondamental recommandé
                    </h3>
                  </div>
                  <button
                    onClick={restartQuiz}
                    className="text-xs font-medium text-solara-muted hover:text-solara-emerald underline flex items-center gap-1"
                  >
                    <Icon name="rotate-left" className="w-3 h-3" />
                    <span>Recommencer le test</span>
                  </button>
                </div>

                {/* Recommended Product Box */}
                <div className="bg-white rounded-2xl p-6 border border-solara-border shadow-md flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-40 h-40 rounded-2xl overflow-hidden shrink-0 bg-solara-emerald-soft">
                    <Image
                      src={recommendedProduct.image}
                      alt={recommendedProduct.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-solara-orange text-white text-[10px] font-bold">
                      -{recommendedProduct.discountPercent}% BF
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 text-center md:text-left">
                    <div>
                      <span className="text-xs font-semibold text-solara-emerald block">
                        Origine : {recommendedProduct.origin}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-solara-charcoal">
                        {recommendedProduct.name}
                      </h4>
                      <p className="text-xs text-solara-muted font-medium mt-0.5">
                        {recommendedProduct.volume} • {recommendedProduct.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-solara-charcoal/80 leading-relaxed">
                      {recommendedProduct.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-medium text-solara-emerald">
                      {recommendedProduct.benefits.map((b, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <Icon name="check" className="w-3 h-3 text-solara-orange" />
                          <span>{b.label}</span>
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                      <div>
                        <span className="text-xs text-gray-400 line-through mr-2">
                          {recommendedProduct.originalPrice.toLocaleString("fr-FR")} F
                        </span>
                        <span className="font-serif text-2xl font-extrabold text-solara-orange">
                          {recommendedProduct.salePrice.toLocaleString("fr-FR")} FCFA
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          addItem(recommendedProduct, 1);
                          setIsCartOpen(true);
                        }}
                        className="py-3 px-6 rounded-xl bg-solara-orange hover:bg-solara-orange-hover text-white font-semibold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all"
                      >
                        <Icon name="plus" className="w-3.5 h-3.5" />
                        <span>Ajouter ma routine au panier</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
