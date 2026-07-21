import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: 'Astra',
    breed: 'Golden Gallop',
    mood: 'focused',
    speed: 42,
    accent: '#c9952e',
    description: 'A polished horse avatar for the dashboard experience.',
  });
}
