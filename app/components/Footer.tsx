"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PCoLogo } from "./Navbar";

export default function Footer() {
  const [interest, setInterest] = useState<"ALL" | "MENS" | "WOMENS">("ALL");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <footer className="relative w-full text-white bg-stone-950 overflow-hidden select-none border-t border-white/20">
      {/* Background Image with Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/carousel/slider2.jpg"
          alt="P&CO Journey"
          fill
          className="object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90" />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        {/* ================= 1. INFINITE SCROLLING MARQUEE ================= */}
        <div className="w-full py-8 md:py-12 border-b border-white/15 overflow-hidden">
          <div className="animate-marquee select-none">
            {[0, 1].map((copyIdx) => (
              <div
                key={copyIdx}
                className="flex items-center gap-24 shrink-0 pr-24 sm:pr-32 md:pr-40 lg:pr-48 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white/95 font-sans"
              >
                <span>CLOTHING</span>
                <span>FOR</span>
                <span>PURPOSEFUL</span>
                <span>LIVING</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 2. NEWSLETTER SIGN UP BAR ================= */}
        <div className="w-full border-b border-white/15 px-6 sm:px-10 py-5 lg:py-6 bg-black/40 backdrop-blur-xs">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            {/* Left: Brand & Message */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:border-r border-white/15 lg:pr-8">
              <PCoLogo className="text-white text-xl shrink-0" />
              <p className="text-[10.5px] sm:text-[11px] font-mono tracking-[0.14em] uppercase text-stone-300 max-w-[220px] leading-tight">
                SIGN UP TO OUR NEWSLETTER FOR TAILORED OFFERS
              </p>
            </div>

            {/* Middle: Category Checkboxes */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[10.5px] font-mono tracking-[0.14em] uppercase text-stone-300">
              <span className="text-stone-400 font-bold">I&apos;M INTERESTED IN:</span>
              {(["ALL", "MENS", "WOMENS"] as const).map((cat) => (
                <label
                  key={cat}
                  className="inline-flex items-center gap-2 cursor-pointer hover:text-white transition-colors"
                >
                  <input
                    type="radio"
                    name="interest"
                    checked={interest === cat}
                    onChange={() => setInterest(cat)}
                    className="w-3.5 h-3.5 rounded-none border border-white/50 bg-transparent text-white focus:ring-0 focus:outline-none cursor-pointer accent-[#8f6f4d]"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>

            {/* Right: Email Input + Submit */}
            <div className="flex items-center border border-white/30 hover:border-white/60 focus-within:border-white transition-colors bg-white/5 px-3 py-2 flex-1 lg:max-w-md">
              <input
                type="email"
                required
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-white placeholder:text-stone-500 text-xs font-mono tracking-[0.16em] uppercase focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-white hover:text-[#c28b5b] transition-colors font-mono cursor-pointer shrink-0 pl-3 border-l border-white/20"
              >
                <span>SUBMIT</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* ================= 3. MAIN FOOTER LINKS & DETAILS ================= */}
        <div className="w-full px-6 sm:px-10 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-white/15">
          {/* Links Section (Col 1 to 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-start gap-8 sm:gap-12">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-stone-500 font-bold [writing-mode:vertical-lr] rotate-180">
                LINKS
              </span>

              {/* 3 Columns of sub-links */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 flex-1 text-[11px] font-bold tracking-[0.16em] uppercase font-mono">
                <div className="space-y-3">
                  <Link href="#rewards" className="block hover:text-[#c28b5b] transition-colors">
                    REWARDS
                  </Link>
                  <Link href="#account" className="block hover:text-[#c28b5b] transition-colors">
                    ACCOUNT
                  </Link>
                  <Link href="#help" className="block hover:text-[#c28b5b] transition-colors">
                    HELP CENTER
                  </Link>
                  <Link href="#support" className="block hover:text-[#c28b5b] transition-colors">
                    SUPPORT
                  </Link>
                </div>

                <div className="space-y-3">
                  <Link href="#reviews" className="block hover:text-[#c28b5b] transition-colors">
                    REVIEWS
                  </Link>
                  <Link href="#returns" className="block hover:text-[#c28b5b] transition-colors">
                    RETURNS POLICY
                  </Link>
                  <Link href="#portal" className="block hover:text-[#c28b5b] transition-colors">
                    RETURNS PORTAL
                  </Link>
                </div>

                <div className="space-y-3">
                  <Link href="#contact" className="block hover:text-[#c28b5b] transition-colors">
                    CONTACT
                  </Link>
                  <Link href="#careers" className="block hover:text-[#c28b5b] transition-colors">
                    CAREERS
                  </Link>
                  <Link href="#flagship" className="block hover:text-[#c28b5b] transition-colors">
                    FLAGSHIP STORE
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Socials Section (Col 6 to 8) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-start gap-6">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-stone-500 font-bold [writing-mode:vertical-lr] rotate-180">
                SOCIALS
              </span>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[11px] font-bold tracking-[0.16em] uppercase font-mono">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c28b5b] transition-colors"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c28b5b] transition-colors"
                >
                  TIKTOK
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c28b5b] transition-colors"
                >
                  YOUTUBE
                </a>
                <Link href="#store" className="hover:text-[#c28b5b] transition-colors">
                  FLAGSHIP STORE
                </Link>
              </div>
            </div>
          </div>

          {/* The Store Address (Col 9 to 12) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row sm:items-start justify-between gap-8 lg:border-l border-white/15 lg:pl-8">
            <div className="flex items-start gap-4">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-stone-500 font-bold [writing-mode:vertical-lr] rotate-180">
                THE STORE
              </span>
              <div className="space-y-3 text-[11px] font-mono tracking-[0.14em] uppercase text-stone-300">
                <div>
                  <p className="text-white font-bold">103 COMMERCIAL ST,</p>
                  <p>LONDON E1 6DG</p>
                </div>
                <div className="text-stone-400 space-y-0.5 text-[10.5px]">
                  <p>MON-FRI: 11-7</p>
                  <p>SAT: 10-7</p>
                  <p>SUN: 11-5:30</p>
                </div>
              </div>
            </div>

            {/* Country Selector */}
            <div className="flex flex-col items-start sm:items-end justify-between self-end sm:self-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 hover:border-white text-[11px] font-mono uppercase tracking-[0.14em] transition-colors cursor-pointer bg-black/40">
                <span>COUNTRY: 🇳🇬 NG (₦/NGN)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 4. BOTTOM COPYRIGHT BAR ================= */}
        <div className="w-full px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono tracking-[0.18em] uppercase text-stone-500 bg-black/60">
          <div>CLARK &amp; TIMMS LTD.</div>
          <div>SITE BY SHOPIFY AGENCY - CAKE AGENCY</div>
        </div>
      </div>
    </footer>
  );
}
