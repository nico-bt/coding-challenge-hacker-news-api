const DATE_UNITS = {
  year: 31536000,
  month: 2629800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1, // second is the smallest unit
}

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" })

// En este caso en la API the hackerNews hay que multiplicar por mil el tiempo que nos da,
// pero dependerá del formato inicial del parámetro 'epochTime' si hace falta o no *1000
export const getRelativeTime = (epochTime) => {
  const started = new Date(epochTime * 1000).getTime()
  const now = new Date().getTime()

  const elapsed = (started - now) / 1000

  for (const unit in DATE_UNITS) {
    const absoluteElapsed = Math.abs(elapsed)

    if (absoluteElapsed > DATE_UNITS[unit] || unit === "second") {
      return rtf.format(Math.round(elapsed / DATE_UNITS[unit]), unit)
    }
  }
}
