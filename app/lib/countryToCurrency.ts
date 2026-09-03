export interface CurrencyInfo {
  code: string;
  symbol: string;
  name: string;
}

export const countryToCurrency: Record<string, CurrencyInfo> = {
  // Asia
  PK: { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee' },
  IN: { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  BD: { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka' },
  LK: { code: 'LKR', symbol: 'Rs', name: 'Sri Lankan Rupee' },
  NP: { code: 'NPR', symbol: 'Rs', name: 'Nepalese Rupee' },
  CN: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
  JP: { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  KR: { code: 'KRW', symbol: '₩', name: 'South Korean Won' },
  HK: { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar' },
  TW: { code: 'TWD', symbol: 'NT$', name: 'New Taiwan Dollar' },
  SG: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  MY: { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit' },
  ID: { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah' },
  PH: { code: 'PHP', symbol: '₱', name: 'Philippine Peso' },
  TH: { code: 'THB', symbol: '฿', name: 'Thai Baht' },
  VN: { code: 'VND', symbol: '₫', name: 'Vietnamese Dong' },
  MM: { code: 'MMK', symbol: 'K', name: 'Myanmar Kyat' },
  KH: { code: 'KHR', symbol: '៛', name: 'Cambodian Riel' },
  KZ: { code: 'KZT', symbol: '₸', name: 'Kazakhstani Tenge' },
  UZ: { code: 'UZS', symbol: "so'm", name: 'Uzbekistani Som' },
  AZ: { code: 'AZN', symbol: '₼', name: 'Azerbaijani Manat' },
  GE: { code: 'GEL', symbol: '₾', name: 'Georgian Lari' },
  AM: { code: 'AMD', symbol: '֏', name: 'Armenian Dram' },

  // Middle East
  AE: { code: 'AED', symbol: 'AED', name: 'UAE Dirham' },
  SA: { code: 'SAR', symbol: 'SAR', name: 'Saudi Riyal' },
  QA: { code: 'QAR', symbol: 'QAR', name: 'Qatari Riyal' },
  KW: { code: 'KWD', symbol: 'KD', name: 'Kuwaiti Dinar' },
  BH: { code: 'BHD', symbol: 'BD', name: 'Bahraini Dinar' },
  OM: { code: 'OMR', symbol: 'OMR', name: 'Omani Rial' },
  JO: { code: 'JOD', symbol: 'JD', name: 'Jordanian Dinar' },
  IL: { code: 'ILS', symbol: '₪', name: 'Israeli New Shekel' },
  TR: { code: 'TRY', symbol: '₺', name: 'Turkish Lira' },
  LB: { code: 'LBP', symbol: 'L£', name: 'Lebanese Pound' },
  IQ: { code: 'IQD', symbol: 'ID', name: 'Iraqi Dinar' },

  // North America
  US: { code: 'USD', symbol: '$', name: 'US Dollar' },
  CA: { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar' },
  MX: { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso' },

  // Europe (Eurozone)
  DE: { code: 'EUR', symbol: '€', name: 'Euro' },
  FR: { code: 'EUR', symbol: '€', name: 'Euro' },
  IT: { code: 'EUR', symbol: '€', name: 'Euro' },
  ES: { code: 'EUR', symbol: '€', name: 'Euro' },
  NL: { code: 'EUR', symbol: '€', name: 'Euro' },
  BE: { code: 'EUR', symbol: '€', name: 'Euro' },
  AT: { code: 'EUR', symbol: '€', name: 'Euro' },
  PT: { code: 'EUR', symbol: '€', name: 'Euro' },
  IE: { code: 'EUR', symbol: '€', name: 'Euro' },
  GR: { code: 'EUR', symbol: '€', name: 'Euro' },
  FI: { code: 'EUR', symbol: '€', name: 'Euro' },
  CY: { code: 'EUR', symbol: '€', name: 'Euro' },
  EE: { code: 'EUR', symbol: '€', name: 'Euro' },
  LV: { code: 'EUR', symbol: '€', name: 'Euro' },
  LT: { code: 'EUR', symbol: '€', name: 'Euro' },
  LU: { code: 'EUR', symbol: '€', name: 'Euro' },
  MT: { code: 'EUR', symbol: '€', name: 'Euro' },
  SK: { code: 'EUR', symbol: '€', name: 'Euro' },
  SI: { code: 'EUR', symbol: '€', name: 'Euro' },
  HR: { code: 'EUR', symbol: '€', name: 'Euro' },

  // Europe (Non-Euro)
  GB: { code: 'GBP', symbol: '£', name: 'British Pound' },
  CH: { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc' },
  SE: { code: 'SEK', symbol: 'kr', name: 'Swedish Krona' },
  NO: { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone' },
  DK: { code: 'DKK', symbol: 'kr', name: 'Danish Krone' },
  PL: { code: 'PLN', symbol: 'zł', name: 'Polish Zloty' },
  CZ: { code: 'CZK', symbol: 'Kč', name: 'Czech Koruna' },
  HU: { code: 'HUF', symbol: 'Ft', name: 'Hungarian Forint' },
  RO: { code: 'RON', symbol: 'lei', name: 'Romanian Leu' },
  BG: { code: 'BGN', symbol: 'лв', name: 'Bulgarian Lev' },
  RS: { code: 'RSD', symbol: 'дин.', name: 'Serbian Dinar' },
  IS: { code: 'ISK', symbol: 'kr', name: 'Icelandic Krona' },
  UA: { code: 'UAH', symbol: '₴', name: 'Ukrainian Hryvnia' },
  RU: { code: 'RUB', symbol: '₽', name: 'Russian Ruble' },

  // Oceania
  AU: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  NZ: { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar' },
  FJ: { code: 'FJD', symbol: 'FJ$', name: 'Fijian Dollar' },

  // Africa
  NG: { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
  ZA: { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
  EG: { code: 'EGP', symbol: 'E£', name: 'Egyptian Pound' },
  KE: { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling' },
  GH: { code: 'GHS', symbol: 'GH₵', name: 'Ghanaian Cedi' },
  MA: { code: 'MAD', symbol: 'DH', name: 'Moroccan Dirham' },
  DZ: { code: 'DZD', symbol: 'DA', name: 'Algerian Dinar' },
  TN: { code: 'TND', symbol: 'DT', name: 'Tunisian Dinar' },
  ET: { code: 'ETB', symbol: 'Br', name: 'Ethiopian Birr' },
  TZ: { code: 'TZS', symbol: 'TSh', name: 'Tanzanian Shilling' },
  UG: { code: 'UGX', symbol: 'USh', name: 'Ugandan Shilling' },
  RW: { code: 'RWF', symbol: 'FRw', name: 'Rwandan Franc' },
  MU: { code: 'MUR', symbol: 'Rs', name: 'Mauritian Rupee' },
  ZM: { code: 'ZMW', symbol: 'ZK', name: 'Zambian Kwacha' },

  // South & Central America, Caribbean
  BR: { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
  AR: { code: 'ARS', symbol: '$', name: 'Argentine Peso' },
  CL: { code: 'CLP', symbol: '$', name: 'Chilean Peso' },
  CO: { code: 'COP', symbol: '$', name: 'Colombian Peso' },
  PE: { code: 'PEN', symbol: 'S/', name: 'Peruvian Sol' },
  UY: { code: 'UYU', symbol: '$U', name: 'Uruguayan Peso' },
  PY: { code: 'PYG', symbol: '₲', name: 'Paraguayan Guarani' },
  BO: { code: 'BOB', symbol: 'Bs.', name: 'Bolivian Boliviano' },
  EC: { code: 'USD', symbol: '$', name: 'US Dollar' },
  PA: { code: 'PAB', symbol: 'B/.', name: 'Panamanian Balboa' },
  CR: { code: 'CRC', symbol: '₡', name: 'Costa Rican Colon' },
  DO: { code: 'DOP', symbol: 'RD$', name: 'Dominican Peso' },
  JM: { code: 'JMD', symbol: 'J$', name: 'Jamaican Dollar' },
  TT: { code: 'TTD', symbol: 'TT$', name: 'Trinidad and Tobago Dollar' },
  GT: { code: 'GTQ', symbol: 'Q', name: 'Guatemalan Quetzal' },
};

export function getCurrencyByCountryCode(countryCode: string | null | undefined): CurrencyInfo {
  if (!countryCode) {
    return { code: 'USD', symbol: '$', name: 'US Dollar' };
  }
  const key = countryCode.trim().toUpperCase();
  return (
    countryToCurrency[key] || {
      code: 'USD',
      symbol: '$',
      name: 'US Dollar',
    }
  );
}

export function getSymbolByCurrencyCode(currencyCode: string | null | undefined): string {
  if (!currencyCode) return '$';
  const code = currencyCode.trim().toUpperCase();
  const match = Object.values(countryToCurrency).find((item) => item.code === code);
  return match?.symbol || code;
}

