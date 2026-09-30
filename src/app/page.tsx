"use client";

import React from "react";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { OriginSection } from "@/components/sections/OriginSection";
import { ProductsPinnedScroll } from "@/components/sections/ProductsPinnedScroll";
import { CustomBoxBuilder } from "@/components/sections/CustomBoxBuilder";
import { SkincareQuiz } from "@/components/sections/SkincareQuiz";
import { HeroBundleCard } from "@/components/sections/HeroBundleCard";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Ruban fin avec compte à rebours discret en pilule */}
      <AnnouncementBar />

      {/* 2. Header transparent avec panier et liens d'ancres */}
      <Header />

      {/* 3. Hero en deux colonnes avec typographie animée et arche visuelle */}
      <Hero />

      {/* 4. Marquee d'ingrédients défilant avec icônes Font Awesome */}
      <Marquee />

      {/* 5. Section origine sur fond vert émeraude & 3 engagements démo */}
      <OriginSection />

      {/* 6. Produits en défilement horizontal fluide avec jauge et bénéfices */}
      <ProductsPinnedScroll />

      {/* 7. "Compose ton coffret" (3 parmi 6 avec remise -15% en direct) */}
      <CustomBoxBuilder />

      {/* 8. Mini-quiz de 3 questions avec recommandation ciblée */}
      <SkincareQuiz />

      {/* 9. Coffret vedette en carte large (méthode Hormozi & garantie 7j) */}
      <HeroBundleCard />

      {/* 10. Avis clients en cartes asymétriques (marqués démo) */}
      <ReviewsSection />

      {/* 11. FAQ anti-objections détaillée */}
      <FaqSection />

      {/* 12. CTA final sur fond vert émeraude avec compte à rebours */}
      <FinalCta />

      {/* 13. Footer éditorial chaleureux */}
      <Footer />
    </main>
  );
}
