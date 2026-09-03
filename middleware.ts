import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCurrencyByCountryCode } from './app/lib/countryToCurrency';

function isLocalOrPrivateIp(ip: string | null | undefined): boolean {
  if (!ip) return true;
  if (ip === '::1' || ip === '127.0.0.1' || ip === 'localhost') return true;
  if (ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('127.')) return true;
  if (ip.startsWith('172.')) {
    const secondOctet = parseInt(ip.split('.')[1], 10);
    if (secondOctet >= 16 && secondOctet <= 31) return true;
  }
  return false;
}

export async function middleware(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : (realIp || request.ip);

    // In local dev or private subnet, query ipwho.is without an IP to get public IP
    const url = isLocalOrPrivateIp(clientIp)
      ? 'https://ipwho.is/'
      : `https://ipwho.is/${clientIp}`;

    const res = await fetch(url, { cache: 'no-store' });
    const ipData = await res.json();

    const country = ipData?.country || '';
    const countryCode = ipData?.country_code || '';
    const currency = getCurrencyByCountryCode(countryCode);

    // Fetch conversion rate from ExchangeRate-API
    let exchangeRate = 1;
    const apiKey = (process.env.EXCHANGE_RATE_API || '').replace(/['"]/g, '').trim();

    if (currency.code && currency.code !== 'NGN' && apiKey) {
      try {
        const rateRes = await fetch(
          `https://v6.exchangerate-api.com/v6/${apiKey}/pair/NGN/${currency.code}`,
          { cache: 'no-store' }
        );
        if (rateRes.ok) {
          const rateData = await rateRes.json();
          if (rateData?.result === 'success' && typeof rateData.conversion_rate === 'number') {
            exchangeRate = rateData.conversion_rate;
          }
        }
      } catch (rateErr) {
        console.error('Error fetching exchange rate from ExchangeRate-API:', rateErr);
      }
    }

    const sampleBase = 200; // Base NGN price
    const sampleConverted = (sampleBase * exchangeRate).toFixed(2);

    const result = {
      country,
      country_code: countryCode,
      currency: {
        code: currency.code,
        symbol: currency.symbol,
      },
      base_currency: 'NGN',
      exchange_rate: exchangeRate,
      sample_price: `${currency.symbol}${sampleConverted} (converted from ₦${sampleBase})`,
    };

    console.log('User IP & Exchange details:\n' + JSON.stringify(result, null, 2));

    const response = NextResponse.next();

    // Store in cookies for client components & CurrencyContext
    response.cookies.set('user_currency', currency.code, { path: '/' });
    response.cookies.set('user_symbol', encodeURIComponent(currency.symbol), { path: '/' });
    response.cookies.set('user_rate', exchangeRate.toString(), { path: '/' });

    // Forward details in headers (encodeURIComponent prevents ByteString errors with Unicode symbols like '₨', '€', '₹')
    if (country) response.headers.set('x-user-country', encodeURIComponent(country));
    if (countryCode) response.headers.set('x-user-country-code', countryCode);
    if (currency.code) response.headers.set('x-user-currency-code', currency.code);
    if (currency.symbol) response.headers.set('x-user-currency-symbol', encodeURIComponent(currency.symbol));
    response.headers.set('x-user-exchange-rate', exchangeRate.toString());

    return response;
  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.next();
  }
}

// Support default and proxy conventions
export const proxy = middleware;
export default middleware;

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, and other static assets
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
