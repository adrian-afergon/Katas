function wrapAtColumn(text, columnWidth) {

  if (text.length > columnWidth) {
    return text.substring(0, columnWidth) + '\n' + text.substring(columnWidth);
  }

  return text;
}

module.exports = wrapAtColumn