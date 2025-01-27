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
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Error fetching testimonials' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    if (!body.author || !body.text || !body.position) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
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
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Error creating testimonial' }, { status: 500 })
  }
} 