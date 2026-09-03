"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  Bookmark,
  UserRound,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useCart } from "../context/CartContext";

interface CategoryMenuData {
  allTitle: string;
  links: {
    label: string;
    hasArrow?: boolean;
    isRed?: boolean;
    href: string;
  }[];
  cards: {
    title: string;
    image: string;
    href: string;
    badge?: string;
  }[];
  featuredImage: string;
  featuredTitle?: string;
}

// Custom P&CO Brand Logo with distinct underline O
export function PCoLogo({ className = "text-current" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center font-black tracking-[0.14em] text-[20px] select-none ${className}`}>
      <span>P&amp;C</span>
      <span className="inline-flex flex-col items-center justify-center ml-[2px] -mt-[1px]">
        <span className="w-[8.5px] h-[8.5px] rounded-full border-[2.2px] border-current" />
        <span className="w-[8.5px] h-[2px] bg-current mt-[1.5px]" />
      </span>
    </div>
  );
}

const menuData: Record<string, CategoryMenuData> = {
  MENS: {
    allTitle: "ALL MEN'S",
    links: [
      { label: "PRODUCT TYPE", hasArrow: true, href: "#product-type" },
      { label: "COLLECTIONS", hasArrow: true, href: "#collections" },
      { label: "NEW ARRIVALS", href: "#new-arrivals" },
      { label: "TRENDING", href: "#trending" },
      { label: "GUIDES", hasArrow: true, href: "#guides" },
      { label: "BACK IN STOCK", href: "#back-in-stock" },
      { label: "BEST SELLERS", href: "#best-sellers" },
      { label: "SALE", isRed: true, href: "#sale" },
    ],
    cards: [
      {
        title: "TRANSITIONAL LAYERS",
        image: "http://pappyneedles.co.uk/wp-content/uploads/2026/08/Gemini_Generated_Image_1e3nxp1e3nxp1e3n.png",
        href: "#transitional-layers",
      },
      {
        title: "THE CRAFTED COLLECTION",
        image: "http://pappyneedles.co.uk/wp-content/uploads/2026/08/IMG_1902.JPG-scaled.jpeg",
        href: "#crafted-collection",
        badge: "Crafted",
      },
    ],
    featuredImage: "https://pappyneedles.co.uk/wp-content/uploads/2026/08/IMG_1889.JPG-scaled.jpeg",
  },
  WOMENS: {
    allTitle: "ALL WOMEN'S",
    links: [
      { label: "PRODUCT TYPE", hasArrow: true, href: "#product-type" },
      { label: "COLLECTIONS", hasArrow: true, href: "#collections" },
      { label: "NEW ARRIVALS", href: "#new-arrivals" },
      { label: "BEST SELLERS", href: "#best-sellers" },
      { label: "DRESSES & TOPS", href: "#dresses" },
      { label: "TROUSERS & DENIM", href: "#denim" },
      { label: "OUTERWEAR", href: "#outerwear" },
      { label: "SALE", isRed: true, href: "#sale" },
    ],
    cards: [
      {
        title: "CULTURE CO-ORD SET",
        image: "https://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-6.32.56-PM.jpeg",
        href: "#coord-set",
      },
      {
        title: "ADIRE RUFFLE SET",
        image: "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-7.07.12-PM-1.jpeg",
        href: "#adire-ruffle",
      },
    ],
    featuredImage: "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-15-at-6.32.56-PM-2.jpeg",
  },
  GOODS: {
    allTitle: "ALL GOODS",
    links: [
      { label: "HEADWEAR & CAPS", href: "#headwear" },
      { label: "LEATHER GOODS", hasArrow: true, href: "#leather" },
      { label: "BAGS & BACKPACKS", href: "#bags" },
      { label: "HOME & CAMPING", href: "#home" },
      { label: "JEWELRY & ACCESSORIES", href: "#jewelry" },
      { label: "GIFT CARDS", href: "#gift-cards" },
      { label: "SALE", isRed: true, href: "#sale" },
    ],
    cards: [
      {
        title: "CANVAS & LEATHER PACKS",
        image: "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-16-at-10.11.19-PM-1.jpeg",
        href: "#packs",
      },
      {
        title: "TRADITIONAL FILA CAPS",
        image: "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-16-at-10.11.31-PM.jpeg",
        href: "#provisions",
      },
    ],
    featuredImage: "http://pappyneedles.co.uk/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-16-at-10.11.20-PM.jpeg",
  },
  SALE: {
    allTitle: "ALL SALE ITEMS",
    links: [
      { label: "MEN'S SALE", hasArrow: true, href: "#mens-sale" },
      { label: "WOMEN'S SALE", hasArrow: true, href: "#womens-sale" },
      { label: "GOODS ON SALE", href: "#goods-sale" },
      { label: "FINAL CHANCE", isRed: true, href: "#final-chance" },
      { label: "LAST SIZES", href: "#last-sizes" },
    ],
    cards: [
      {
        title: "UP TO 40% OFF OUTERWEAR",
        image: "http://pappyneedles.co.uk/wp-content/uploads/2026/08/Gemini_Generated_Image_awan4lawan4lawan.png",
        href: "#outerwear-sale",
      },
      {
        title: "ARCHIVE SALE DROP",
        image: "https://pappyneedles.co.uk/wp-content/uploads/2026/08/Gemini_Generated_Image_7ki52w7ki52w7ki5.png",
        href: "#archive-sale",
      },
    ],
    featuredImage: "https://pappyneedles.co.uk/wp-content/uploads/2026/08/Gemini_Generated_Image_nxqu3fnxqu3fnxqu.png",
  },
};

export default function Navbar() {
  const { openCart, cartCount } = useCart();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  const currentCategory = activeMenu ? menuData[activeMenu] : null;
  const isMenuOpen = !!currentCategory;

  const toggleMobileCategory = (cat: string) => {
    setMobileExpandedCat((prev) => (prev === cat ? null : cat));
  };

  return (
    <div
      className="absolute top-0 left-0 w-full z-50 select-none"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* ================= MOBILE HEADER (matches screenshot) ================= */}
      <nav className="flex md:hidden items-center justify-between px-5 py-4 w-full bg-transparent text-white">
        {/* Left: Hamburger & Search */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
            className="text-white hover:text-[#c28b5b] transition-colors p-1 -ml-1 cursor-pointer"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Search"
            className="text-white hover:text-[#c28b5b] transition-colors p-1 cursor-pointer"
          >
            <Search size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Center: P&CO Brand Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Link href="/" aria-label="P&CO Home">
            <PCoLogo className="text-white transition-colors" />
          </Link>
        </div>

        {/* Right: Account & Cart with Badge (2) */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Account"
            className="text-white hover:text-[#c28b5b] transition-colors p-1 cursor-pointer"
          >
            <UserRound size={22} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open shopping bag (${cartCount} items)`}
            className="relative p-1 cursor-pointer group"
          >
            <ShoppingBag
              size={22}
              strokeWidth={1.5}
              className="text-white group-hover:text-[#c28b5b] transition-colors"
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#a27b53] text-[10.5px] font-bold text-white shadow-xs">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE SLIDE-OUT DRAWER WITH ANIMATION ================= */}
      <div
        className={`fixed inset-0 z-50 flex md:hidden transition-visibility duration-300 ${mobileMenuOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
          }`}
      >
        {/* Backdrop Fade Animation */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel Slide Animation */}
        <div
          className={`relative w-[85%] max-w-[340px] h-full bg-white text-black flex flex-col z-10 shadow-2xl transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 -ml-1 text-black hover:text-[#8f6f4d] hover:rotate-90 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
            <PCoLogo className="text-black" />
            <button
              type="button"
              aria-label="Search"
              className="p-1 -mr-1 text-black hover:text-[#8f6f4d] active:scale-95 transition-transform cursor-pointer"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Drawer Navigation Links with Staggered Entrance */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1 divide-y divide-stone-100 custom-scrollbar">
            {/* Category Links with Expandable Submenus */}
            {(["MENS", "WOMENS", "GOODS", "SALE"] as const).map((cat, catIdx) => {
              const isExpanded = mobileExpandedCat === cat;
              const catData = menuData[cat];

              return (
                <div
                  key={cat}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${catIdx * 45 + 50}ms` : "0ms",
                  }}
                  className={`py-2.5 transition-all duration-300 transform ${mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleMobileCategory(cat)}
                    className={`w-full flex items-center justify-between text-left text-xs font-black tracking-[0.16em] uppercase transition-colors py-1 cursor-pointer ${cat === "SALE" ? "text-red-700" : "text-black hover:text-[#8f6f4d]"
                      }`}
                  >
                    <span>{cat === "MENS" ? "MEN'S" : cat === "WOMENS" ? "WOMEN'S" : cat}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ease-out ${isExpanded ? "rotate-180 text-[#8f6f4d]" : "text-stone-400"
                        }`}
                    />
                  </button>

                  {/* Sublinks Accordion with Smooth Grid Expansion */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      {catData && (
                        <div className="pl-2.5 space-y-2.5 pb-2 pt-1 border-l-2 border-stone-200">
                          <Link
                            href="#all"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[11px] font-extrabold tracking-[0.14em] text-[#8f6f4d] uppercase hover:underline"
                          >
                            {catData.allTitle}
                          </Link>
                          {catData.links.map((sublink, subIdx) => (
                            <Link
                              key={subIdx}
                              href={sublink.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block text-[10.5px] font-semibold tracking-[0.12em] uppercase transition-colors ${sublink.isRed
                                ? "text-red-700 hover:text-red-900"
                                : "text-stone-600 hover:text-black"
                                }`}
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Static Secondary Links */}
            <div
              style={{
                transitionDelay: mobileMenuOpen ? "250ms" : "0ms",
              }}
              className={`pt-3 space-y-3 transition-all duration-300 transform ${mobileMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0"
                }`}
            >
              <Link
                href="#lookbook"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-black tracking-[0.16em] uppercase text-black hover:text-[#8f6f4d] transition-colors"
              >
                LOOKBOOK
              </Link>
              <Link
                href="#brand"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-black tracking-[0.16em] uppercase text-black hover:text-[#8f6f4d] transition-colors"
              >
                BRAND
              </Link>
              <Link
                href="#rewards"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-black tracking-[0.16em] uppercase text-black hover:text-[#8f6f4d] transition-colors"
              >
                REWARDS
              </Link>
            </div>
          </div>

          {/* Drawer Footer */}
          <div
            style={{
              transitionDelay: mobileMenuOpen ? "320ms" : "0ms",
            }}
            className={`p-5 border-t border-stone-200 bg-stone-50 transition-all duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="flex items-center justify-between text-[11px] font-bold tracking-[0.12em] uppercase">
              <Link
                href="#account"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-stone-800 hover:text-black transition-colors"
              >
                <UserRound size={16} /> ACCOUNT
              </Link>
              <Link
                href="#wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-stone-800 hover:text-black transition-colors"
              >
                <Bookmark size={16} /> SAVED
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP NAVBAR ================= */}
      <nav
        className={`hidden md:block w-full transition-colors duration-200 ${isMenuOpen
          ? "bg-white text-black border-b border-stone-200 shadow-xs"
          : "bg-transparent text-white"
          }`}
      >
        <div className="flex items-center justify-between px-8 py-5">
          {/* Left Menu */}
          <div className="flex items-center gap-6 text-[10.5px] font-semibold tracking-[0.15em]">
            {["MENS", "WOMENS", "GOODS", "SALE"].map((item) => {
              const isActive = activeMenu === item;
              return (
                <div
                  key={item}
                  onMouseEnter={() => setActiveMenu(item)}
                  className="cursor-pointer py-1 flex items-center gap-1 group relative"
                >
                  <span
                    className={`transition-colors uppercase border-b border-transparent ${isActive
                      ? "border-[#8f6f4d] text-[#8f6f4d]"
                      : "hover:border-[#8f6f4d] hover:text-[#8f6f4d]"
                      }`}
                  >
                    {item}
                  </span>
                  {isActive ? (
                    <ChevronUp className="w-2.5 h-2.5 text-[#8f6f4d]" />
                  ) : (
                    <ChevronDown className="w-2.5 h-2.5 opacity-80 group-hover:text-[#8f6f4d]" />
                  )}
                </div>
              );
            })}

            <Link
              href="#lookbook"
              onMouseEnter={() => setActiveMenu(null)}
              className="transition-colors py-1 uppercase border-b border-transparent hover:border-[#8f6f4d] hover:text-[#8f6f4d]"
            >
              LOOKBOOK
            </Link>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" onMouseEnter={() => setActiveMenu(null)}>
              <PCoLogo className="transition-colors text-2xl" />
            </Link>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-8 text-[10.5px] font-semibold tracking-[0.15em]">
              <Link
                href="#brand"
                onMouseEnter={() => setActiveMenu(null)}
                className="transition-colors uppercase border-b border-transparent hover:border-[#8f6f4d] hover:text-[#8f6f4d]"
              >
                BRAND
              </Link>
              <Link
                href="#rewards"
                onMouseEnter={() => setActiveMenu(null)}
                className="transition-colors uppercase border-b border-transparent hover:border-[#8f6f4d] hover:text-[#8f6f4d]"
              >
                REWARDS
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Search"
                className="cursor-pointer hover:text-[#8f6f4d] transition-colors"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Wishlist"
                className="cursor-pointer hover:text-[#8f6f4d] transition-colors"
              >
                <Bookmark size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Account"
                className="cursor-pointer hover:text-[#8f6f4d] transition-colors"
              >
                <UserRound size={19} strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={openCart}
                aria-label={`Open shopping bag (${cartCount} items)`}
                className="relative cursor-pointer hover:text-[#8f6f4d] transition-colors group p-0.5"
              >
                <ShoppingBag size={19} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span
                    className={`absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${isMenuOpen
                      ? "bg-black text-white"
                      : "bg-[#a27b53] text-white"
                      }`}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Screen-Height Mega Menu Dropdown */}
      {isMenuOpen && currentCategory && (
        <div
          className="w-full h-[calc(100vh-65px)] flex text-black animate-in fade-in duration-150"
          onMouseEnter={() => setActiveMenu(activeMenu)}
        >
          {/* Left Column: Menu Links & Thumbnail Cards */}
          <div className="w-[280px] sm:w-[300px] shrink-0 border-r border-stone-200 h-full overflow-y-auto px-8 py-7 flex flex-col justify-between custom-scrollbar bg-white">
            {/* Top Navigation Links */}
            <div className="space-y-4">
              {/* Main ALL Category Link */}
              <Link
                href="#all"
                className="block text-[11px] font-extrabold tracking-[0.18em] text-black uppercase hover:text-[#8f6f4d] transition-colors"
              >
                {currentCategory.allTitle}
              </Link>

              {/* Category Sublinks */}
              <div className="space-y-3.5 pt-1">
                {currentCategory.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className={`flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors group ${link.isRed
                      ? "text-red-700 hover:text-red-800"
                      : "text-stone-800 hover:text-[#8f6f4d]"
                      }`}
                  >
                    <span>{link.label}</span>
                    {link.hasArrow && (
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#8f6f4d] group-hover:translate-x-0.5 transition-all" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom 2 Featured Thumbnail Cards */}
            <div className="space-y-4 pt-8 border-t border-stone-100 mt-6">
              {currentCategory.cards.map((card, cardIdx) => (
                <Link
                  key={cardIdx}
                  href={card.href}
                  className="group block space-y-1.5 cursor-pointer"
                >
                  <div className="relative aspect-16/10 w-full bg-stone-100 overflow-hidden rounded-[1px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="280px"
                    />
                    {card.badge && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                        <span className="font-serif italic text-white text-lg tracking-wider drop-shadow-sm">
                          {card.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-[9.5px] font-bold tracking-[0.18em] uppercase text-stone-900 group-hover:text-stone-600 transition-colors">
                    {card.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Middle Column: Large Portrait Editorial Showcase — fills edge to edge */}
          <div className="w-[380px] lg:w-[420px] shrink-0 h-full overflow-hidden bg-white relative group cursor-pointer">
            <Image
              src={currentCategory.featuredImage}
              alt="Featured Editorial"
              fill
              priority
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 380px, 420px"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
          </div>

          {/* Right Area: Solid dark click-to-close zone */}
          <div
            className="flex-1 h-full bg-black/50 cursor-pointer"
            onClick={() => setActiveMenu(null)}
          />
        </div>
      )}
    </div>
  );
}