import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const to = (searchParams.get('to') || 'PKR').toUpperCase();
  const apiKey = (process.env.EXCHANGE_RATE_API || '').replace(/['"]/g, '').trim();

  if (!apiKey || to === 'NGN') {
    return NextResponse.json({
      result: 'success',
      base_code: 'NGN',
      target_code: to,
      conversion_rate: 1,
    });
  }

  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/NGN/${to}`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Exchange rate API error:', error);
    return NextResponse.json(
      { result: 'error', conversion_rate: 1, error: String(error) },
      { status: 500 }
    );
  }
}
