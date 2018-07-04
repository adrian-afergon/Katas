function wrapAtColumn(text, columnWidth) {
  if (text.length < columnWidth) {
    return text
  }
  const arr = []
  let i = 0

  while(i < text.length) {
    arr.push(text.substr(i, columnWidth))
    i+=columnWidth
  }

  return arr.join('\n')
}

module.exports = wrapAtColumn