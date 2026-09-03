"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getSymbolByCurrencyCode } from "../lib/countryToCurrency";

interface CurrencyContextType {
  currency: string;
  symbol: string;
  rate: number;
  formatPrice: (price: string | number) => string;
  convertPrice: (price: string | number) => number;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "NGN",
  symbol: "₦",
  rate: 1,
  formatPrice: (p) => (typeof p === "number" ? `₦${p.toFixed(2)}` : String(p)),
  convertPrice: (p) => (typeof p === "number" ? p : parseFloat(String(p).replace(/[^\d.]/g, "")) || 0),
});

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (!match) return null;
  try {
    return decodeURIComponent(decodeURIComponent(match[2]));
  } catch {
    return decodeURIComponent(match[2]);
  }
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<string>("NGN");
  const [symbol, setSymbol] = useState<string>("₦");
  const [rate, setRate] = useState<number>(1);

  useEffect(() => {
    // Read user currency and exchange rate initialized by middleware cookies
    const cookieCurrency = getCookie("user_currency");
    const cookieRate = getCookie("user_rate");

    if (cookieCurrency) {
      setCurrency(cookieCurrency);
      setSymbol(getSymbolByCurrencyCode(cookieCurrency));
    }
    if (cookieRate) {
      const parsedRate = parseFloat(cookieRate);
      if (!isNaN(parsedRate) && parsedRate > 0) {
        setRate(parsedRate);
        return;
      }
    }

    // Fallback if cookies not yet populated on initial cold visit: query API
    if (cookieCurrency && cookieCurrency !== "NGN") {
      fetch(`/api/exchange-rates?to=${cookieCurrency}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && typeof data.conversion_rate === "number") {
            setRate(data.conversion_rate);
          }
        })
        .catch(() => {});
    }
  }, []);

  const convertPrice = (price: string | number): number => {
    const numeric =
      typeof price === "number"
        ? price
        : parseFloat(String(price).replace(/[^\d.]/g, "")) || 0;
    return numeric * rate;
  };

  const formatPrice = (price: string | number): string => {
    const converted = convertPrice(price);
    const needsSpace = /^[A-Za-z]/.test(symbol);
    const prefix = needsSpace ? `${symbol} ` : symbol;
    return `${prefix}${converted.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, symbol, rate, formatPrice, convertPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
