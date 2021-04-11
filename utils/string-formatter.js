export function stringToSlug(text, separator = "-") {
  return text
    .toString()
    .normalize('NFD')                   // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '')   // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '')   // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, separator);
}

export function genreSlugToString(slug) {
  const values = [
    { slug: "acao" , string: "Ação" },
    { slug: "animacao" , string: "Animação" },
    { slug: "aventura" , string: "Aventura" },
    { slug: "biografia" , string: "Biografia" },
    { slug: "comedia" , string: "Comédia" },
    { slug: "crime" , string: "Crime" },
    { slug: "documentario" , string: "Documentário" },
    { slug: "drama" , string: "Drama" },
    { slug: "fantasia" , string: "Fantasia" },
    { slug: "faroeste" , string: "Faroeste" },
    { slug: "ficcao-cientifica" , string: "Ficção Científica" },
    { slug: "guerra" , string: "Guerra" },
    { slug: "historia" , string: "História" },
    { slug: "misterio" , string: "Mistério" },
    { slug: "musical" , string: "Musical" },
    { slug: "romance" , string: "Romance" },
    { slug: "suspense" , string: "Suspense" },
    { slug: "terror" , string: "Terror" },
  ]
  let item = ""
  values.forEach((elem, index) => {
    if (elem.slug == slug ) {
      item = values[index].string
    }
  });
  return item
}