"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/types";
import { BUNDLE_HERO } from "@/data/products";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  addBundleHero: () => void;
  addCustomBox: (selectedProducts: Product[]) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  promoCode: string;
  isPromoApplied: boolean;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  subtotal: number;
  promoDiscount: number;
  total: number;
  totalItemsCount: number;
  toastMessage: string | null;
  clearToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize with the Hero bundle or empty
  useEffect(() => {
    try {
      const saved = localStorage.getItem("solara_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("solara_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3800);
  };

  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && !item.isBundle);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && !item.isBundle
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, isBundle: false }];
    });
    triggerToast(`« ${product.name} » a été ajouté à votre rituel.`);
  };

  const addBundleHero = () => {
    const bundleProduct: Product = {
      id: BUNDLE_HERO.id,
      name: BUNDLE_HERO.name,
      volume: "3 soins complets + spatule + guide",
      tagline: BUNDLE_HERO.subtitle,
      originalPrice: BUNDLE_HERO.totalValue,
      salePrice: BUNDLE_HERO.salePrice,
      discountPercent: Math.round(((BUNDLE_HERO.totalValue - BUNDLE_HERO.salePrice) / BUNDLE_HERO.totalValue) * 100),
      stockLeft: BUNDLE_HERO.stockLeft,
      initialStock: BUNDLE_HERO.initialStock,
      image: BUNDLE_HERO.image,
      description: "Le trio fondamental complet avec garantie 7 jours et cadeaux offerts.",
      benefits: [
        { icon: "check-double", label: "Trio Karité + Savon noir + Baume lèvres" },
        { icon: "gift", label: "Spatule manguier gravée + Guide rituel" },
        { icon: "shield-halved", label: "Garantie satisfait ou remboursé 7j" }
      ],
      origin: "Atacora & Cotonou",
      usageTip: "Commencer par le savon le soir, sceller avec le karité, nourrir les lèvres à volonté."
    };

    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === BUNDLE_HERO.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === BUNDLE_HERO.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product: bundleProduct, quantity: 1, isBundle: true }];
    });
    triggerToast("Le Coffret Vedette « Rituel Peau Douce » est ajouté au panier !");
  };

  const addCustomBox = (selectedProducts: Product[]) => {
    if (selectedProducts.length !== 3) return;
    const rawTotal = selectedProducts.reduce((sum, p) => sum + p.salePrice, 0);
    const boxSalePrice = Math.round(rawTotal * 0.85); // -15% additional
    const boxId = `custom-box-${Date.now()}`;
    const boxNames = selectedProducts.map((p) => p.name).join(" + ");

    const customProduct: Product = {
      id: boxId,
      name: "Mon Coffret Rituel Sur-Mesure",
      volume: "3 soins personnalisés (-15% direct)",
      tagline: boxNames,
      originalPrice: rawTotal,
      salePrice: boxSalePrice,
      discountPercent: 15,
      stockLeft: 10,
      initialStock: 20,
      image: selectedProducts[0].image,
      description: `Coffret composé avec soin : ${boxNames}`,
      benefits: selectedProducts.map((p) => ({ icon: "check", label: p.name })),
      origin: "Artisanat Ouest-Africain",
      usageTip: "Votre routine personnalisée matin et soir."
    };

    setItems((prev) => [...prev, { product: customProduct, quantity: 1, isBundle: true, bundleItems: selectedProducts }]);
    triggerToast("Votre coffret sur-mesure (-15% appliqué) a été ajouté !");
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setIsPromoApplied(false);
    setPromoCode("");
  };

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "PEAU15") {
      setIsPromoApplied(true);
      setPromoCode("PEAU15");
      triggerToast("Code PEAU15 activé : -15% de remise supplémentaire !");
      return { success: true, message: "Code PEAU15 appliqué avec succès (-15%) !" };
    }
    return { success: false, message: "Code promo invalide. Utilisez le code PEAU15." };
  };

  const removePromoCode = () => {
    setIsPromoApplied(false);
    setPromoCode("");
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.salePrice * item.quantity, 0);
  const promoDiscount = isPromoApplied ? Math.round(subtotal * 0.15) : 0;
  const total = Math.max(0, subtotal - promoDiscount);
  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        addBundleHero,
        addCustomBox,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        promoCode,
        isPromoApplied,
        applyPromoCode,
        removePromoCode,
        subtotal,
        promoDiscount,
        total,
        totalItemsCount,
        toastMessage,
        clearToast: () => setToastMessage(null),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
