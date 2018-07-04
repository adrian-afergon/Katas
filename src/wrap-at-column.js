function wrapAtColumn(text, columnWidth) {
  if (text.length < columnWidth) {
    return text
  }

  const arr = [];

  for (let i = 0; i < text.length; i+=columnWidth) {
    arr.push(text.substr(i, columnWidth)) 
  }

  return arr.join('\n')
}

module.exports = wrapAtColumn