export const searchInArray = (cells, value) => {
  if (!value) return true;
  let contains = false;
  Object.entries(cells).map((cell) => {
    if (typeof cell[1] === 'string') {
      if (cell[1].toLowerCase().includes(value.toLowerCase())) {
        contains = true;
      }
    }

    if (typeof cell[1] === 'number') {
      if (cell[1].toString().toLowerCase().includes(value.toLowerCase())) {
        contains = true;
      }
    }
  })

  if (contains) return true;

  return false;
}