const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export function createISOString(date = new Date()): string {
  return date.toISOString()
}

export function dateFormatter(date: Date = new Date()): string {
  const createdDate = new Date(date)
  return createdDate.toLocaleDateString('en-US', DATE_OPTIONS)
}
