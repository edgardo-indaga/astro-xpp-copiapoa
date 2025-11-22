/**
 * Convierte un texto a formato slug URL-friendly
 * @param text - El texto a convertir
 * @returns El slug generado
 */
export function slugify(text: string): string {
    return text
        .toString()
        .normalize("NFD") // Normalizar caracteres Unicode
        .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // Reemplazar espacios con guiones
        .replace(/[^\w\-]+/g, "") // Eliminar caracteres especiales
        .replace(/\-\-+/g, "-") // Reemplazar múltiples guiones con uno solo
        .replace(/^-+/, "") // Eliminar guiones al inicio
        .replace(/-+$/, ""); // Eliminar guiones al final
}
