import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test

internal class WrapperTest {

    @Test
    fun `should returns same word given a bigger column number`() {
        Assertions.assertEquals("Hello", Wrapper.wrap("Hello", 5))
        Assertions.assertEquals("Hello", Wrapper.wrap("Hello", 4))
    }

    @Test
    fun `should return multiple lines given a text bigger than column number`() {
        Assertions.assertEquals("Hello\nson", Wrapper.wrap("Hello son", 5))
        Assertions.assertEquals("asd\nrfb\nasd", Wrapper.wrap("asd rfb asd", 3))
        Assertions.assertEquals("asd\nrfb\nasd", Wrapper.wrap("asd rfb asd", 4))
    }

    @Test
    fun `return multiple lines given a last line smaller than the column number`() {
        Assertions.assertEquals(
            "Hello\ndarkness, my\nold friend",
            Wrapper.wrap("Hello darkness, my old friend", 12)
        )
    }
}