import fs from 'node:fs'
import path from 'node:path'
import { slugify } from './slugify'

export const getCVS = () => {
    const root = process.cwd()
    const directorio = path.join(root, 'cv')
    return fs.readdirSync(directorio)
}

export const existCV = (slug) => {
    const cvs = getCVS()
    return cvs.find((cv) => cv.includes(slug))
}

export const getCVBySlug = (slug) => {
    const cvs = getCVS()
    const cv = cvs.find((cv) => cv.includes(slug))
    return fs.readFileSync(path.join(process.cwd(), 'cv', cv))
}

async function cvToJSON(data) {
    //Get the current working directory
    const root = process.cwd()

    // Convert data to JSON format
    const jsonData = JSON.stringify(data, null, 2)

    //Create slug by name
    const slug = slugify(data.name)

    // Dir where CV will be saved
    const outout_dir = path.join(root, 'cv')

    // Complete route with filename
    const file_path = path.join(outout_dir, `${slug}.json`)

    // Crear el directorio si no existe
    if (!fs.existsSync(outout_dir)) {
        fs.mkdirSync(outout_dir, { recursive: true })
    }

    // Escribir el archivo JSON
    fs.writeFile(file_path, jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir el archivo JSON:', err)
        } else {
            console.log('Archivo JSON creado exitosamente:', file_path)
        }
    })
}

export default cvToJSON
