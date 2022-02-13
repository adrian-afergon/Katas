import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows

internal class MainKtTest {

    @Test
    fun `returns 0 given an empty input`() {
        assertEquals(0, add(""))
    }

    @Test
    fun `returns number given only one value at input`() {
        assertEquals(1, add("1"))
    }

    @Test
    fun `returns addition of multiple numbers at input split by comma`() {
        assertEquals(2, add("1,1"))
        assertEquals(6, add("1,2,3"))
    }

    @Test
    fun `ignore values at input that are not numbers`() {
        assertEquals(6, add("1,2,f,3"))
    }

    @Test
    fun `handle new lines character as a separator`() {
        assertEquals(6, add("1,2\n3"))
    }

    @Test
    fun `supports custom separators`() {
        assertEquals(3, add("//.\n1.2"))
        assertEquals(6, add("//.\n1.2.3"))
        assertEquals(6, add("//rf\n1rf2rf3"))
    }

    @Test
    fun `throws an exception given negative numbers at input`() {
        assertThrows<Exception>("negatives not allowed") { add("-1") }
        assertThrows<Exception>("negatives not allowed") { add("-1,1") }
        assertThrows<Exception>("negatives not allowed") { add("1,-1") }
        assertThrows<Exception>("negatives not allowed") { add("1,2,-1") }
        assertThrows<Exception>("negatives not allowed") { add("//rf\n-1") }
        assertThrows<Exception>("negatives not allowed") { add("//rf\n1rf-1") }
    }

    @Test
    fun `ignore number bigger than 1000` () {
        assertEquals(1, add("//.\n1.1001"))
        assertEquals(1001, add("//.\n1.1000"))
    }

}