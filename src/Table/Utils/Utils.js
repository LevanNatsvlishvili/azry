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
    return true;
  })

  if (contains) return true;

  return false;
}

function makeid() {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < 32; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function divideId() {
  let id = [...makeid()];
  let newId = '';

  for (let i = 1; i < id.length; i++) {
    if (i === 8 || i === 12 || i === 16 || i === 20 || i === 32) {
      newId += '-';
    }
    if (i !== 8 || i !== 12 || i !== 16 || i !== 20 || i !== 32) {
      newId += id[i];
    }
  }
  return newId;
}
