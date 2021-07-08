// capitalize first letter
export const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// lowercase first letter
export const lowercase = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toLowerCase() + s.slice(1)
}
