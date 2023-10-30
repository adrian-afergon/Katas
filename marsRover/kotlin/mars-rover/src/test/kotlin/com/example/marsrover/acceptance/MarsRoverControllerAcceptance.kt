package com.example.marsrover.acceptance

import com.example.marsrover.infrastructure.controllers.MarsRoverController
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.http.MediaType.APPLICATION_JSON
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@WebMvcTest(controllers = [MarsRoverController::class])

internal class MarsRoverControllerAcceptance {
    @Autowired
    private lateinit var mockMvc: MockMvc

    @Test
    fun `rover lands mars at provided coordinates facing a direction`() {
        val requestBody = """
            {
                "x": 2,
                "y": 2,
                "direction": "E"
            }
        """.trimIndent()

        mockMvc.perform(
            MockMvcRequestBuilders.
            post("/rovers")
                .contentType(APPLICATION_JSON)
                .content(requestBody)
        )
            .andExpect(status().isCreated)
            .andReturn()
    }

    @Test
    fun `landed rover must have a position`() {
        mockMvc.perform(
            MockMvcRequestBuilders.
            get("/rovers/123")
        )
            .andExpect(status().isOk)
            .andExpect(content().json("""
                {
                    "x": 2,
                    "y": 2,
                    "direction": "E"
                }
            """.trimIndent()))
            .andReturn()
    }

    @Test
    fun `landed rover must move forward`() {
        val requestBody = """
            {
                "command": "F"
            }
        """.trimIndent()

        mockMvc.perform(
            MockMvcRequestBuilders.
            put("/rovers/123/move")
                .contentType(APPLICATION_JSON)
                .content(requestBody)
        )
            .andExpect(status().isOk)
            .andExpect(content().json("""
                {
                    "x": 2,
                    "y": 2,
                    "direction": "E"
                }
            """.trimIndent()))
            .andReturn()
    }

    @Test
    fun `landed rover change facing when turns left`() {
        val requestBody = """
            {
                "command": "L"
            }
        """.trimIndent()

        mockMvc.perform(
            MockMvcRequestBuilders.
            put("/rovers/123/move")
                .contentType(APPLICATION_JSON)
                .content(requestBody)
        )
            .andExpect(status().isOk)
            .andExpect(content().json("""
                {
                    "x": 2,
                    "y": 2,
                    "direction": "E"
                }
            """.trimIndent()))
            .andReturn()
    }

    @Test
    fun `landed rover change facing when turns right`() {
        val requestBody = """
            {
                "command": "R"
            }
        """.trimIndent()

        mockMvc.perform(
            MockMvcRequestBuilders.
            put("/rovers/123/move")
                .contentType(APPLICATION_JSON)
                .content(requestBody)
        )
            .andExpect(status().isOk)
            .andExpect(content().json("""
                {
                    "x": 2,
                    "y": 2,
                    "direction": "E"
                }
            """.trimIndent()))
            .andReturn()
    }
}