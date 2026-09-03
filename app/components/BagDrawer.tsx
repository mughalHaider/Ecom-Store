"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag, Bookmark } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";

export default function BagDrawer() {
  const { formatPrice } = useCurrency();
  const {
    isCartOpen,
    closeCart,
    activeTab,
    setActiveTab,
    items,
    savedItems,
    updateQuantity,
    removeFromCart,
    toggleSaveItem,
    moveToCart,
    subtotal,
    freeDeliveryThreshold,
    qualifiesForFreeDelivery,
  } = useCart();

  const deliveryProgress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  return (
    <div
      className={`fixed inset-0 z-50 transition-visibility duration-300 ${isCartOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
        }`}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag Sidebar"
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out ${isCartOpen ? "opacity-100" : "opacity-0"
          }`}
        onClick={closeCart}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-[440px] bg-white text-black flex flex-col z-10 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* ─── Top Header Bar ─── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black">
          {/* Left: Tab Title */}
          <h2 className="text-sm sm:text-base font-black tracking-[0.14em] uppercase text-black">
            {activeTab === "bag" ? "BAG" : "SAVED"}
          </h2>

          {/* Center: Bag / Bookmark Tab Toggle */}
          <div className="flex items-center border border-black overflow-hidden select-none">
            <button
              type="button"
              onClick={() => setActiveTab("bag")}
              aria-label="View shopping bag"
              className={`w-9 h-8 flex items-center justify-center transition-colors cursor-pointer ${activeTab === "bag"
                  ? "bg-[#dedede] text-black"
                  : "bg-white text-stone-600 hover:bg-stone-50"
                }`}
            >
              <ShoppingBag size={17} strokeWidth={1.5} />
            </button>
            <div className="w-[1px] h-8 bg-black" />
            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              aria-label="View saved items"
              className={`w-9 h-8 flex items-center justify-center transition-colors cursor-pointer ${activeTab === "saved"
                  ? "bg-[#dedede] text-black"
                  : "bg-white text-stone-600 hover:bg-stone-50"
                }`}
            >
              <Bookmark size={17} strokeWidth={1.5} />
            </button>
          </div>

          {/* Right: Close Button */}
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close drawer"
            className="p-1 text-black hover:opacity-70 transition-opacity cursor-pointer"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* ─── Free Delivery Announcement Banner ─── */}
        <div className="py-4 px-6 border-b border-stone-200 bg-[#FAFAFA]">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.12em] text-center text-black uppercase mb-2.5">
            {qualifiesForFreeDelivery
              ? "YOUR ORDER QUALIFIES FOR FREE DELIVERY"
              : `ADD ${formatPrice(Math.max(0, freeDeliveryThreshold - subtotal))} MORE FOR FREE DELIVERY`}
          </p>
          {/* Framed Progress Bar */}
          <div className="w-full h-3 border border-black bg-white p-[1.5px] overflow-hidden">
            <div
              className="h-full bg-[#1b4d24] transition-all duration-300"
              style={{ width: `${deliveryProgress}%` }}
            />
          </div>
        </div>

        {/* ─── Body Content ─── */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {activeTab === "bag" ? (
            /* BAG TAB VIEW */
            items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <ShoppingBag size={42} strokeWidth={1.2} className="text-stone-300 mb-4" />
                <h3 className="text-sm font-black tracking-[0.14em] uppercase text-black">
                  YOUR BAG IS EMPTY
                </h3>
                <p className="text-xs text-stone-500 mt-2 mb-6">
                  Items you add to your bag will appear here.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="bg-black hover:bg-stone-800 text-white px-6 py-3 text-xs font-black tracking-[0.16em] uppercase transition-colors cursor-pointer"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              <div className="divide-y divide-stone-100">
                {items.map((item) => (
                  <div key={item.id} className="p-6 flex gap-4">
                    {/* Thumbnail Image */}
                    <div className="relative w-22 h-26 sm:w-24 sm:h-28 bg-[#f5f4f0] shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 88px, 96px"
                      />
                    </div>

                    {/* Product Details & Actions */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Title and Total Price */}
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-xs sm:text-[13px] font-black tracking-tight text-black uppercase leading-tight line-clamp-2">
                            {item.title}
                          </h3>
                          <span className="text-xs sm:text-[13px] font-bold text-black shrink-0">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>

                        {/* Size & Style */}
                        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] text-stone-600 uppercase mt-1">
                          {item.size && `SIZE: ${item.size}`}{" "}
                          {item.style && `STYLE: ${item.style}`}
                        </p>
                      </div>

                      {/* Bottom Row: Quantity Controls and Actions */}
                      <div className="flex items-center justify-between mt-4 pt-1">
                        {/* Quantity Counter: - 2 + */}
                        <div className="flex items-center gap-3 text-xs font-bold text-black">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="hover:opacity-60 transition-opacity p-0.5 cursor-pointer font-bold text-sm"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold w-4 text-center select-none">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="hover:opacity-60 transition-opacity p-0.5 cursor-pointer font-bold text-sm"
                          >
                            +
                          </button>
                        </div>

                        {/* Actions: Bookmark & Remove (Bag Outline) */}
                        <div className="flex items-center gap-3.5">
                          <button
                            type="button"
                            onClick={() => toggleSaveItem(item.id)}
                            className="text-black hover:text-[#8f6f4d] transition-colors p-1 cursor-pointer"
                            aria-label={item.isSaved ? "Saved to wishlist" : "Save for later"}
                          >
                            <Bookmark
                              size={17}
                              strokeWidth={1.5}
                              className={item.isSaved ? "fill-black" : ""}
                            />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-black hover:opacity-60 transition-opacity p-1 cursor-pointer"
                            aria-label="Remove item from bag"
                          >
                            <ShoppingBag size={17} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            /* SAVED / BOOKMARK TAB VIEW */
            savedItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <Bookmark size={42} strokeWidth={1.2} className="text-stone-300 mb-4" />
                <h3 className="text-sm font-black tracking-[0.14em] uppercase text-black">
                  NO SAVED ITEMS
                </h3>
                <p className="text-xs text-stone-500 mt-2 mb-6">
                  Items you save from your bag or browsing will be stored here.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab("bag")}
                  className="bg-black hover:bg-stone-800 text-white px-6 py-3 text-xs font-black tracking-[0.16em] uppercase transition-colors cursor-pointer"
                >
                  VIEW BAG
                </button>
              </div>
            ) : (
              <div className="divide-y divide-stone-100">
                {savedItems.map((item) => (
                  <div key={item.id} className="p-6 flex gap-4">
                    <div className="relative w-22 h-26 bg-[#f5f4f0] shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center"
                        sizes="88px"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-xs sm:text-[13px] font-black tracking-tight text-black uppercase leading-tight line-clamp-2">
                            {item.title}
                          </h3>
                          <span className="text-xs sm:text-[13px] font-bold text-black shrink-0">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] text-stone-600 uppercase mt-1">
                          {item.size && `SIZE: ${item.size}`}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <button
                          type="button"
                          onClick={() => moveToCart(item.id)}
                          className="text-[11px] font-bold tracking-[0.12em] uppercase text-black underline hover:text-[#8f6f4d] cursor-pointer"
                        >
                          MOVE TO BAG
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleSaveItem(item.id)}
                          className="p-1 text-stone-400 hover:text-black transition-colors cursor-pointer"
                          aria-label="Remove from saved"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* ─── Bottom Footer & Checkout CTA ─── */}
        {activeTab === "bag" && items.length > 0 && (
          <div className="border-t border-black/10 p-6 bg-white space-y-3">
            <div className="flex items-center justify-between text-xs font-bold tracking-[0.14em] uppercase text-black">
              <span>SUBTOTAL</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <p className="text-[10.5px] text-stone-500 uppercase tracking-wider text-center">
              Shipping &amp; taxes calculated at checkout
            </p>
            <button
              type="button"
              className="w-full bg-black hover:bg-[#1a1a1a] text-white py-3.5 px-4 text-xs font-black tracking-[0.18em] uppercase transition-colors cursor-pointer shadow-xs active:scale-[0.99]"
            >
              CHECKOUT • {formatPrice(subtotal)}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
