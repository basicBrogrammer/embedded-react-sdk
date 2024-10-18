export const normalizeSSN = (value: string) =>
  value
    .match(/\d*/g)
    ?.join('')
    .match(/(\d{0,3})(\d{0,2})(\d{0,4})/)
    ?.slice(1)
    .filter(match => match !== '')
    .join('-')
    .substring(0, 12) || ''
