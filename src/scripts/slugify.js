export const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Reemplaza los espacios en blanco por guiones
        .replace(/[^\w\-]+/g, '') // Elimina los caracteres no alfanuméricos excepto guiones
        .replace(/\-\-+/g, '-') // Reemplaza múltiples guiones por uno solo
        .replace(/^-+/, '') // Elimina los guiones al inicio del texto
        .replace(/-+$/, '') // Elimina los guiones al final del texto
}
