function wrapAtColumn(text, columnWidth) {
  if (text.length > columnWidth) {
    return text.split('').join('\n')
  }
  return text
}

module.exports = wrapAtColumn