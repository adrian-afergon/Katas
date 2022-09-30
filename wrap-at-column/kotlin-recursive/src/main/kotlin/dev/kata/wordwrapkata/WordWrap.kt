package dev.kata.wordwrapkata

class WordWrap() {

    companion object {
        fun wrap(word: String, column: Int): String {
            if (word.length <= column) {
                return word
            }
            return word
                .substring(0, column)
                .plus("\n")
                .plus(wrap(word.substring(column).trim(), column))
        }
    }
}
