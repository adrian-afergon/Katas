class Wrapper {

    companion object {

        private const val lineJump = "\n"
        private const val whiteSpace = " "

        private fun createLines (limit: Int, lines: List<String>, word: String): List<String> {

            if (lines.isEmpty()) {
                return listOf(word)
            }

            val lastLine = lines.last()
            val futureLineLength = lastLine.length + word.length + whiteSpace.length

            return if (futureLineLength <= limit) lines.take(lines.size -1) + "$lastLine $word"
            else lines + word
        }

        fun wrap (text: String, limit: Int): String {
            return text
                .split(whiteSpace)
                .fold(listOf<String>()){ lines, word -> createLines(limit, lines, word) }
                .joinToString(separator = lineJump)
        }
    }

}