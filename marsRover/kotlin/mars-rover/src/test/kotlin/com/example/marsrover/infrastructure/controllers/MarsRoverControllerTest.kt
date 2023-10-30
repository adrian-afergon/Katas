package com.example.marsrover.infrastructure.controllers

import arrow.core.left
import arrow.core.right
import com.example.marsrover.application.LandCommandHandler
import com.example.marsrover.application.LandError
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Nested
import org.mockito.Mockito
import org.mockito.Mockito.`when`
import org.mockito.kotlin.anyOrNull
import org.springframework.http.HttpStatus

class MarsRoverControllerTest {

    private val handler: LandCommandHandler = Mockito.mock(LandCommandHandler::class.java)
    private val controller: MarsRoverController = MarsRoverController(handler)

    @Nested
    @DisplayName("When Rover try to lands at Mars")
    inner class RoverLandsAtMars {
        @Test
        fun `lands successfully`() {
            `when`(handler.handle(anyOrNull())).thenReturn(Unit.right())
            val response = controller.land()
            assertEquals(HttpStatus.CREATED, response.statusCode)
        }

        @Test
        fun `does not land when system fails`() {
            `when`(handler.handle(anyOrNull())).thenReturn(
                LandError.UnknownError(RuntimeException()).left()
            )
            val response = controller.land()
            assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.statusCode)
        }

    }


    @Nested
    @DisplayName("When Rover is not at Mars")
    inner class RoverNotAtMars {

        @Test
        fun `Rover has no land Mars we have not information`() {
            val response = controller.info("123")
            assertEquals(HttpStatus.NOT_FOUND, response.statusCode)
        }

        @Test
        fun `moves Rover at Mars`() {
            val response = controller.move("123")
            assertEquals(HttpStatus.NOT_FOUND, response.statusCode)
        }

    }

    @Nested
    @DisplayName("When Rover is at Mars")
    inner class RoverAtMars {

        @Test
        fun `Rover has a position at Mars`() {
            val response = controller.info("123")
            assertEquals(HttpStatus.OK, response.statusCode)
        }

        @Test
        fun `moves Rover at Mars`() {
            val response = controller.move("123")
            assertEquals(HttpStatus.OK, response.statusCode)
        }

    }

}