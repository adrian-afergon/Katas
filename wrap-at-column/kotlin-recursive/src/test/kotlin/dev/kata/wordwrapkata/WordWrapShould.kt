package dev.kata.wordwrapkata

import org.assertj.core.api.Assertions.*
import org.junit.jupiter.api.Test

internal class WordWrapShould {
    @Test
    fun `return the complete word when size is less than column number`() {
        assertThat(WordWrap.wrap("foo", 4)).isEqualTo("foo")
        assertThat(WordWrap.wrap("fooo", 4)).isEqualTo("fooo")
    }

    @Test
    fun `should break after last letter of the first word`() {
        assertThat(WordWrap.wrap("Hello МИР", 5)).isEqualTo("Hello\nМИР")
    }

    @Test
    fun `should break after last letter of the first word and break after last letter of the second word`() {
        assertThat(WordWrap.wrap("Hello World Jorge", 5)).isEqualTo("Hello\nWorld\nJorge")
    }

    @Test
    fun `should break a word when no change to be splitted by white spaces`() {
        assertThat(WordWrap.wrap("Hello dinosaur", 5)).isEqualTo("Hello\ndinos\naur")
        assertThat(WordWrap.wrap("Hola", 1)).isEqualTo("H\no\nl\na")
    }

}
