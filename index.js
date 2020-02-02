/**
 * Check if a value is unavailable
 * @param { any } input - The input
 * @returns { any } The input or "N/A"
 */
module.exports = input => {
    if (typeof input === 'undefined' || input === null || input === '') return "N/A"
    if (typeof input === 'object') if (Object.keys(input).length === 0) return "N/A"
    if (input instanceof Array) if (input.length === 0) return "N/A"
    if (typeof input === 'number')  if (isNaN(input)) return "N/A"
    return input
}