private fun splitSeparatorAndValues(input: String): List<String> {
    val (command, values) = input.split("\n", limit = 2)
    val separator = command.substring(2, command.length)
    return listOf(separator, values)
}

private fun sumValidNumbers(total: Int, it: Int): Int {
    if (it < 0) {
        throw Exception("negatives not allowed")
    }
    return when (it > 1000) {
        true -> total
        false -> total + it
    }
}

fun add(input: String): Int {

    if (input.isEmpty()) {
        return 0
    }

    val (separator, values) = when (input.startsWith("//")) {
        true -> splitSeparatorAndValues(input)
        false -> listOf(",", input)
    }

    return values
        .replace("\n", separator)
        .split(separator)
        .fold(0) { total, number ->
            number.toIntOrNull()
                ?.let { it -> sumValidNumbers(total, it) }
                ?: total
        }
}