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
  } catch {
    return NextResponse.json({ error: 'Error fetching testimonials' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate input
    if (!body.author || !body.text || !body.position) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        author: body.author,
        text: body.text,
        position: body.position,
      }
    })
    return NextResponse.json(testimonial)
  } catch (error) {
    console.error('Error creating testimonial:', error)
    return NextResponse.json(
      { error: 'Error creating testimonial. Please check database connection.' },
      { status: 500 }
    )
  }
} 