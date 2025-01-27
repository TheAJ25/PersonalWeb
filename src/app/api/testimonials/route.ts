import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(testimonials)
  } catch (_error) {
    return NextResponse.json({ error: 'Error fetching testimonials' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const testimonial = await prisma.testimonial.create({
      data: {
        author: body.author,
        text: body.text,
        position: body.position,
      }
    })
    return NextResponse.json(testimonial)
  } catch (_error) {
    return NextResponse.json({ error: 'Error creating testimonial' }, { status: 500 })
  }
} 