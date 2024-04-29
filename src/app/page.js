import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <h1>Generador de CV</h1>
            <Link href={'/cv'}>Empezar</Link>
        </main>
    )
}
