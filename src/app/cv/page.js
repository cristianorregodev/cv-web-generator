import { CVFormContainer } from '@/containers/form/CVFormContainer'
import React from 'react'

export default function CV() {
    return (
        <div className="lg:grid lg:grid-cols-[1fr,1.5fr] lg:gap-6">
            <CVFormContainer />
            <section className="bg-red-50">Preview</section>
        </div>
    )
}
