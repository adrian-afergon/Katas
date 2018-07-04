function wrapAtColumn(text, columnWidth) {
  if (text.length < columnWidth) {
    return text
  }

  const arr = [];

  for (let i = 0; i < text.length; i+=columnWidth) {
    let j = i
    while (text[j] !== ' ' && j > 0) {
      j--;
    }

    // console.log(i, j, columnWidth)

    if (j < 1) {
      arr.push(text.substr(i, columnWidth))
    } else {
      arr.push(text.substr(i, j))
      i = j
    }
  }

  return arr.join('\n');
}

module.exports = wrapAtColumn