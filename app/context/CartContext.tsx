"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string | number;
  productId?: number;
  title: string;
  price: number;
  image: string;
  size?: string;
  style?: string;
  quantity: number;
  isSaved?: boolean;
}

interface CartContextType {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  activeTab: "bag" | "saved";
  setActiveTab: (tab: "bag" | "saved") => void;
  items: CartItem[];
  savedItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  removeFromCart: (id: string | number) => void;
  toggleSaveItem: (id: string | number) => void;
  moveToCart: (id: string | number) => void;
  cartCount: number;
  subtotal: number;
  freeDeliveryThreshold: number;
  qualifiesForFreeDelivery: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: "bella-dress-1",
    productId: 2,
    title: "BELLA REVERSIBLE MINI DENIM DRESS - PLAID & RAW INDIGO",
    price: 95.0,
    image: "/products/p4.jpg",
    size: "10",
    style: "REVERSIBLE",
    quantity: 2,
    isSaved: false,
  },
];

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"bag" | "saved">("bag");
  const [items, setItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [savedItems, setSavedItems] = useState<CartItem[]>([]);

  const freeDeliveryThreshold = 100.0;

  const openCart = () => {
    setActiveTab("bag");
    setIsCartOpen(true);
  };

  const closeCart = () => setIsCartOpen(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const addToCart = (newItem: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    const qty = newItem.quantity || 1;
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (i) => i.id === newItem.id || (newItem.productId && i.productId === newItem.productId && i.size === newItem.size)
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qty,
        };
        return updated;
      }

      return [
        ...prevItems,
        {
          ...newItem,
          quantity: qty,
        },
      ];
    });
    openCart();
  };

  const updateQuantity = (id: string | number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id: string | number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleSaveItem = (id: string | number) => {
    setItems((prevItems) => {
      const targetItem = prevItems.find((item) => item.id === id);
      if (!targetItem) return prevItems;

      const nextSavedState = !targetItem.isSaved;
      if (nextSavedState) {
        setSavedItems((prevSaved) => [
          ...prevSaved.filter((i) => i.id !== id),
          { ...targetItem, isSaved: true },
        ]);
      } else {
        setSavedItems((prevSaved) => prevSaved.filter((i) => i.id !== id));
      }

      return prevItems.map((item) =>
        item.id === id ? { ...item, isSaved: nextSavedState } : item
      );
    });
  };

  const moveToCart = (id: string | number) => {
    const targetSaved = savedItems.find((i) => i.id === id);
    if (targetSaved) {
      addToCart({ ...targetSaved, quantity: 1, isSaved: false });
      setSavedItems((prev) => prev.filter((i) => i.id !== id));
      setActiveTab("bag");
    }
  };

  // Prevent background scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen]);

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const qualifiesForFreeDelivery = subtotal >= freeDeliveryThreshold;

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        activeTab,
        setActiveTab,
        items,
        savedItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        toggleSaveItem,
        moveToCart,
        cartCount,
        subtotal,
        freeDeliveryThreshold,
        qualifiesForFreeDelivery,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
