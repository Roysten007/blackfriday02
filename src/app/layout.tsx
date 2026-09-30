import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CustomCursor } from "@/components/common/CustomCursor";
import { Toast } from "@/components/common/Toast";
// WhatsApp button removed
import { MobileStickyBar } from "@/components/common/MobileStickyBar";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CheckoutModal } from "@/components/cart/CheckoutModal";

export const metadata: Metadata = {
  title: "SOLARA • La peau mérite du vrai | Black Friday Soins Naturels d'Afrique de l'Ouest",
  description:
    "Semaine Black Friday SOLARA : jusqu'à -40% sur les soins bruts d'Afrique de l'Ouest (karité sauvage d'Atacora, moringa bio, savon noir traditionnel, argile verte). Garantie confort 7 jours.",
  keywords: [
    "SOLARA",
    "soins naturels Afrique de l'Ouest",
    "beurre de karité pur Bénin",
    "savon noir africain",
    "huile de moringa",
    "Black Friday beauté naturelle",
    "Cotonou",
    "Abidjan",
  ],
  authors: [{ name: "SOLARA Botanicals" }],
  creator: "SOLARA",
  openGraph: {
    title: "SOLARA • Jusqu'à -40% sur le rituel de votre peau | Black Friday",
    description:
      "La peau mérite du vrai : découvrez nos soins bruts du Sahel sans parfum synthétique. Offres exclusives du 27 au 30 novembre.",
    url: "https://solara-skincare.com",
    siteName: "SOLARA Skincare",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/coffret-rituel.jpg",
        width: 1200,
        height: 630,
        alt: "SOLARA - Rituel de beauté naturelle d'Afrique de l'Ouest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLARA • Jusqu'à -40% Black Friday",
    description: "La peau mérite du vrai : nos soins bruts du Sahel et d'Afrique de l'Ouest.",
    images: ["/images/coffret-rituel.jpg"],
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-white text-solara-charcoal selection:bg-solara-emerald selection:text-white antialiased font-sans">
        <LanguageProvider>
          <CartProvider>
            <CustomCursor />
            {children}
            <CartDrawer />
            <CheckoutModal />
            <Toast />
            <MobileStickyBar />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
