// api > hello > [slug] > route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getCVBySlug } from '@/scripts/cv-opts'

export async function GET(request = NextRequest, { params } = { params: { slug: string } }) {
    const slug = params.slug
    try {
        const cv = JSON.parse(getCVBySlug(slug))
        return NextResponse.json(cv)
    } catch (error) {
        return NextResponse.json({ message: 'Ha ocurrido un error' })
    }
}
