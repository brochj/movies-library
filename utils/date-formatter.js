import { parseISO, format } from 'date-fns'

export function dateFormat(dateString) {
  const date = parseISO(dateString)
  return format(date, "dd'-'MM'-'yyyy")
}

export function brazilFormat(dateString) {
  const date = parseISO(dateString)
  return format(date, "dd'/'MM'/'yyyy")
}
