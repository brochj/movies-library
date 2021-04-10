export function imdbRatingsObject(){
  let notes = []; // [0-0, 0-1, 0-2, ..., 9-9]
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        notes.push({tag: i + "." + j, slug: i + "-" + j})
    }
  }
  return notes // [{tag: "0.0", slug: "0-0"}, ..., {tag: "9.9", slug: "9-9"}]
}

export function imdbRatingsSlug() {
  let notes = [];
  for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
          notes.push(i + "-" + j)
      }
  }
  return notes // ["0-0", "0-1", ..., "9-9"]
}

export function imdbRatings() {
  let notes = [];
  for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
          notes.push(i + "." + j)
      }
  }
  return notes // ["0.0", "0.1", ..., "9.9"]
}