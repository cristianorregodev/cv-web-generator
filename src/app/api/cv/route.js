import { NextRequest, NextResponse } from 'next/server'
import cvToJSON, { getCVBySlug } from '@/scripts/cv-opts'

export async function GET(request = NextRequest, { params }) {
    const req = await request.json()

    const json = {
        greeting,
    }
    console.log(params)
    return NextResponse.json(params)
}

export async function POST(request = NextRequest) {
    const data = await request.json()
    try {
        await cvToJSON(data)
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ message: 'Ha ocurrido un error' })
    }
}
